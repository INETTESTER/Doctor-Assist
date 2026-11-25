//=============================== import API =================================
import { sleep, scenario, error_check, options } from '../config/common.js';
import { response_check } from '../check/logresponse.js';
export { options }; const cid = __ENV.cid || '1'; let response;
import { DownloadFile, GetProfile, PostProfile, PostProfile_2, PostProfile_3, UploadFile } from '../api/example.js';
import { checkup_register } from '../api/checkup_register.js';
import { Register_Checkup_Direct } from '../api/Register_Checkup_Direct.js';
import { Register_Checkup_Mq } from '../api/Register_Checkup_Mq.js';
import { Get_Checkup_Direct } from '../api/Get_Checkup_Direct.js';
import { randomSeed } from 'k6';
import { Get_Checkup_Cache } from '../api/Get_Checkup_Cache.js';

//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //response = checkup_register()
  // response = Register_Checkup_Direct()
  // response = Register_Checkup_Mq()
  // response = Get_Checkup_Direct()
  // response = Get_Checkup_Cache()


  
  //response_check(response);
  error_check(response);
  sleep(1)
}