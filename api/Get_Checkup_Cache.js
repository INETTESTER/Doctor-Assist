
import http from 'k6/http';
import { domain } from './env.js';

export function Get_Checkup_Cache() {
  const url = `${domain}/doctor_assist_api/v1/patient/checkup-register-cache?uid=e7af7cbb-9f94-4b58-af2c-68ef1de3deeb`;

  const response = http.get(url);

  //console.log(response.body);

  return response;
}
