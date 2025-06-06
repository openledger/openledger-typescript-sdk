/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as OpenLedgerClient from "../../../../../api/index";
import * as core from "../../../../../core";

export const PostV1IntegrationsConnectRequest: core.serialization.Schema<
    serializers.PostV1IntegrationsConnectRequest.Raw,
    OpenLedgerClient.PostV1IntegrationsConnectRequest
> = core.serialization.object({
    provider: core.serialization.string(),
    entityId: core.serialization.string(),
    connectionType: core.serialization.string().optional(),
});

export declare namespace PostV1IntegrationsConnectRequest {
    export interface Raw {
        provider: string;
        entityId: string;
        connectionType?: string | null;
    }
}
