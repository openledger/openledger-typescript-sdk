/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as OpenLedgerClient from "../../../index";

export interface GetV1ReportsGenerateResponseBalanceSheet {
    hierarchical?: OpenLedgerClient.GetV1ReportsGenerateResponseBalanceSheetHierarchical;
    totalCurrentAssets?: number;
    totalNonCurrentAssets?: number;
    totalAssets?: number;
    totalCurrentLiabilities?: number;
    totalNonCurrentLiabilities?: number;
    totalLiabilities?: number;
    totalEquity?: number;
    liabilitiesAndEquity?: number;
}
