import axios from "axios";
const config={

}
const getAllTags=async(userData)=>{
    const response=await axios.get("https://b2training.beaconhouse.net/beams_ci/index.php/api/getalll_tags",{
        headers: {
          api_key: 'X5Ne0km78x2Q1ykny9FfcIK',
          api_secret:'Q1X5NeknkyV5v6VkT78y9F',
        },
      },
     
)
    if(response.data){
        // console.log("tagservice data",response.data)
        return response.data
    }
}

export const tagService={
    getAllTags
}