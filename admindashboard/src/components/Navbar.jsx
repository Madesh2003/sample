import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsSun, BsMoon } from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';
// import { Tooltip } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.png';
import { UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title="Menu" placement="bottom" backgroundColor="black" arrow>
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-2 hover:bg-light-gray duration-700"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, currentMode, setMode, } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div>
    <nav className="relative shadow-xl flex flex-row flex-wrap items-center justify-between  p-2 bg-white dark:ease-in-out duration-1000 dark:text-gray-200 dark: bg-white/10 backdrop-blur-lg">
        <NavButton title="Menu" customFunc={handleActiveMenu} icon={<AiOutlineMenu />} />
        <div className="flex">
          <Tooltip title="Profile" placement="bottom" arrow>
            <div
              className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg duration-700"
              onClick={() => handleClick('userProfile')}
            >
              <img
                className="rounded-full w-8 h-8"
                src={avatar}
                alt="user-profile"
              />
             
              <MdKeyboardArrowDown className="text-gray-400 text-14" />
            </div>
          </Tooltip>

          <div className='flex gap-5 mr-3 ml-3'>
          <div>
              <Tooltip title="Dark-Mode" placement='bottom'>
                <input
                  type="radio"
                  id="dark"
                  name="theme"
                  value="Dark"
                  onChange={setMode}
                  className="cursor-pointer hidden"
                  checked={currentMode === 'Dark'}
                />
                {(currentMode === "Dark") ? (
                  <label htmlFor="dark" className="ml-2 text-md cursor-pointer hidden">
                  <BsMoon className='text-lg' />
                </label>
                ): (
                  <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                  <BsMoon className='text-lg' />
                </label>
                )

                }
              </Tooltip>
            </div>
            <div className=''>
              <Tooltip title="Light-Mode" placement='bottom'>
                <input
                  type="radio"
                  id="light"
                  name="theme"
                  value="Light"
                  className="cursor-pointer hidden"
                  onChange={setMode}
                  checked={currentMode === 'Light'}
                />
               {(currentMode === "Light") ? (
                 <label htmlFor="light" className="ml-2 text-md cursor-pointer hidden">
                 <BsSun className='text-lg' />
               </label>
               ): (
                <label htmlFor="light" className="ml-2 text-md cursor-pointer">
                <BsSun className='text-lg' />
              </label>
               )

               }
              </Tooltip>
            </div>
           
          </div>

          {isClicked.userProfile && (<UserProfile />)}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;