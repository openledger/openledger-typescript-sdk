/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";
import { GetV1BanksSyncStatusResponseAccountsItem } from "./GetV1BanksSyncStatusResponseAccountsItem";
import { GetV1BanksSyncStatusResponseSummary } from "./GetV1BanksSyncStatusResponseSummary";

export const GetV1BanksSyncStatusResponse: core.serialization.ObjectSchema<
    serializers.GetV1BanksSyncStatusResponse.Raw,
    OpenLedgerClient.GetV1BanksSyncStatusResponse
> = core.serialization.object({
    accounts: core.serialization.list(GetV1BanksSyncStatusResponseAccountsItem).optional(),
    allSynced: core.serialization.boolean().optional(),
    summary: GetV1BanksSyncStatusResponseSummary.optional(),
});

export declare namespace GetV1BanksSyncStatusResponse {
    export interface Raw {
        accounts?: GetV1BanksSyncStatusResponseAccountsItem.Raw[] | null;
        allSynced?: boolean | null;
        summary?: GetV1BanksSyncStatusResponseSummary.Raw | null;
    }
}
