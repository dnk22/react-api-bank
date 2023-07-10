import axios from 'axios';
import { SearchFormProps } from 'features/PaymentManagement/type';
import AxiosClient from 'utils/axios';
import { TLoginFormData } from 'utils/types';
import { apiURL } from './api.constant';

export const fetchPaymentData = async (data: SearchFormProps) => {
  try {
    const response = await AxiosClient.get(apiURL.paymentManagement, {
      params: data,
    });
    return response;
  } catch (error) {
    return error;
    console.error(error); // Handle any errors that occur during the API call
  }
};
export const loginAccount = async (data: TLoginFormData) => {
  try {
    const response = await axios.post(
      `https://api.ukm.vn/api/account/login`,
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const logoutAccount = () => {
  localStorage.removeItem('token');
  window.location.replace('/');
};
