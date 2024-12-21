import axios from "axios";

// Wrapper function for Axios requests
const makeApiCall = async (method, url, data = null, config = {}) => {
    try {
      const response = await axios({
        method,
        url, 
        data,
        ...config
      });
      
      return response.data; 
    } catch (error) {
      if (error.response) {
        console.error(`Error: ${error.response.status} - ${error.response.statusText}`);
        console.error(error.response.data);
        throw new Error(error.response.data.message || 'API request failed');
      } else if (error.request) {
        console.error('Error: No response received from the server');
        throw new Error('No response from the server');
      } else {
        console.error(`Error: ${error.message}`);
        throw new Error(error.message);
      }
    }
};

const get = (url, config = {}) => makeApiCall('GET', url, null, config);

export {
    get
}