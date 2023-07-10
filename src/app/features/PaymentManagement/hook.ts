import { useEffect, useState } from 'react';
import { SearchFormProps } from './type';
import { fetchPaymentData } from 'services/payment';
import { toast } from 'react-toastify';

export default function useLogic() {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState<SearchFormProps>({
    bankName: '',
    type: 0,
  });

  useEffect(() => {
    onFetchData(searchData);
  }, [searchData]);

  const onFetchData = async (value: SearchFormProps) => {
    const res = await fetchPaymentData(value);
    if (res?.status === 200) {
      const { data } = res;
      setData(data);
    } else {
      toast('Có lỗi xảy ra , vui lòng kiểm tra lại!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const onSearchData = (value: SearchFormProps) => {
    setSearchData(value);
  };

  return { data, searchData, onSearchData };
}
