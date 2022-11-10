import axios from './axios';

const SET_COOKIE_HEADER = 'set-cookie';

const refreshTokens = async (req, res) => {
  const response = await axios.get('/auth/refresh', {
    headers: { cookie: req.headers.cookie },
  });
  const cookies = response.headers[SET_COOKIE_HEADER];

  req.headers.cookie = cookies;
  res.setHeader(SET_COOKIE_HEADER, cookies);
};

const handleRequest = async (req, res, request) => {
  try {
    console.log('first request');
    return await request();
  } catch (error) {
    if (error?.response?.status === 401) {
      console.log('inside 401');
      try {
        console.log('refrshing request');
        await refreshTokens(req, res);
        console.log('again tring request');
        return await request();
      } catch (innerError) {
        throw innerError;
      }
    }
    throw error;
  }
};

export const fetcherSSR = async (req, res, url) => {
  try {
    const request = () =>
      axios.get(url, { headers: { cookie: req.headers.cookie } });
    const { data } = await handleRequest(req, res, request);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
