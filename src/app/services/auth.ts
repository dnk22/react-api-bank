import axios from 'axios';
import { TLoginFormData, TRegisterFormData } from 'utils/types';

export const registerAccount = async (data: TRegisterFormData) => {
  try {
    const response = await axios.post(
      `https://api.ukm.vn/api/account/register`,
      data
    );
    return response;
  } catch (error) {
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
