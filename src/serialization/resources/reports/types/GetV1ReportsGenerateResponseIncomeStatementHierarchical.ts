/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";
import { GetV1ReportsGenerateResponseIncomeStatementHierarchicalTotals } from "./GetV1ReportsGenerateResponseIncomeStatementHierarchicalTotals";

export const GetV1ReportsGenerateResponseIncomeStatementHierarchical: core.serialization.ObjectSchema<
    serializers.GetV1ReportsGenerateResponseIncomeStatementHierarchical.Raw,
    OpenLedgerClient.GetV1ReportsGenerateResponseIncomeStatementHierarchical
> = core.serialization.object({
    revenue: core.serialization.list(core.serialization.unknown()).optional(),
    expenses: core.serialization.list(core.serialization.unknown()).optional(),
    totals: GetV1ReportsGenerateResponseIncomeStatementHierarchicalTotals.optional(),
});

export declare namespace GetV1ReportsGenerateResponseIncomeStatementHierarchical {
    export interface Raw {
        revenue?: unknown[] | null;
        expenses?: unknown[] | null;
        totals?: GetV1ReportsGenerateResponseIncomeStatementHierarchicalTotals.Raw | null;
    }
}
