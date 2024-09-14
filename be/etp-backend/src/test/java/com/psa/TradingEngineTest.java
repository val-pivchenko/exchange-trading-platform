package com.psa;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class TradingEngineTest {
    @Mock
    private Connection db;

    @Mock
    private Statement stmt;

    private TradingEngine tradingEngine;

    public TradingEngineTest() throws SQLException {
        when(db.createStatement()).thenReturn(stmt);

        tradingEngine = new TradingEngine(db);

    }

    @Test
    public void testScanOrderBook() {
        tradingEngine.scanOrderBook("AAPL");
    }
}
