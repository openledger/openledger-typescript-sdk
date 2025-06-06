/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface GetV1BanksCreateLinkResponse {
    /** The Plaid link token */
    linkToken?: string;
    /** The expiration date and time of the link token */
    expiration?: Date;
    /** The Plaid request ID for tracking this link token creation */
    requestId?: string;
    /** The Plaid user ID associated with this link token */
    userId?: string;
}
