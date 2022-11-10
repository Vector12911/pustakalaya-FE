import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { signInWithGoogle } from 'src/firebase-config';
import authType from '../utils/types';
import { useLogin } from '../api/login';
import { useRegister } from '../api/register';

const AuthForm = ({ type, setType }) => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [loading, setLoading] = useState(false);
  const { mutateAsync: mutateLogin } = useLogin();
  const { mutateAsync: mutateRegister } = useRegister();
  let authMethod = mutateLogin;
  let btnChild = authType.login;
  if (type === authType.register) {
    authMethod = mutateRegister;
    btnChild = authType.register;
  } else {
    // authMethod = mutateForgotPassword;
  }
  const authHandler = async (e) => {
    e.preventDefault();
    console.log({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    });
    try {
      setLoading(true);
      const dcredentials = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      await authMethod(dcredentials);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={authHandler} className="space-y-6">
      {type === authType.register && (
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              ref={name}
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            ref={email}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            ref={password}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        {!loading && (
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            {btnChild}
          </button>
        )}
        {loading && (
          <button
            type="button"
            disabled
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:outline-none "
          >
            {btnChild}
          </button>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
