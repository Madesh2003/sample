import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title} placement="bottom" arrow>
    <button
      type="button"
      onClick={customFunc}
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
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, currentMode, setMode } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div>
      <nav className="relative shadow-xl flex flex-row flex-wrap items-center justify-between p-2 bg-white dark:ease-in-out duration-700 dark:text-gray-200 dark:bg-white/10 backdrop-blur-lg">
        <NavButton title="Menu" customFunc={handleActiveMenu} icon={<AiOutlineMenu />} />
        <div className="flex">
          <div className="flex gap-5 mr-3 ml-3">
            <div>
              <Tooltip title="Dark Mode" placement="bottom">
                <input
                  type="radio"
                  id="dark"
                  name="theme"
                  value="Dark"
                  onChange={setMode}
                  className="cursor-pointer hidden"
                  checked={currentMode === 'Dark'}
                />
                <label htmlFor="dark" className={`ml-2 text-md cursor-pointer ${currentMode === 'Dark' && 'hidden'}`}>
                  <BsMoon className="text-lg" />
                </label>
              </Tooltip>
            </div>
            <div className="">
              <Tooltip title="Light Mode" placement="bottom">
                <input
                  type="radio"
                  id="light"
                  name="theme"
                  value="Light"
                  className="cursor-pointer hidden"
                  onChange={setMode}
                  checked={currentMode === 'Light'}
                />
                <label htmlFor="light" className={`ml-2 text-md cursor-pointer ${currentMode === 'Light' && 'hidden'}`}>
                  <BsSun className="text-lg" />
                </label>
              </Tooltip>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
