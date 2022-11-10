import React from 'react';
import Image from 'next/image';
import { signInWithGoogle } from 'src/firebase-config';
const GoogeLogin = () => {
  return (
    <div
      className="my-6  bg-[#4285f4] rounded-sm shadow hover:shadow-md active:bg-[#1669F2] flex cursor-pointer"
      onClick={() => {
        signInWithGoogle();
        setOpen(false);
      }}
    >
      <div className="google-icon-wrapper w-[40px] h-[40px] my-[2px] ml-[2px] rounded-sm bg-white flex items-center justify-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          height={18}
          width={18}
          alt="logo"
        />
      </div>
      <p className="text-white h-full my-auto items-center text-center w-full">
        Sign in with google
      </p>
    </div>
  );
};

export default GoogeLogin;
