import {useField} from 'formik';
import React from 'react';
import styled from 'styled-components';
import {Chip, ChipGroup} from './chip';
import {Label} from './label';
import {CommonInputProps} from './types';

interface SwitchProps extends CommonInputProps {
  // no special props
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  name,
  required,
}) => {
  const [field, , helpers] = useField(name);

  const id = `input-${name}`;
  const {value} = field;

  const handleYes = () => {
    helpers.setValue(true);
  };

  const handleNo = () => {
    helpers.setValue(false);
  };

  return (
    <div>
      <Label htmlFor={id} required={required}>{label}</Label>
      <HiddenInput value={value !== null ? 'filled' : ''} required={required} />
      <ChipGroup split>
        <Chip
          type="button"
          selected={value === true}
          onClick={handleYes}
        >
          Yes
        </Chip>
        <Chip
          type="button"
          selected={value === false}
          onClick={handleNo}
        >
          No
        </Chip>
      </ChipGroup>
    </div>
  );
};

const HiddenInput = styled.input`
  display: block;
  width: 1px;
  height: 1px;
  box-sizing: border-box;
  border: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0);
  outline: none;
  position: absolute;
  left: 0;
`;
