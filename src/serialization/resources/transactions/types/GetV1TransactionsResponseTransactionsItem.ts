/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";
import { GetV1TransactionsResponseTransactionsItemStatus } from "./GetV1TransactionsResponseTransactionsItemStatus";
import { GetV1TransactionsResponseTransactionsItemDebitAccount } from "./GetV1TransactionsResponseTransactionsItemDebitAccount";
import { GetV1TransactionsResponseTransactionsItemCreditAccount } from "./GetV1TransactionsResponseTransactionsItemCreditAccount";
import { GetV1TransactionsResponseTransactionsItemPlaidAccount } from "./GetV1TransactionsResponseTransactionsItemPlaidAccount";

export const GetV1TransactionsResponseTransactionsItem: core.serialization.ObjectSchema<
    serializers.GetV1TransactionsResponseTransactionsItem.Raw,
    OpenLedgerClient.GetV1TransactionsResponseTransactionsItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    entityId: core.serialization.string().optional(),
    timestamp: core.serialization.date().optional(),
    amount: core.serialization.number().optional(),
    currency: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    debitAccountId: core.serialization.string().optional(),
    creditAccountId: core.serialization.string().optional(),
    status: GetV1TransactionsResponseTransactionsItemStatus.optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    date: core.serialization.date().optional(),
    transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
    accountType: core.serialization.string().optional(),
    financialType: core.serialization.string().optional(),
    category: core.serialization.string().optional(),
    categoryId: core.serialization.property("category_id", core.serialization.string().optional()),
    debitAccount: GetV1TransactionsResponseTransactionsItemDebitAccount.optional(),
    creditAccount: GetV1TransactionsResponseTransactionsItemCreditAccount.optional(),
    plaidAccount: core.serialization.property(
        "plaid_account",
        GetV1TransactionsResponseTransactionsItemPlaidAccount.optional(),
    ),
});

export declare namespace GetV1TransactionsResponseTransactionsItem {
    export interface Raw {
        id?: string | null;
        entityId?: string | null;
        timestamp?: string | null;
        amount?: number | null;
        currency?: string | null;
        description?: string | null;
        debitAccountId?: string | null;
        creditAccountId?: string | null;
        status?: GetV1TransactionsResponseTransactionsItemStatus.Raw | null;
        metadata?: Record<string, unknown> | null;
        date?: string | null;
        transaction_date?: string | null;
        accountType?: string | null;
        financialType?: string | null;
        category?: string | null;
        category_id?: string | null;
        debitAccount?: GetV1TransactionsResponseTransactionsItemDebitAccount.Raw | null;
        creditAccount?: GetV1TransactionsResponseTransactionsItemCreditAccount.Raw | null;
        plaid_account?: GetV1TransactionsResponseTransactionsItemPlaidAccount.Raw | null;
    }
}
