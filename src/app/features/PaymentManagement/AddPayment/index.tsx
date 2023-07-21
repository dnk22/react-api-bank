import React from 'react';
import { Box, Grid, Modal, Stack } from '@mui/material';

function AddPayment({ handleClose }) {
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack spacing={2}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            User Name
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Stack>
    </Modal>
  );
}
export default AddPayment;
