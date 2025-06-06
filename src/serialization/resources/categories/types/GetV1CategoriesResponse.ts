/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";
import { GetV1CategoriesResponseCategoriesItem } from "./GetV1CategoriesResponseCategoriesItem";

export const GetV1CategoriesResponse: core.serialization.ObjectSchema<
    serializers.GetV1CategoriesResponse.Raw,
    OpenLedgerClient.GetV1CategoriesResponse
> = core.serialization.object({
    categories: core.serialization.list(GetV1CategoriesResponseCategoriesItem).optional(),
});

export declare namespace GetV1CategoriesResponse {
    export interface Raw {
        categories?: GetV1CategoriesResponseCategoriesItem.Raw[] | null;
    }
}
