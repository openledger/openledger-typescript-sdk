/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";

export const GetV1ReportsGenerateRequestType: core.serialization.Schema<
    serializers.GetV1ReportsGenerateRequestType.Raw,
    OpenLedgerClient.GetV1ReportsGenerateRequestType
> = core.serialization.enum_(["INCOME", "BALANCE", "CASHFLOW"]);

export declare namespace GetV1ReportsGenerateRequestType {
    export type Raw = "INCOME" | "BALANCE" | "CASHFLOW";
}
