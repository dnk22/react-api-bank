import axios from 'axios';

const AxiosClient = axios.create({
  // .. where we make our configurations
  baseURL: 'https://api.ukm.vn',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json;charset=utf-8',
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnVrbS52bi9hcGkvYWNjb3VudC9sb2dpbiIsImlhdCI6MTY4NTYyNjEyNywibmJmIjoxNjg1NjI2MTI3LCJqdGkiOiJpWktNRlZYaGpmSGVTb1FiIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.9_inWQhnW-JHzucHQCTcw8loyvvl-5i_lURPP1vroU4',
  },
});

//All request will wait 2 seconds before timeout
AxiosClient.defaults.timeout = 2000;

// AxiosClient.defaults.withCredentials = true;

export default AxiosClient;
