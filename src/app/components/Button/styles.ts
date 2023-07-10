import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ButtonContainer = styled(Button)(({ theme }) => ({
  width: '268px',
  [theme.breakpoints.down(580)]: {
    width: '100%',
  },
}));
