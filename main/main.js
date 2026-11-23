//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
import { response_check } from '../check/logresponse.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { checkup_register } from '../api/checkup_register.js';

//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  response = checkup_register()


  
  response_check(response);
  error_check(response);
  sleep(1)
}