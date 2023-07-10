import React from 'react';
import { ButtonProps, Grow } from '@mui/material';
import { ButtonContainer } from './styles';

function Button({ children, variant = 'outlined', ...rest }: ButtonProps) {
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={800}>
      <ButtonContainer variant={variant} size="medium" {...rest}>
        {children}
      </ButtonContainer>
    </Grow>
  );
}
export default Button;
