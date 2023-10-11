import { connect } from "react-redux";

import { AppState } from "../../reducers/types"

import {DispatchProps, StateProps} from "./types";
import Ui from "./ui";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import {createGenerateToken} from "../../reducers/token-generator";

const mapState = (state: AppState): StateProps => {
    const  { generateToken } = state;
    return {
      isFetching: generateToken.isFetching
    };
};

const mapDispatch = (
    dispatch: Dispatch<PayloadAction<unknown>>
): DispatchProps => {
    return {
        createGenerateToken: (digits: string) => dispatch(createGenerateToken({ digits }))
    }
}

export default connect(mapState, mapDispatch)(Ui);
