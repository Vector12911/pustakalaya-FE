import React, { useState } from 'react';
import Image from 'next/image';
import GoogeLogin from './GoogeLogin';
import AuthForm from './AuthForm';
import authType from '../utils/types';
const AuthContent = () => {
  const [type, setType] = useState(authType.login);
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md ">
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 mb-2 text-center text-3xl font-extrabold text-gray-900">
          {type}
        </h2>
        <div className="flex justify-center space-x-2 ">
          <h4 className="text-sm">
            {type === authType.login
              ? 'New to pustakalya'
              : 'Already have an account'}
          </h4>
          <div className="text-sm">
            <a
              onClick={() =>
                setType((type) =>
                  type === authType.register
                    ? authType.login
                    : authType.register
                )
              }
              className="font-semibold text-indigo-600 cursor-pointer hover:text-indigo-500"
            >
              {type === authType.register ? 'Login' : 'Create a new account'}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-6">
          <AuthForm type={type} setType={setType} />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <GoogeLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
