const axios = require("axios");
// const { BACKEND_URL } = require("../../constants/apiEndPoints");
// const { ERROR_ROUTE } = require("../../constants/routes");

const makeRequest = async (
  apiEndPoint,
  token,
  dynamicConfig,
) => {
  try{
    const requestDetails = {
      baseURL: "http://localhost:3000",
      url: apiEndPoint.url,
      method: apiEndPoint.method,
      headers: {
        authorization: token,
    },
      ...dynamicConfig,
    };
    const { data } = await axios(requestDetails);
    return data;
  }
  catch(e){
    // if(navigate){
    //   const errorStatus = e.response?.status
    //   if(errorStatus)
    //   {
    //     navigate(`/error/${errorStatus}`);
    //   }
    //   else{
    //     navigate("/error");
    //   }
    // }
    throw new Error("kumar")
  }
};

module.exports = makeRequest;