// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "exchange.proto" (package "com.psa", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * @generated from protobuf message com.psa.CreateOrderRequest
 */
export interface CreateOrderRequest {
    /**
     * @generated from protobuf field: string broker = 1;
     */
    broker: string;
    /**
     * @generated from protobuf field: string symbol = 2;
     */
    symbol: string;
    /**
     * @generated from protobuf field: double price = 3;
     */
    price: number;
    /**
     * @generated from protobuf field: com.psa.Side side = 4;
     */
    side: Side;
    /**
     * @generated from protobuf field: int32 quantity = 5;
     */
    quantity: number;
}
/**
 * @generated from protobuf message com.psa.CreateOrderResponse
 */
export interface CreateOrderResponse {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message com.psa.GetOrdersRequest
 */
export interface GetOrdersRequest {
    /**
     * @generated from protobuf field: string broker = 1;
     */
    broker: string;
    /**
     * @generated from protobuf field: string symbol = 2;
     */
    symbol: string;
}
/**
 * @generated from protobuf message com.psa.Order
 */
export interface Order {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string broker = 2;
     */
    broker: string;
    /**
     * @generated from protobuf field: string symbol = 3;
     */
    symbol: string;
    /**
     * @generated from protobuf field: double price = 4;
     */
    price: number;
    /**
     * @generated from protobuf field: com.psa.Side side = 5;
     */
    side: Side;
    /**
     * @generated from protobuf field: int32 quantity = 6;
     */
    quantity: number;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp timestamp = 7;
     */
    timestamp?: Timestamp;
}
/**
 * @generated from protobuf message com.psa.GetOrdersResponse
 */
export interface GetOrdersResponse {
    /**
     * @generated from protobuf field: repeated com.psa.Order orders = 1;
     */
    orders: Order[];
}
/**
 * @generated from protobuf message com.psa.GetMarketDepthRequest
 */
export interface GetMarketDepthRequest {
    /**
     * @generated from protobuf field: string symbol = 1;
     */
    symbol: string;
}
/**
 * @generated from protobuf message com.psa.GetMarketDepthResponse
 */
export interface GetMarketDepthResponse {
    /**
     * @generated from protobuf field: repeated com.psa.Order orders = 1;
     */
    orders: Order[];
}
/**
 * @generated from protobuf message com.psa.GetSymbolRequest
 */
export interface GetSymbolRequest {
    /**
     * @generated from protobuf field: string symbol = 1;
     */
    symbol: string;
}
/**
 * @generated from protobuf message com.psa.GetSymbolResponse
 */
export interface GetSymbolResponse {
    /**
     * @generated from protobuf field: double last_trade = 1;
     */
    lastTrade: number;
}
/**
 * @generated from protobuf enum com.psa.Side
 */
export enum Side {
    /**
     * @generated from protobuf enum value: BUY = 0;
     */
    BUY = 0,
    /**
     * @generated from protobuf enum value: SELL = 1;
     */
    SELL = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class CreateOrderRequest$Type extends MessageType<CreateOrderRequest> {
    constructor() {
        super("com.psa.CreateOrderRequest", [
            { no: 1, name: "broker", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "price", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 4, name: "side", kind: "enum", T: () => ["com.psa.Side", Side] },
            { no: 5, name: "quantity", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<CreateOrderRequest>): CreateOrderRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.broker = "";
        message.symbol = "";
        message.price = 0;
        message.side = 0;
        message.quantity = 0;
        if (value !== undefined)
            reflectionMergePartial<CreateOrderRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateOrderRequest): CreateOrderRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string broker */ 1:
                    message.broker = reader.string();
                    break;
                case /* string symbol */ 2:
                    message.symbol = reader.string();
                    break;
                case /* double price */ 3:
                    message.price = reader.double();
                    break;
                case /* com.psa.Side side */ 4:
                    message.side = reader.int32();
                    break;
                case /* int32 quantity */ 5:
                    message.quantity = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateOrderRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string broker = 1; */
        if (message.broker !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.broker);
        /* string symbol = 2; */
        if (message.symbol !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.symbol);
        /* double price = 3; */
        if (message.price !== 0)
            writer.tag(3, WireType.Bit64).double(message.price);
        /* com.psa.Side side = 4; */
        if (message.side !== 0)
            writer.tag(4, WireType.Varint).int32(message.side);
        /* int32 quantity = 5; */
        if (message.quantity !== 0)
            writer.tag(5, WireType.Varint).int32(message.quantity);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.CreateOrderRequest
 */
export const CreateOrderRequest = new CreateOrderRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateOrderResponse$Type extends MessageType<CreateOrderResponse> {
    constructor() {
        super("com.psa.CreateOrderResponse", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<CreateOrderResponse>): CreateOrderResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<CreateOrderResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateOrderResponse): CreateOrderResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateOrderResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.CreateOrderResponse
 */
export const CreateOrderResponse = new CreateOrderResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOrdersRequest$Type extends MessageType<GetOrdersRequest> {
    constructor() {
        super("com.psa.GetOrdersRequest", [
            { no: 1, name: "broker", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetOrdersRequest>): GetOrdersRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.broker = "";
        message.symbol = "";
        if (value !== undefined)
            reflectionMergePartial<GetOrdersRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrdersRequest): GetOrdersRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string broker */ 1:
                    message.broker = reader.string();
                    break;
                case /* string symbol */ 2:
                    message.symbol = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetOrdersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string broker = 1; */
        if (message.broker !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.broker);
        /* string symbol = 2; */
        if (message.symbol !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.symbol);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.GetOrdersRequest
 */
export const GetOrdersRequest = new GetOrdersRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Order$Type extends MessageType<Order> {
    constructor() {
        super("com.psa.Order", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "broker", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "price", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ },
            { no: 5, name: "side", kind: "enum", T: () => ["com.psa.Side", Side] },
            { no: 6, name: "quantity", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "timestamp", kind: "message", T: () => Timestamp }
        ]);
    }
    create(value?: PartialMessage<Order>): Order {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.broker = "";
        message.symbol = "";
        message.price = 0;
        message.side = 0;
        message.quantity = 0;
        if (value !== undefined)
            reflectionMergePartial<Order>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Order): Order {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string broker */ 2:
                    message.broker = reader.string();
                    break;
                case /* string symbol */ 3:
                    message.symbol = reader.string();
                    break;
                case /* double price */ 4:
                    message.price = reader.double();
                    break;
                case /* com.psa.Side side */ 5:
                    message.side = reader.int32();
                    break;
                case /* int32 quantity */ 6:
                    message.quantity = reader.int32();
                    break;
                case /* google.protobuf.Timestamp timestamp */ 7:
                    message.timestamp = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.timestamp);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Order, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string broker = 2; */
        if (message.broker !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.broker);
        /* string symbol = 3; */
        if (message.symbol !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.symbol);
        /* double price = 4; */
        if (message.price !== 0)
            writer.tag(4, WireType.Bit64).double(message.price);
        /* com.psa.Side side = 5; */
        if (message.side !== 0)
            writer.tag(5, WireType.Varint).int32(message.side);
        /* int32 quantity = 6; */
        if (message.quantity !== 0)
            writer.tag(6, WireType.Varint).int32(message.quantity);
        /* google.protobuf.Timestamp timestamp = 7; */
        if (message.timestamp)
            Timestamp.internalBinaryWrite(message.timestamp, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.Order
 */
export const Order = new Order$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetOrdersResponse$Type extends MessageType<GetOrdersResponse> {
    constructor() {
        super("com.psa.GetOrdersResponse", [
            { no: 1, name: "orders", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Order }
        ]);
    }
    create(value?: PartialMessage<GetOrdersResponse>): GetOrdersResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.orders = [];
        if (value !== undefined)
            reflectionMergePartial<GetOrdersResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetOrdersResponse): GetOrdersResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.psa.Order orders */ 1:
                    message.orders.push(Order.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetOrdersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated com.psa.Order orders = 1; */
        for (let i = 0; i < message.orders.length; i++)
            Order.internalBinaryWrite(message.orders[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.GetOrdersResponse
 */
export const GetOrdersResponse = new GetOrdersResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMarketDepthRequest$Type extends MessageType<GetMarketDepthRequest> {
    constructor() {
        super("com.psa.GetMarketDepthRequest", [
            { no: 1, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetMarketDepthRequest>): GetMarketDepthRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.symbol = "";
        if (value !== undefined)
            reflectionMergePartial<GetMarketDepthRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMarketDepthRequest): GetMarketDepthRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string symbol */ 1:
                    message.symbol = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMarketDepthRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string symbol = 1; */
        if (message.symbol !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.symbol);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.GetMarketDepthRequest
 */
export const GetMarketDepthRequest = new GetMarketDepthRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetMarketDepthResponse$Type extends MessageType<GetMarketDepthResponse> {
    constructor() {
        super("com.psa.GetMarketDepthResponse", [
            { no: 1, name: "orders", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Order }
        ]);
    }
    create(value?: PartialMessage<GetMarketDepthResponse>): GetMarketDepthResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.orders = [];
        if (value !== undefined)
            reflectionMergePartial<GetMarketDepthResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetMarketDepthResponse): GetMarketDepthResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated com.psa.Order orders */ 1:
                    message.orders.push(Order.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetMarketDepthResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated com.psa.Order orders = 1; */
        for (let i = 0; i < message.orders.length; i++)
            Order.internalBinaryWrite(message.orders[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.GetMarketDepthResponse
 */
export const GetMarketDepthResponse = new GetMarketDepthResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSymbolRequest$Type extends MessageType<GetSymbolRequest> {
    constructor() {
        super("com.psa.GetSymbolRequest", [
            { no: 1, name: "symbol", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetSymbolRequest>): GetSymbolRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.symbol = "";
        if (value !== undefined)
            reflectionMergePartial<GetSymbolRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSymbolRequest): GetSymbolRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string symbol */ 1:
                    message.symbol = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetSymbolRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string symbol = 1; */
        if (message.symbol !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.symbol);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.GetSymbolRequest
 */
export const GetSymbolRequest = new GetSymbolRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSymbolResponse$Type extends MessageType<GetSymbolResponse> {
    constructor() {
        super("com.psa.GetSymbolResponse", [
            { no: 1, name: "last_trade", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<GetSymbolResponse>): GetSymbolResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.lastTrade = 0;
        if (value !== undefined)
            reflectionMergePartial<GetSymbolResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetSymbolResponse): GetSymbolResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* double last_trade */ 1:
                    message.lastTrade = reader.double();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetSymbolResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* double last_trade = 1; */
        if (message.lastTrade !== 0)
            writer.tag(1, WireType.Bit64).double(message.lastTrade);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.psa.GetSymbolResponse
 */
export const GetSymbolResponse = new GetSymbolResponse$Type();
/**
 * @generated ServiceType for protobuf service com.psa.Exchange
 */
export const Exchange = new ServiceType("com.psa.Exchange", [
    { name: "CreateOrder", options: {}, I: CreateOrderRequest, O: CreateOrderResponse },
    { name: "GetOrders", options: {}, I: GetOrdersRequest, O: GetOrdersResponse },
    { name: "GetMarketDepth", options: {}, I: GetMarketDepthRequest, O: GetMarketDepthResponse },
    { name: "GetSymbol", options: {}, I: GetSymbolRequest, O: GetSymbolResponse }
]);
