 /** 
  Token, role, permission, sso integration
 */

export class AuthTokenData {
    Algorithm: string; // //alg The cryptographic algorithm that is used to sign the token. Only HMAC SHA-256 is supported.
    Type: string; // typ The type of token. Only a JSON web token is supported.
    KID: string; // kid The key version field of the app.
    Version: string; // ver The version identifier for the token.
    Issuer: string; // iss Identifies the principal that issued the token.
    Expiration: string; // exp Identifies the exact time when the token expires. This time is expressed in the number of seconds since 1 January 1970.
    Audience: string; // aud Identifies the audience for which the JSON web token is intended. In this case, it is the domain name for the app.
    UserIdentifier: string; //  uid An identifier for the user, which is unique to the app. This is equivalent to the pairwise ID from the legacy Windows Live ID Web Authentication SDK.
    PackageSID: string; //  urn:microsoft:appurl The Windows client identifier for the app, if there is one.
}