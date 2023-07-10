import React from 'react';
import {
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  SelectProps,
} from '@mui/material';
import { useController } from 'react-hook-form';
import { SelectContainer } from './styles';

export type SelectFieldProps = SelectProps & {
  id?: string;
  name: string;
  control: any;
  rules?: any;
  options: any[];
};
function SelectField({
  name,
  control,
  rules,
  id = 'select-label',
  label,
  options,
}: SelectFieldProps) {
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
      <FormControl>
        <InputLabel id={id}>{label}</InputLabel>
        <SelectContainer
          labelId={id}
          value={value}
          label={label}
          onChange={onChange}
          size="small"
        >
          {options &&
            options.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
        </SelectContainer>
      </FormControl>
    </Grow>
  );
}
export default SelectField;
