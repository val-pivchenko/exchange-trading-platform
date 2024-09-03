package com.psa.models;

public record OrderEntity(
  String id,
  String status,
  String broker,
  String symbol,
  String side,
  String type,
  double price,
  int quantity,
  int quantity_filled,
  int quantity_cancelled,
  long timestamp_epoch_ms
) {}
