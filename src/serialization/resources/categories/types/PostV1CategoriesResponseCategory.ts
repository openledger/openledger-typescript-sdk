/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";

export const PostV1CategoriesResponseCategory: core.serialization.ObjectSchema<
    serializers.PostV1CategoriesResponseCategory.Raw,
    OpenLedgerClient.PostV1CategoriesResponseCategory
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    entityId: core.serialization.string().optional(),
    subTypeCode: core.serialization.number().optional(),
});

export declare namespace PostV1CategoriesResponseCategory {
    export interface Raw {
        id?: string | null;
        name?: string | null;
        type?: string | null;
        entityId?: string | null;
        subTypeCode?: number | null;
    }
}
