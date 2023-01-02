import axios from "axios";

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}

// post config
const postConfig: Params = {
  baseUrl: "https://gogoanime.consumet.org",
  headers: {
    Authorization: "",
  },
  method: "post",
};

//config for get request
const getConfig: Params = {
  baseUrl: "https://gogoanime.consumet.org",
  headers: {
    Authorization: "",
  },
  method: "get",
};

export const postAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...postConfig,
    url: `${postConfig.baseUrl}/${url}`,
    data,
  })
    .then((response) => {
      console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.data,
      };
    });
};

export const getAPI = async (url: string, data?: any): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}/${data}`,
  })
    .then((response) => {
      // console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      // console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
