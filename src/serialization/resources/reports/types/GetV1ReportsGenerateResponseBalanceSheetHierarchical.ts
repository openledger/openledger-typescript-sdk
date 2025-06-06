/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";
import { GetV1ReportsGenerateResponseBalanceSheetHierarchicalTotals } from "./GetV1ReportsGenerateResponseBalanceSheetHierarchicalTotals";

export const GetV1ReportsGenerateResponseBalanceSheetHierarchical: core.serialization.ObjectSchema<
    serializers.GetV1ReportsGenerateResponseBalanceSheetHierarchical.Raw,
    OpenLedgerClient.GetV1ReportsGenerateResponseBalanceSheetHierarchical
> = core.serialization.object({
    assets: core.serialization.list(core.serialization.unknown()).optional(),
    liabilities: core.serialization.list(core.serialization.unknown()).optional(),
    equity: core.serialization.list(core.serialization.unknown()).optional(),
    totals: GetV1ReportsGenerateResponseBalanceSheetHierarchicalTotals.optional(),
});

export declare namespace GetV1ReportsGenerateResponseBalanceSheetHierarchical {
    export interface Raw {
        assets?: unknown[] | null;
        liabilities?: unknown[] | null;
        equity?: unknown[] | null;
        totals?: GetV1ReportsGenerateResponseBalanceSheetHierarchicalTotals.Raw | null;
    }
}
