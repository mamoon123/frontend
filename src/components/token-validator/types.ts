export type StateProps = {
    isFetching: boolean;
    isValid: boolean;
    generatedToken: string | undefined;
    hasError: boolean;
};

export type DispatchProps = {
    fetchTokenValidity: (token: string) => void;
};

export type UiProps = StateProps & DispatchProps;
