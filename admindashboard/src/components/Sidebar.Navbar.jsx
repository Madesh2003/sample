import React,{ useEffect, useContext } from 'react';
import { Navbar, Sidebar } from '../components';
import { useStateContext } from '../contexts/ContextProvider'



export default function SidebarNavbar() {
    const { setCurrentMode, currentMode, activeMenu } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentMode(currentThemeMode);
        }
      }, [setCurrentMode]);
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>

    <div className="flex relative dark:bg-main-dark-bg">
   
               {activeMenu ? (
                 <div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                   <Sidebar />
                 </div>
               ) : (
                 <div className="w-0 dark:bg-secondary-dark-bg">
                   <Sidebar />
                 </div>
               )}
               <div
                 className={
                   activeMenu
                     ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-64 w-full  '
                     : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                 }
               >
                 <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                   <Navbar />
                 </div>
                 </div>
                 </div>
                 </div>
  )
}
