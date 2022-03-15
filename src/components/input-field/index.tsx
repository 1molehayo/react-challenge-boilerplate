import React from 'react';
import StyledInput from './Input.styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const InputField: React.FC<InputProps> = ({ name, label, ...props }) => {
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...props} />
    </StyledInput>
  );
};

export default InputField;
