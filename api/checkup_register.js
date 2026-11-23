
import http from 'k6/http';

export function checkup_register() {
  const url = `https://doctor-assist.inet.co.th/doctor_assist_api/v1/patient/checkup-register`;

  const payload = JSON.stringify({
    hcode: '23032',
    cid: '1234567890121',
    first_name: 'ทดสอบ',
    last_name: 'ระบบ',
    phone: '0812345678',
    birth_date: '1990-01-31',
    gender: 'M',
    address: '99 ม.1 ต.ทดสอบ อ.เมือง จ.ทดสอบ 10000',
  });

  const headers = {
    'Content-Type': 'application/json'
  };

  const response = http.post(url, payload, { headers });

  //console.log(response.body);

  return response;
}
