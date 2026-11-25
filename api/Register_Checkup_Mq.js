
import http from 'k6/http';
import { domain } from './env.js';

export function Register_Checkup_Mq() {
  const url = `${domain}/doctor_assist_api/v1/patient/checkup-register-mq`;

  const payload = JSON.stringify({
    hcode: '99999',
    cid: '1234567890121',
    first_name: 'ทดสอบ',
    last_name: 'โหลด',
    phone: '0800000000',
    birth_date: '1965-03-15',
    gender: 'M',
    address: ''
  });

  const headers = {
    'Content-Type': 'application/json'
  };

  const response = http.post(url, payload, {
    headers: headers
  });

  //console.log(response.body);

  return response;
}
