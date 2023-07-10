import React from 'react';
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextFieldComponent from 'components/TextField';
import SelectField from 'components/SelectField';
import { PAYMENT_TYPE } from 'utils/constants/defaultData.constant';
import Button from 'components/Button';
import { SearchFormProps } from '../type';

function Search({
  defaultValues,
  onSearch,
}: {
  onSearch: (value: SearchFormProps) => void;
  defaultValues: SearchFormProps;
}) {
  const { handleSubmit, control } = useForm<SearchFormProps>({
    defaultValues,
  });
  const onSubmit = (value: SearchFormProps) => {
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, md: 3 }}>
        <TextFieldComponent
          name="bankName"
          control={control}
          label="Tên ngân hàng"
        />
        <SelectField
          label="Loại thanh toán"
          name="type"
          control={control}
          options={PAYMENT_TYPE}
        />
        <Button variant="contained" type="submit">
          Tìm kiếm
        </Button>
      </Stack>
    </form>
  );
}
export default Search;
