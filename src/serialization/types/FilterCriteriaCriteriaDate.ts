/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpenLedgerClient from "../../api/index";
import * as core from "../../core";

export const FilterCriteriaCriteriaDate: core.serialization.ObjectSchema<
    serializers.FilterCriteriaCriteriaDate.Raw,
    OpenLedgerClient.FilterCriteriaCriteriaDate
> = core.serialization.object({
    from: core.serialization.string().optional(),
    to: core.serialization.string().optional(),
    recentDays: core.serialization.number().optional(),
    recentMonths: core.serialization.number().optional(),
});

export declare namespace FilterCriteriaCriteriaDate {
    export interface Raw {
        from?: string | null;
        to?: string | null;
        recentDays?: number | null;
        recentMonths?: number | null;
    }
}
