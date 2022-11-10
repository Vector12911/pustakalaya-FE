import React, { useEffect, useState } from 'react';
import { fetcher } from 'src/utils/fetcher';

const Profile = () => {
  // const [user, setuser] = useState('');
  const getMe = async () => {
    try {
      const data = await fetcher('/user/currentUser');
      //   if (!error && user) setuser(user);
      //   else Router.push('/');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMe();
  }, []);
  return <div>CSR Profile</div>;
};

export default Profile;
