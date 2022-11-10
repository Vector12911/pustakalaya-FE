import { useMutation } from '@tanstack/react-query';

import axios from 'src/lib/axios';

export const createUser = (data) =>
  axios
    .post('/auth/register', data, {
      withCredentials: true,
    })
    .then((res) => res.data);

export const useRegister = () =>
  useMutation(createUser, {
    mutationKey: 'createUser',
  });
