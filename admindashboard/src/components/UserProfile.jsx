import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BiLogOutCircle } from 'react-icons/bi';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.png';

const UserProfile = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-6 border-color border-b-1 pb-6">
           <div className='flex justify-center'>
           <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
           </div>
      
      <div className=' text-center mt-2'>
          <p className="font-semibold text-xl dark:text-gray-200  mt-2"> Michael Roberts </p>
          <p className="text-gray-500 text-sm dark:text-gray-400 mt-2">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400 mt-2"> info@shop.com </p>
        </div>
        </div>
      
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
        
      </div>
    </div>

  );
};

export default UserProfile;