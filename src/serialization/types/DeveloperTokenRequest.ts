/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpenLedgerClient from "../../api/index";
import * as core from "../../core";

export const DeveloperTokenRequest: core.serialization.ObjectSchema<
    serializers.DeveloperTokenRequest.Raw,
    OpenLedgerClient.DeveloperTokenRequest
> = core.serialization.object({
    developerId: core.serialization.string(),
    apiKey: core.serialization.string(),
});

export declare namespace DeveloperTokenRequest {
    export interface Raw {
        developerId: string;
        apiKey: string;
    }
}
