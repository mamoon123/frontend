import { connect } from "react-redux";

import { AppState } from "../../reducers/types"

import {DispatchProps, StateProps} from "./types";
import Ui from "./ui";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {fetchTokenValidity} from "../../reducers/token-validator";

const mapState = (state: AppState): StateProps => {
    const  { generateToken, tokenValidity } = state;
    return {
       isFetching: tokenValidity.isFetching,
       hasError: tokenValidity.hasError,
       isValid: tokenValidity.isTokenValid,
       generatedToken: generateToken.generatedToken,
    };
};

const mapDispatch = (
    dispatch: Dispatch<PayloadAction<unknown>>
): DispatchProps => {
    return {
        fetchTokenValidity: (token: string) => dispatch(fetchTokenValidity({ token }))
    }
}

export default connect(mapState, mapDispatch)(Ui);
