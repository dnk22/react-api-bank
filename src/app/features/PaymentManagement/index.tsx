import React from 'react';
import Search from './Search';
import TableComponent from './Table';
import useLogic from './hook';
import AddPayment from './AddPayment';

function PaymentManagement() {
  const { data, searchData, onSearchData } = useLogic();
  return (
    <div>
      <AddPayment />
      <Search onSearch={onSearchData} defaultValues={searchData} />
      <TableComponent data={data} />
    </div>
  );
}
export default PaymentManagement;
