import { useMutation } from '@tanstack/react-query';

import axios from 'src/lib/axios';

export const login = (data) =>
  axios
    .post('/auth/login', data, {
      withCredentials: true,
    })
    .then((res) => res.data);

export const useLogin = () =>
  useMutation(login, {
    mutationKey: 'login',
  });
