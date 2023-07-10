import React from 'react';
import { Grow, TextField, TextFieldProps } from '@mui/material';

export default function SoVyTextField({
  name,
  label,
  value,
  onChange,
  ...rest
}: TextFieldProps) {
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={800}>
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        className="form-control"
        size="small"
        {...rest}
      />
    </Grow>
  );
}
