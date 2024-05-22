import React from 'react'
import Image from 'next/image';
import arrowRight from '@/../public/icons/arrow-right.svg'
import Link from 'next/link';

const Menu = () => {
  return (
    <>   
        <nav className='flex flex-col w-fit bg-secondary rounded-md absolute right-2 z-[1] before:w-6 before:h-6 before:content-[""] before:block before:mb-6 before:absolute before:bg-secondary before:rotate-45 before:ml-3 before:right-6 before:-top-2 before:z-[-1]'>
            <Link href={'/users/0'} className='text-center cursor-pointer py-2 px-4 border-b border-1 border-solid border-white text-xs font-semibold text-white/90 hover:opacity-80'>
                Meu perfil
            </Link>
            <div className='text-center cursor-pointer py-2 px-4 border-b border-1 border-solid border-white text-xs font-semibold text-white/90 hover:opacity-80'>
                Editar perfil
            </div>
            <div className='flex justify-center hover:opacity-80 cursor-pointer'>
            <Link href="/" className='text-center py-2 pl-4 pr-1 border-1 border-solid border-sky-800 text-xs font-bold text-red-700/90'>
              Sair
            </Link>
            <div className='relative h-3 w-3 mt-3'>
              <Image 
              src={arrowRight}
              alt="arrow-right"
              fill
              className='cursor-pointer'
              draggable={false}
              />
            </div>
            </div>
        </nav>
   </>
  )
}

export default Menu;