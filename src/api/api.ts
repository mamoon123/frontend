import {
    GenerateTokenRequestPayload,
    GenerateTokenResponsePayload,
    TokenValidatorRequestPayload,
    TokenValidatorResponsePayload
} from "./types"

//Api call to generate token
export const generateTokenApi = async (requestPayload: GenerateTokenRequestPayload): Promise<GenerateTokenResponsePayload> => {
    const response = await fetch('http://localhost:8081/api/generateToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
    });

    if (!response.ok) {
        throw new Error('Could not generate token');
    }
    return response.json();
};

//Api call to check token validity
export const tokenValidityApi = async (requestPayload: TokenValidatorRequestPayload): Promise<TokenValidatorResponsePayload> => {
    const response = await fetch('http://localhost:8082/api/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
    });

    if (!response.ok) {
        throw new Error('Could not generate token');
    }
    return response.json();
};