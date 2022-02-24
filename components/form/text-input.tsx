import {useField} from 'formik';
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
import {Label} from './label';
import {CommonInputProps} from './types';

export interface TextInputProps extends CommonInputProps {
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  endAdornment?: React.ReactNode;
  multiline?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  type,
  label,
  name,
  required,
  multiline,
  placeholder,
  endAdornment,
}) => {
  const [field] = useField(name);
  const id = React.useMemo(() => `input-${name}`, [name]);

  const Input: any = multiline ? StyledTextarea : StyledInput;

  return (
    <div>
      <Label htmlFor={id} required={required}>{label}</Label>
      <InputControl>
        <Input
          {...field}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
        />

        {endAdornment && (
          <EndAdornment>{endAdornment}</EndAdornment>
        )}
      </InputControl>
    </div>
  );
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background: #36324B;
  border-radius: 16px;
  outline: none;
  border: none;
  padding: 11px 24px;
  font-family: inherit;
  font-size: clamp(1.2rem, 1.250vw, 1.5rem);
  line-height: 160%;
  color: ${theme.colors.text};
`;

const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  background: #36324B;
  border-radius: 16px;
  outline: none;
  border: none;
  padding: 24px;
  font-family: inherit;
  font-size: clamp(1.2rem, 1.250vw, 1.5rem);
  line-height: 160%;
  color: ${theme.colors.text};
  height: 240px;
  resize: none;
`;

const InputControl = styled.div`
  display: flex;
  align-items: stretch;
`;

const EndAdornment = styled.div`
  flex-shrink: 0;
  margin-left: 2rem;
`;
