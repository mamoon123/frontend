import React, { useState } from "react";
import { UiProps } from "./types";
import { Input } from "antd";
import {
    StyledCard,
    GenerateButton,
} from "./style";

const Ui: React.FunctionComponent<UiProps> = ({ isFetching, createGenerateToken }) => {
    const [digits, setDigits] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        // Allow only digits and limit length to 15
        const sanitizedInput = input.replace(/[^0-9]/g, '').substring(0, 15);
        setDigits(sanitizedInput);
    };

    const handleSubmit = () => {
        const sanitizedDigits = digits.replace(/[^0-9]/g, '');
        createGenerateToken(sanitizedDigits);
    };

    return (
        <StyledCard title="Token Generator" bordered={false}>
            <Input
                placeholder="Enter number"
                value={digits}
                onChange={handleInputChange}
                maxLength={15}
                disabled={isFetching}
            />
            <GenerateButton type="primary" onClick={handleSubmit} disabled={isFetching}>
                {isFetching ? "Generating..." : "Generate Token"}
            </GenerateButton>
        </StyledCard>
    );
};

export default Ui;
