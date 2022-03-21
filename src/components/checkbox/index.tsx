import React from 'react';
import StyledCheckbox from './Checkbox.styled';

interface ICheckbox {
  checked: boolean;
  children: React.ReactNode;
  value: any;
}

const Checkbox: React.FC<ICheckbox> = ({ checked, children, value }) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" value={value} checked={checked} readOnly />
      <span>{children}</span>
    </StyledCheckbox>
  );
};

export default Checkbox;
