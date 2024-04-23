'use client';

import React, { useRef } from 'react'
import MenuButton from './MenuButton';
import NavMenu from './NavMenu';

export interface MobileMenuProps {
  onClick: () => void;
  isOpened?: boolean;
}


const MobileMenu = ({ onClick, isOpened }: MobileMenuProps) => {
  
  return (
<>
{/* {isOpened &&  */}
        <div  className='fixed right-0 top-0 w-screen h-screen z-10 flex flex-col bg-burgerBgd backdrop-blur-25 py-[43px] px-[20px] gap-[110px] #data-menu'>
          <div className='self-end'>
            <MenuButton text="Close" onClick={onClick} />
          </div>
          <NavMenu/>
        </div>
        {/* } */}
</>
  )
}

export default MobileMenu
