import { Select } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SelectContainer = styled(Select)(({ theme }) => ({
  width: '268px',
  [theme.breakpoints.down(580)]: {
    width: '100%',
  },
}));
