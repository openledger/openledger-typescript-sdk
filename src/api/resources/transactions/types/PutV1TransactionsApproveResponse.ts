/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as OpenLedgerClient from "../../../index";

export interface PutV1TransactionsApproveResponse {
    success?: boolean;
    /** Total number of transactions processed */
    totalProcessed?: number;
    results?: OpenLedgerClient.PutV1TransactionsApproveResponseResultsItem[];
}
