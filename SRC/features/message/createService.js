import axios from "axios";

const empMessageService=async(userData)=>{
    const response=await axios.post("https://b2training.beaconhouse.net/beams_ci/index.php/api/selectMesage",userData,{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
)
    if(response.data){
    //    console.log("emp mesg data",response.data?.data)
        return response?.data
        
    }
}


export const createService={
    empMessageService
}