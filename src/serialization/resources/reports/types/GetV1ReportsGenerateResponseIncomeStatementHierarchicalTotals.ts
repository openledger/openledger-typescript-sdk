/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";

export const GetV1ReportsGenerateResponseIncomeStatementHierarchicalTotals: core.serialization.ObjectSchema<
    serializers.GetV1ReportsGenerateResponseIncomeStatementHierarchicalTotals.Raw,
    OpenLedgerClient.GetV1ReportsGenerateResponseIncomeStatementHierarchicalTotals
> = core.serialization.object({
    totalRevenue: core.serialization.number().optional(),
    totalExpenses: core.serialization.number().optional(),
    netIncome: core.serialization.number().optional(),
});

export declare namespace GetV1ReportsGenerateResponseIncomeStatementHierarchicalTotals {
    export interface Raw {
        totalRevenue?: number | null;
        totalExpenses?: number | null;
        netIncome?: number | null;
    }
}
