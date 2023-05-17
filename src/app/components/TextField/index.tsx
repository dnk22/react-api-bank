import * as React from 'react';
import { Grow, TextField, TextFieldProps } from '@mui/material';
import { useController } from 'react-hook-form';

type TextFieldComponentProps = TextFieldProps & {
  name: string;
  control: any;
  rules?: any;
};

export default function TextFieldComponent({
  name,
  label,
  control,
  rules,
  ...rest
}: TextFieldComponentProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });
  return (
    <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={800}>
      <TextField
        label={label}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className="form-control"
        error={Boolean(error?.message)}
        helperText={error?.message}
        size="small"
        {...rest}
      />
    </Grow>
  );
}
