export type StateProps = {
    isFetching: boolean;
};

export type DispatchProps = {
    createGenerateToken: (digits: string) => void;
};

export type UiProps = StateProps & DispatchProps;
