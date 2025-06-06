/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as OpenLedgerClient from "../index";

export interface ToolResponse {
    type: OpenLedgerClient.ToolResponseType;
    responseType: OpenLedgerClient.ToolResponseResponseType;
    thoughtProcess?: string;
    isFollowUp?: boolean;
    referenceToHistory?: string;
    referenceToUiState?: string;
    toolName?: string;
    toolArgs?: unknown;
    workflowDescription?: string;
    workflowSteps?: unknown;
    reason?: string;
}
