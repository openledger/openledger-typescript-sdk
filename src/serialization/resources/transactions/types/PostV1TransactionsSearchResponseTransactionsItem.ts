/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";

export const PostV1TransactionsSearchResponseTransactionsItem: core.serialization.ObjectSchema<
    serializers.PostV1TransactionsSearchResponseTransactionsItem.Raw,
    OpenLedgerClient.PostV1TransactionsSearchResponseTransactionsItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    amount: core.serialization.number().optional(),
    description: core.serialization.string().optional(),
    status: core.serialization.string().optional(),
    timestamp: core.serialization.date().optional(),
    entityId: core.serialization.string().optional(),
    debitAccountId: core.serialization.string().optional(),
    creditAccountId: core.serialization.string().optional(),
    currency: core.serialization.string().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    createdAt: core.serialization.date().optional(),
    updatedAt: core.serialization.date().optional(),
});

export declare namespace PostV1TransactionsSearchResponseTransactionsItem {
    export interface Raw {
        id?: string | null;
        amount?: number | null;
        description?: string | null;
        status?: string | null;
        timestamp?: string | null;
        entityId?: string | null;
        debitAccountId?: string | null;
        creditAccountId?: string | null;
        currency?: string | null;
        metadata?: Record<string, unknown> | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    }
}
