package com.psa;

import io.grpc.Server;
import java.util.*;
import java.sql.*;
import io.grpc.ServerBuilder;
import io.grpc.protobuf.services.ProtoReflectionService;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import liquibase.Contexts;
import liquibase.LabelExpression;
import liquibase.Liquibase;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.resource.ClassLoaderResourceAccessor;
import org.testcontainers.containers.PostgreSQLContainer;

public class Main {

  public static final String ENV = "local";

  public static Connection connection;

  public static void main(String[] args) throws Exception {

    System.out.println("Server starting in '" + ENV + "' mode...");

    if (ENV.equals("production")) {
      // We'll implement this when we're ready to deploy on the cloud.
    } else if (ENV.equals("local")) {

      System.out.println("Starting a MySQL 8.0.26 image as a Docker container...");

      // MySQL, testcontainers, and Docker.

      PostgreSQLContainer<?> postgresql = new PostgreSQLContainer<>("postgres:13.3")
          .withDatabaseName("etpdb")
          .withUsername("testuser")
          .withPassword("testpass");

      postgresql.start();

      String jdbcUrl = postgresql.getJdbcUrl();
      String username = postgresql.getUsername();
      String password = postgresql.getPassword();

      // JDBC.

      System.out.println("Connecting to PostgreSQL/Docker container over JDBC...");

      connection = DriverManager.getConnection(jdbcUrl, username, password);

      Database database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(
          new liquibase.database.jvm.JdbcConnection(connection));

      // Liquibase.

      System.out.println("Running Liquibase changesets...");

      Liquibase liquibase = new Liquibase("db/changelog/changelog-main.xml",
          new ClassLoaderResourceAccessor(), database);
      liquibase.update(new Contexts(), new LabelExpression());

      // Query.

      System.out.println("Running a test query (get 10 orders)...");

      Statement statement = connection.createStatement();

      ResultSet resultSet = statement.executeQuery("SELECT * FROM public.order LIMIT 10");

      while (resultSet.next()) {
        String id = resultSet.getString("id");
        System.out.println("ID: " + id);
      }

      // Create Symbols.
      // [AAPL, AMZN, TSLA, GOOG, NVDA]

      List<String> symbols = new ArrayList<>();

      symbols.add("AAPL");
      symbols.add("AMZN");
      symbols.add("TSLA");
      symbols.add("GOOG");
      symbols.add("INTC");
      symbols.add("MSFT");
      symbols.add("GME");
      symbols.add("DIS");
      symbols.add("PYPL");
      symbols.add("SOFI");
      symbols.add("AAL");
      symbols.add("AMD");
      symbols.add("BAC");

      System.out.println("Adding symbols...");

      String insertSQL = "INSERT INTO public.symbol (symbol, status) " +
              "VALUES (?, 'OPEN') ON CONFLICT (symbol) DO NOTHING";
      try (PreparedStatement addSymStmt = connection.prepareStatement(insertSQL)) {
        for (String sym : symbols) {
          addSymStmt.setString(1, sym);
          addSymStmt.executeUpdate();
        }
      } catch (SQLException e) {
        e.printStackTrace();
      }

    }

    Server server = ServerBuilder.forPort(8999)
        .addService(ProtoReflectionService.newInstance())
        .addService(new ExchangeGrpcImpl(connection)).build();

    server.start();

    System.out.println("Server started on port " + server.getPort() + ".");

    server.awaitTermination();
  }
}
