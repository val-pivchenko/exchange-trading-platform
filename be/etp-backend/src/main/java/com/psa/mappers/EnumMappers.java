package com.psa.mappers;

import com.psa.ExchangeOuterClass.OrderStatus;
import com.psa.ExchangeOuterClass.OrderType;
import com.psa.ExchangeOuterClass.Symbol.SymbolStatus;

public class EnumMappers {

  public static OrderType fromStringType(String type) {
    switch (type) {
      case "LIMIT":
        return OrderType.LIMIT;
      case "MARKET":
        return OrderType.MARKET;
      default:
        throw new RuntimeException("Invalid order type '" + type + "'.");
    }
  }

  public static OrderStatus fromStringStatus(String status) {
    switch (status) {
      case "OPEN":
        return OrderStatus.OPEN;
      case "COMPLETE":
        return OrderStatus.COMPLETE;
      default:
        throw new RuntimeException("Invalid order status '" + status + "'.");
    }
  }

  public static SymbolStatus fromStringSymbolStatus(String status) {
    switch (status) {
      case "UNSET_SYMBOL_STATUS":
        return SymbolStatus.UNSET_SYMBOL_STATUS;
      case "OPEN":
        return SymbolStatus.OPEN;
      case "HALTED":
        return SymbolStatus.HALTED;
      default:
        throw new RuntimeException("Invalid symbol status '" + status + "'.");
    }
  }
}
