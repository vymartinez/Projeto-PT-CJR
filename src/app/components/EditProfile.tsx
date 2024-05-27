import React, { useRef } from 'react'
import camera from '@/../public/icons/camera.svg'
import x from '@/../public/icons/x.svg'
import Image from 'next/image'
import defaultUser from '@/../public/images/default-user.jpg'

type Props = {
    closeModal: () => void;
}

const EditProfile = ({closeModal} : Props) => {

    const fileRef = useRef<HTMLInputElement>(null)

    const handleSave = () => {
        closeModal();
    }

  return (
    <>
    <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/60 z-[1] flex-col'>
        <div className='w-full h-full bg-extra relative sm:rounded-3xl sm:w-2/3 sm:h-5/6 lg:w-2/5'>
            <div className='h-9 w-9 absolute right-5 top-5'>
                <Image
                src={x}
                alt="x-icon"
                fill
                sizes='max'
                draggable={false}
                className='cursor-pointer'
                onClick={closeModal}
                />
            </div>
            <div className='flex justify-center items-center w-full h-fit'>
                <div className='relative rounded-full w-36 h-36 border border-gray-500 overflow-hidden mt-10 sm:mt-5'>
                    <Image
                    src={defaultUser}
                    alt='user-pic'
                    fill
                    sizes='max'
                    draggable={false}
                    onClick={() => fileRef.current?.click()}
                    />
                </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <div className='relative -top-8 border-gray-500 border h-14 w-14 rounded-full bg-white cursor-pointer'>
                    <Image
                    src={camera}
                    alt='camera-icon'
                    fill
                    sizes='max'
                    draggable={false}
                    />
                </div>
                <input type="text" className='rounded-full w-1/2 h-fit py-2 px-3 focus:outline-none mb-2 sm:placeholder:text-sm placeholder:text-xs' placeholder='Nome'/>
                <input type="text" className='rounded-full w-1/2 h-fit py-2 px-3 focus:outline-none my-2 sm:placeholder:text-sm placeholder:text-xs' placeholder='Email'/>
                <input type="text" className='rounded-full w-1/2 h-fit py-2 px-3 focus:outline-none my-2 sm:placeholder:text-sm placeholder:text-xs' placeholder='Curso'/>
                <input type="text" className='rounded-full w-1/2 h-fit py-2 px-3 focus:outline-none my-2 sm:placeholder:text-sm placeholder:text-xs' placeholder='Departamento'/>
                <input type="text" className='rounded-full w-1/2 h-fit py-2 px-3 focus:outline-none my-2 sm:placeholder:text-sm placeholder:text-xs' placeholder='Senha Atual'/>
                <input type="text" className='rounded-full w-1/2 h-fit py-2 px-3 focus:outline-none my-2 sm:placeholder:text-sm placeholder:text-xs' placeholder='Nova senha'/>
                <input type="text" className='rounded-full w-1/2 h-fit py-2 px-3 focus:outline-none mt-2 sm:placeholder:text-sm placeholder:text-xs' placeholder='Confirmar nova senha'/>
                <input type="file" ref={fileRef} className='hidden'/>

                <button onClick={handleSave} className='text-center py-2 px-4 bg-button text-white rounded-full mt-8  h-fit w-1/5 text-xs sm:text-sm'>Salvar</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default EditProfile;