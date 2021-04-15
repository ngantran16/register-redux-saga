import axios from 'axios';
export async function otpPhoneNumber(data) {
    return axios.get('https://6077a0d71ed0ae0017d6b04d.mockapi.io/api/send-otp/phone', data);
  }
  