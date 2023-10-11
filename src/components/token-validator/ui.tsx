import React from "react";
import { UiProps } from "./types";
import { LoadingOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {
    StyledCardRight,
    ValidateButton,
    TokenDisplay,
    StatusIcon,
} from "./style";
import {Spin} from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Ui: React.FunctionComponent<UiProps> = ({
                                                  isFetching,
                                                  isValid,
                                                  generatedToken,
                                                  hasError,
                                                  fetchTokenValidity,
                                              }) => {

    const handleValidate = () => {
        if (generatedToken) {
            fetchTokenValidity(generatedToken);
        }
    };

    let statusIcon;
    if (isFetching) {
        statusIcon = <Spin indicator={antIcon} />;
    } else if (hasError) {
        statusIcon = <StatusIcon color="red"><CloseCircleOutlined /></StatusIcon>;
    } else if (isValid !== undefined) {
        statusIcon = isValid ? <StatusIcon color="green"><CheckCircleOutlined /></StatusIcon> : <StatusIcon color="red"><CloseCircleOutlined /></StatusIcon>;
    }

    return (
        <StyledCardRight title="Generated Token" bordered={false}>
            <TokenDisplay>
                {generatedToken || "No token generated"}
            </TokenDisplay>
            <ValidateButton type="primary" onClick={handleValidate} disabled={isFetching || !generatedToken}>
                {isFetching ? "Validating..." : "Validate Token"}
            </ValidateButton>
            {statusIcon}
        </StyledCardRight>
    );
};

export default Ui;
