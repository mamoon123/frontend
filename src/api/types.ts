export type GenerateTokenRequestPayload = {
  digits: string;
};

export type GenerateTokenResponsePayload = {
  tokenId: string;
  tokenValue: string;
};

export type TokenValidatorRequestPayload = {
  token: string;
};

export type TokenValidatorResponsePayload = {
  isValid: boolean;
};