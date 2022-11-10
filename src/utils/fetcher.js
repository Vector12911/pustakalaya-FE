import axios from './axios';
export const refreshTokens = async () => {
  await axios.get('/auth/refresh', {
    withCredentials: true,
  });
};

const handleRequest = async (request) => {
  try {
    return await request();
  } catch (error) {
    if (error?.response?.status === 401) {
      try {
        await refreshTokens();
        return await request();
      } catch (innerError) {
        throw innerError;
      }
    }
    throw error;
  }
};

export const fetcher = async (url) => {
  try {
    const request = () => axios.get(url, { withCredentials: true });
    const { data } = await handleRequest(request);
    return data;
  } catch (error) {
    throw error;
  }
};

export const poster = async (url, payload) => {
  try {
    const request = () => axios.post(url, payload, { withCredentials: true });
    const { data } = await handleRequest(request);
    return data;
  } catch (error) {
    throw error;
  }
};
