import axios from "axios";
import { trackEvent, trackException} from '../../insights/customInsights.js';



const getBaseUrl = () => {
  const env = import.meta.env.VITE_ENV ?? "DEV";
  const hostname = import.meta.env.VITE_HOSTNAME;
  return env === 'DEV' ? 'http://localhost:8080' : `https://${hostname}`;
};

// Wrapper function for Axios requests
const makeApiCall = async (method, path, data = null, config = {}) => {

  const url = `${getBaseUrl()}/${path}`;

    try {
      const response = await axios({
        method,
        url, 
        data,
        ...config
      });
      
      trackEvent('ApiCallSuccess', {
        url,
        method,
        statusCode: response.status
      });
      
      return response.data; 
    } catch (error) {

      const errorDetails = {
        url,
        method,
        requestData: JSON.stringify(data),
        errorMessage: error.message
      };

      console.log(errorDetails)

      trackException('ApiCallFailure', errorDetails);

      console.error(`Error: ${error}`);
    }
};


export {
  makeApiCall
}