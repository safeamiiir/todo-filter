import { COMPLETED_STATES } from 'constant';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { COLORS, SIZES } from 'theme';

type Ref = HTMLSelectElement;

type Props = {
  name: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: Function;
};

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > select {
    height: ${SIZES[9]};
    min-width: 164px;
    border: ${SIZES[0]}x solid ${COLORS.gray};
    background-color: ${COLORS.white};
    box-sizing: border-box;
    width: 100%;
  }
  > label {
    margin-right: ${SIZES[2]};
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
