/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as OpenLedgerClient from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Developers {
    export interface Options {
        environment?: core.Supplier<environments.OpenLedgerClientEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Developers {
    constructor(protected readonly _options: Developers.Options) {}

    /**
     * Generates a JWT token for developer authentication
     *
     * @param {OpenLedgerClient.PostV1DevelopersAuthGenerateTokenRequest} request
     * @param {Developers.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link OpenLedgerClient.BadRequestError}
     * @throws {@link OpenLedgerClient.InternalServerError}
     *
     * @example
     *     await client.developers.generateDeveloperAuthenticationToken({
     *         developerId: "developerId",
     *         apiKey: "apiKey"
     *     })
     */
    public generateDeveloperAuthenticationToken(
        request: OpenLedgerClient.PostV1DevelopersAuthGenerateTokenRequest,
        requestOptions?: Developers.RequestOptions,
    ): core.HttpResponsePromise<OpenLedgerClient.PostV1DevelopersAuthGenerateTokenResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__generateDeveloperAuthenticationToken(request, requestOptions),
        );
    }

    private async __generateDeveloperAuthenticationToken(
        request: OpenLedgerClient.PostV1DevelopersAuthGenerateTokenRequest,
        requestOptions?: Developers.RequestOptions,
    ): Promise<core.WithRawResponse<OpenLedgerClient.PostV1DevelopersAuthGenerateTokenResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.OpenLedgerClientEnvironment.Default,
                "v1/developers/auth/generate-token",
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@openledger/typescript-sdk",
                "X-Fern-SDK-Version": "0.51.10",
                "User-Agent": "@openledger/typescript-sdk/0.51.10",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PostV1DevelopersAuthGenerateTokenRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.PostV1DevelopersAuthGenerateTokenResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new OpenLedgerClient.BadRequestError(_response.error.body, _response.rawResponse);
                case 500:
                    throw new OpenLedgerClient.InternalServerError(_response.error.body, _response.rawResponse);
                default:
                    throw new errors.OpenLedgerClientError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OpenLedgerClientError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.OpenLedgerClientTimeoutError(
                    "Timeout exceeded when calling POST /v1/developers/auth/generate-token.",
                );
            case "unknown":
                throw new errors.OpenLedgerClientError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
