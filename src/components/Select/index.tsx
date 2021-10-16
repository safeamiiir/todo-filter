import { COMPLETED_STATES } from 'constant';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { COLORS } from 'theme';

type Ref = HTMLSelectElement;

type Props = {
  name: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: Function;
};

const SelectContainer = styled.div`
  position: relative;
  > select {
    height: 36px;
    min-width: 196px;
    border: 1px solid ${COLORS.gray};
    background-color: ${COLORS.white};
    box-sizing: border-box;
  }
  > label {
    margin-right: 8px;
  }
`;

const Select = forwardRef<Ref, Props>(
  ({ name, label, options, value, onChange, ...props }, ref) => {
    const neutral = { value: COMPLETED_STATES.ALL, label: '-' };

    return (
      <SelectContainer>
        {label && <label htmlFor={name}>{`${label}:`}</label>}
        <select
          name={name}
          id={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          ref={ref}
          {...props}
        >
          {[neutral, ...options].map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </SelectContainer>
    );
  }
);
export default Select;
