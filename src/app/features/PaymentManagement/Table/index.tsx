import React, { memo, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
  Paper,
  Button,
  Stack,
  Grid,
  Box,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import isEqual from 'react-fast-compare';
import { TPayment } from '../type';
import { format } from 'date-fns';
import imageON from 'assets/images/switch-on.png';
import imageOFF from 'assets/images/switch-off.png';
import { Item } from './styles';

const columns = [
  {
    value: 'ID',
    label: 'id',
    align: 'center',
    width: 80,
  },
  {
    value: 'bankName',
    label: 'Ngân hàng',
    align: 'left',
  },
  {
    value: 'bankUserName',
    label: 'Tên đăng nhập',
    align: 'left',
  },
  {
    value: 'bankNumberAccount',
    label: 'Số tài khoản',
    align: 'left',
  },
  {
    value: 'balance',
    label: 'Số dư',
    align: 'left',
  },
  {
    value: 'isWorking',
    label: 'Hoạt động',
    align: 'center',
    width: 100,
  },
  {
    value: 'created_at',
    label: 'Ngày tạo',
    align: 'center',
  },
];
const ExpandableTableRow = memo(({ row }: { row: TPayment }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell align="center">
          <Stack spacing={1} direction="row" sx={{ justifyContent: 'center' }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
              sx={{ width: 22, height: 22 }}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
            <span>{row.id}</span>
          </Stack>
        </TableCell>
        <TableCell align="left">{row.bankName}</TableCell>
        <TableCell align="left">{row.bankNumberAccount}</TableCell>
        <TableCell align="left">{row.bankUserName}</TableCell>
        <TableCell align="left">{row.balance}</TableCell>
        <TableCell align="center">
          <img src={row.isWorking ? imageON : imageOFF} alt="working" />
        </TableCell>
        <TableCell align="center">
          {format(new Date(row.created_at), 'MM/dd/yyyy')}
        </TableCell>
        <TableCell align="center">
          <Stack direction="row" spacing={1} sx={{ justifyContent: 'center' }}>
            <Button sx={{ width: 50 }} variant="outlined">
              Sửa
            </Button>
            <Button sx={{ width: 50 }} variant="outlined">
              Xóa
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, borderBottomWidth: 0 }}
          colSpan={10}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Stack spacing={2} sx={{ padding: '10px', width: '300px' }}>
              <Item>
                IsQueue :{' '}
                <img src={row.isQueue ? imageON : imageOFF} alt="IsQueue" />
              </Item>
              <Item>
                isProxy :{' '}
                <img src={row.isProxy ? imageON : imageOFF} alt="isProxy" />
              </Item>
            </Stack>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}, isEqual);

type TableComponentProps = {
  data: TPayment[];
};
export default function TableComponent({ data }: TableComponentProps) {
  console.log(data, 'data');
  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                align={column.align}
                width={column.width}
                key={column.value}
              >
                {column.label}
              </TableCell>
            ))}
            <TableCell align="center" width={110}>
              Hành động
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <ExpandableTableRow key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
