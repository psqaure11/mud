/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter eslint_disable
// @generated from protobuf file "ecs-stream.proto" (package "ecsstream", syntax proto3)
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
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message ecsstream.ECSEvent
 */
export interface ECSEvent {
  /**
   * @generated from protobuf field: string eventType = 1;
   */
  eventType: string;
  /**
   * @generated from protobuf field: string componentId = 2;
   */
  componentId: string;
  /**
   * @generated from protobuf field: string entityId = 3;
   */
  entityId: string;
  /**
   * @generated from protobuf field: bytes value = 4;
   */
  value: Uint8Array;
  /**
   * @generated from protobuf field: string tx = 5;
   */
  tx: string;
}
/**
 * Request to subscribe to an ECSStream. The required parameter is 'worldAddress', while others
 * are opt-in based on which data the client is interested in receiving.
 *
 * @generated from protobuf message ecsstream.ECSStreamBlockBundleRequest
 */
export interface ECSStreamBlockBundleRequest {
  /**
   * @generated from protobuf field: string worldAddress = 1;
   */
  worldAddress: string;
  /**
   * @generated from protobuf field: bool blockNumber = 2;
   */
  blockNumber: boolean;
  /**
   * @generated from protobuf field: bool blockHash = 3;
   */
  blockHash: boolean;
  /**
   * @generated from protobuf field: bool blockTimestamp = 4;
   */
  blockTimestamp: boolean;
  /**
   * @generated from protobuf field: bool transactionsConfirmed = 5;
   */
  transactionsConfirmed: boolean;
  /**
   * @generated from protobuf field: bool ecsEvents = 6;
   */
  ecsEvents: boolean;
}
/**
 * ECSStream response. The fields are populated based on the request which must have been sent when
 * starting the subscription.
 *
 * @generated from protobuf message ecsstream.ECSStreamBlockBundleReply
 */
export interface ECSStreamBlockBundleReply {
  /**
   * @generated from protobuf field: uint32 blockNumber = 1;
   */
  blockNumber: number;
  /**
   * @generated from protobuf field: string blockHash = 2;
   */
  blockHash: string;
  /**
   * @generated from protobuf field: uint32 blockTimestamp = 3;
   */
  blockTimestamp: number;
  /**
   * @generated from protobuf field: repeated string transactionsConfirmed = 4;
   */
  transactionsConfirmed: string[];
  /**
   * @generated from protobuf field: repeated ecsstream.ECSEvent ecsEvents = 5;
   */
  ecsEvents: ECSEvent[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ECSEvent$Type extends MessageType<ECSEvent> {
  constructor() {
    super("ecsstream.ECSEvent", [
      { no: 1, name: "eventType", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "componentId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "entityId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
      { no: 5, name: "tx", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<ECSEvent>): ECSEvent {
    const message = { eventType: "", componentId: "", entityId: "", value: new Uint8Array(0), tx: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSEvent>(this, message, value);
    return message;
  }
  internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ECSEvent): ECSEvent {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string eventType */ 1:
          message.eventType = reader.string();
          break;
        case /* string componentId */ 2:
          message.componentId = reader.string();
          break;
        case /* string entityId */ 3:
          message.entityId = reader.string();
          break;
        case /* bytes value */ 4:
          message.value = reader.bytes();
          break;
        case /* string tx */ 5:
          message.tx = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message: ECSEvent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* string eventType = 1; */
    if (message.eventType !== "") writer.tag(1, WireType.LengthDelimited).string(message.eventType);
    /* string componentId = 2; */
    if (message.componentId !== "") writer.tag(2, WireType.LengthDelimited).string(message.componentId);
    /* string entityId = 3; */
    if (message.entityId !== "") writer.tag(3, WireType.LengthDelimited).string(message.entityId);
    /* bytes value = 4; */
    if (message.value.length) writer.tag(4, WireType.LengthDelimited).bytes(message.value);
    /* string tx = 5; */
    if (message.tx !== "") writer.tag(5, WireType.LengthDelimited).string(message.tx);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecsstream.ECSEvent
 */
export const ECSEvent = new ECSEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ECSStreamBlockBundleRequest$Type extends MessageType<ECSStreamBlockBundleRequest> {
  constructor() {
    super("ecsstream.ECSStreamBlockBundleRequest", [
      { no: 1, name: "worldAddress", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: "blockNumber", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      { no: 3, name: "blockHash", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      { no: 4, name: "blockTimestamp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      { no: 5, name: "transactionsConfirmed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
      { no: 6, name: "ecsEvents", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
    ]);
  }
  create(value?: PartialMessage<ECSStreamBlockBundleRequest>): ECSStreamBlockBundleRequest {
    const message = {
      worldAddress: "",
      blockNumber: false,
      blockHash: false,
      blockTimestamp: false,
      transactionsConfirmed: false,
      ecsEvents: false,
    };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSStreamBlockBundleRequest>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ECSStreamBlockBundleRequest
  ): ECSStreamBlockBundleRequest {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string worldAddress */ 1:
          message.worldAddress = reader.string();
          break;
        case /* bool blockNumber */ 2:
          message.blockNumber = reader.bool();
          break;
        case /* bool blockHash */ 3:
          message.blockHash = reader.bool();
          break;
        case /* bool blockTimestamp */ 4:
          message.blockTimestamp = reader.bool();
          break;
        case /* bool transactionsConfirmed */ 5:
          message.transactionsConfirmed = reader.bool();
          break;
        case /* bool ecsEvents */ 6:
          message.ecsEvents = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ECSStreamBlockBundleRequest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string worldAddress = 1; */
    if (message.worldAddress !== "") writer.tag(1, WireType.LengthDelimited).string(message.worldAddress);
    /* bool blockNumber = 2; */
    if (message.blockNumber !== false) writer.tag(2, WireType.Varint).bool(message.blockNumber);
    /* bool blockHash = 3; */
    if (message.blockHash !== false) writer.tag(3, WireType.Varint).bool(message.blockHash);
    /* bool blockTimestamp = 4; */
    if (message.blockTimestamp !== false) writer.tag(4, WireType.Varint).bool(message.blockTimestamp);
    /* bool transactionsConfirmed = 5; */
    if (message.transactionsConfirmed !== false) writer.tag(5, WireType.Varint).bool(message.transactionsConfirmed);
    /* bool ecsEvents = 6; */
    if (message.ecsEvents !== false) writer.tag(6, WireType.Varint).bool(message.ecsEvents);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecsstream.ECSStreamBlockBundleRequest
 */
export const ECSStreamBlockBundleRequest = new ECSStreamBlockBundleRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ECSStreamBlockBundleReply$Type extends MessageType<ECSStreamBlockBundleReply> {
  constructor() {
    super("ecsstream.ECSStreamBlockBundleReply", [
      { no: 1, name: "blockNumber", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
      { no: 2, name: "blockHash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "blockTimestamp", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
      {
        no: 4,
        name: "transactionsConfirmed",
        kind: "scalar",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/,
      },
      { no: 5, name: "ecsEvents", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ECSEvent },
    ]);
  }
  create(value?: PartialMessage<ECSStreamBlockBundleReply>): ECSStreamBlockBundleReply {
    const message = { blockNumber: 0, blockHash: "", blockTimestamp: 0, transactionsConfirmed: [], ecsEvents: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSStreamBlockBundleReply>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ECSStreamBlockBundleReply
  ): ECSStreamBlockBundleReply {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 blockNumber */ 1:
          message.blockNumber = reader.uint32();
          break;
        case /* string blockHash */ 2:
          message.blockHash = reader.string();
          break;
        case /* uint32 blockTimestamp */ 3:
          message.blockTimestamp = reader.uint32();
          break;
        case /* repeated string transactionsConfirmed */ 4:
          message.transactionsConfirmed.push(reader.string());
          break;
        case /* repeated ecsstream.ECSEvent ecsEvents */ 5:
          message.ecsEvents.push(ECSEvent.internalBinaryRead(reader, reader.uint32(), options));
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ECSStreamBlockBundleReply,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* uint32 blockNumber = 1; */
    if (message.blockNumber !== 0) writer.tag(1, WireType.Varint).uint32(message.blockNumber);
    /* string blockHash = 2; */
    if (message.blockHash !== "") writer.tag(2, WireType.LengthDelimited).string(message.blockHash);
    /* uint32 blockTimestamp = 3; */
    if (message.blockTimestamp !== 0) writer.tag(3, WireType.Varint).uint32(message.blockTimestamp);
    /* repeated string transactionsConfirmed = 4; */
    for (let i = 0; i < message.transactionsConfirmed.length; i++)
      writer.tag(4, WireType.LengthDelimited).string(message.transactionsConfirmed[i]);
    /* repeated ecsstream.ECSEvent ecsEvents = 5; */
    for (let i = 0; i < message.ecsEvents.length; i++)
      ECSEvent.internalBinaryWrite(
        message.ecsEvents[i],
        writer.tag(5, WireType.LengthDelimited).fork(),
        options
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecsstream.ECSStreamBlockBundleReply
 */
export const ECSStreamBlockBundleReply = new ECSStreamBlockBundleReply$Type();
/**
 * @generated ServiceType for protobuf service ecsstream.ECSStreamService
 */
export const ECSStreamService = new ServiceType("ecsstream.ECSStreamService", [
  {
    name: "SubscribeToStreamLatest",
    serverStreaming: true,
    options: {},
    I: ECSStreamBlockBundleRequest,
    O: ECSStreamBlockBundleReply,
  },
]);
