/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as OpenLedgerClient from "../../../../../api/index";
import * as core from "../../../../../core";
import { PostV1CategoriesRequestType } from "../../types/PostV1CategoriesRequestType";

export const PostV1CategoriesRequest: core.serialization.Schema<
    serializers.PostV1CategoriesRequest.Raw,
    Omit<OpenLedgerClient.PostV1CategoriesRequest, "entityId">
> = core.serialization.object({
    name: core.serialization.string(),
    type: PostV1CategoriesRequestType,
    subTypeCode: core.serialization.number().optional(),
});

export declare namespace PostV1CategoriesRequest {
    export interface Raw {
        name: string;
        type: PostV1CategoriesRequestType.Raw;
        subTypeCode?: number | null;
    }
}
