import React from "react";
import Input from "@cloudscape-design/components/input";

const InputBox = ({onChange, ...inputProps }) => (
    <Input
        {...inputProps}
        onChange={({ detail: {value} })=> onChange(value)} 
    />
);

export default InputBox;