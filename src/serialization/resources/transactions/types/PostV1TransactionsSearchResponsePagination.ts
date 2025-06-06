/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";

export const PostV1TransactionsSearchResponsePagination: core.serialization.ObjectSchema<
    serializers.PostV1TransactionsSearchResponsePagination.Raw,
    OpenLedgerClient.PostV1TransactionsSearchResponsePagination
> = core.serialization.object({
    total: core.serialization.number().optional(),
    page: core.serialization.number().optional(),
    limit: core.serialization.number().optional(),
    totalPages: core.serialization.number().optional(),
});

export declare namespace PostV1TransactionsSearchResponsePagination {
    export interface Raw {
        total?: number | null;
        page?: number | null;
        limit?: number | null;
        totalPages?: number | null;
    }
}
