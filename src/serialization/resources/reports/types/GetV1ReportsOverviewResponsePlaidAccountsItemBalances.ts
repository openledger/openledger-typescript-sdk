/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpenLedgerClient from "../../../../api/index";
import * as core from "../../../../core";

export const GetV1ReportsOverviewResponsePlaidAccountsItemBalances: core.serialization.ObjectSchema<
    serializers.GetV1ReportsOverviewResponsePlaidAccountsItemBalances.Raw,
    OpenLedgerClient.GetV1ReportsOverviewResponsePlaidAccountsItemBalances
> = core.serialization.object({
    available: core.serialization.number().optional(),
    current: core.serialization.number().optional(),
    isoCurrencyCode: core.serialization.property("iso_currency_code", core.serialization.string().optional()),
    limit: core.serialization.number().optional(),
    unofficialCurrencyCode: core.serialization.property(
        "unofficial_currency_code",
        core.serialization.string().optional(),
    ),
});

export declare namespace GetV1ReportsOverviewResponsePlaidAccountsItemBalances {
    export interface Raw {
        available?: number | null;
        current?: number | null;
        iso_currency_code?: string | null;
        limit?: number | null;
        unofficial_currency_code?: string | null;
    }
}
