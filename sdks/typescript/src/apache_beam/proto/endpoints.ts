// @generated by protobuf-ts 2.1.0 with parameter client_grpc1,server_grpc1,generate_dependencies
// @generated from protobuf file "endpoints.proto" (package "org.apache.beam.model.pipeline.v1", syntax proto3)
// tslint:disable
//
//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
//
// Protocol Buffers describing endpoints containing a service.
//
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
 * A description of how to connect to a Beam API endpoint.
 *
 * @generated from protobuf message org.apache.beam.model.pipeline.v1.ApiServiceDescriptor
 */
export interface ApiServiceDescriptor {
    /**
     * (Required) The URL to connect to.
     *
     * @generated from protobuf field: string url = 1;
     */
    url: string;
    /**
     * (Optional) The method for authentication. If unspecified, access to the
     * url is already being performed in a trusted context (e.g. localhost,
     * private network).
     *
     * @generated from protobuf field: org.apache.beam.model.pipeline.v1.AuthenticationSpec authentication = 2;
     */
    authentication?: AuthenticationSpec;
}
/**
 * @generated from protobuf message org.apache.beam.model.pipeline.v1.AuthenticationSpec
 */
export interface AuthenticationSpec {
    /**
     * (Required) A URN that describes the accompanying payload.
     * For any URN that is not recognized (by whomever is inspecting
     * it) the parameter payload should be treated as opaque and
     * passed as-is.
     *
     * @generated from protobuf field: string urn = 1;
     */
    urn: string;
    /**
     * (Optional) The data specifying any parameters to the URN. If
     * the URN does not require any arguments, this may be omitted.
     *
     * @generated from protobuf field: bytes payload = 2;
     */
    payload: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class ApiServiceDescriptor$Type extends MessageType<ApiServiceDescriptor> {
    constructor() {
        super("org.apache.beam.model.pipeline.v1.ApiServiceDescriptor", [
            { no: 1, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "authentication", kind: "message", T: () => AuthenticationSpec }
        ]);
    }
    create(value?: PartialMessage<ApiServiceDescriptor>): ApiServiceDescriptor {
        const message = { url: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ApiServiceDescriptor>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ApiServiceDescriptor): ApiServiceDescriptor {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string url */ 1:
                    message.url = reader.string();
                    break;
                case /* org.apache.beam.model.pipeline.v1.AuthenticationSpec authentication */ 2:
                    message.authentication = AuthenticationSpec.internalBinaryRead(reader, reader.uint32(), options, message.authentication);
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
    internalBinaryWrite(message: ApiServiceDescriptor, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string url = 1; */
        if (message.url !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.url);
        /* org.apache.beam.model.pipeline.v1.AuthenticationSpec authentication = 2; */
        if (message.authentication)
            AuthenticationSpec.internalBinaryWrite(message.authentication, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.pipeline.v1.ApiServiceDescriptor
 */
export const ApiServiceDescriptor = new ApiServiceDescriptor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthenticationSpec$Type extends MessageType<AuthenticationSpec> {
    constructor() {
        super("org.apache.beam.model.pipeline.v1.AuthenticationSpec", [
            { no: 1, name: "urn", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "payload", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<AuthenticationSpec>): AuthenticationSpec {
        const message = { urn: "", payload: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<AuthenticationSpec>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthenticationSpec): AuthenticationSpec {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string urn */ 1:
                    message.urn = reader.string();
                    break;
                case /* bytes payload */ 2:
                    message.payload = reader.bytes();
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
    internalBinaryWrite(message: AuthenticationSpec, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string urn = 1; */
        if (message.urn !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.urn);
        /* bytes payload = 2; */
        if (message.payload.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.payload);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.pipeline.v1.AuthenticationSpec
 */
export const AuthenticationSpec = new AuthenticationSpec$Type();