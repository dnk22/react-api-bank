import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TextInput = styled(TextField)(({ theme }) => ({
  width: '268px',
  [theme.breakpoints.down(580)]: {
    width: '100%',
  },
}));
