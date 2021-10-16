import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { COLORS } from 'theme';

type Ref = HTMLInputElement;

type Props = {
  name: string;
  type: 'text' | 'number';
  value: string | number;
  label?: string;
  placeholder?: string;
  onChange: Function;
};

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > label {
    margin-right: 8px;
  }
`;

const InputElm = styled.input`
  padding: 12px;
  height: 36px;
  min-width: 196px;
  border: none;
  outline: none;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid ${COLORS.gray};
`;

const Input = forwardRef<Ref, Props>(
  ({ name, label, value, onChange, type, ...props }, ref) => {
    return (
      <InputContainer>
        {label && <label htmlFor={name}>{`${label}:`}</label>}
        <InputElm
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          ref={ref}
          {...props}
        />
      </InputContainer>
    );
  }
);

export default Input;
