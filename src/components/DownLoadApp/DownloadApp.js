import React from 'react'
import {FaApple,FaGooglePlay} from 'react-icons/fa'

const DownloadApp = () => {
  return (
    <div className='mt-20 flex justify-center items-center'>
        <div className='my-20 flex items-center justify-center space-x-20 bg-red-300 h-80 p-20 rounded-2xl '>
            {/* Text */}
            <div className='space-y-10'>
                <h1 className='text-7xl w-80'>Download Our App</h1>
                <div className='flex items-center justify-center space-x-10'>
                    {/* Apple */}
                    <div className='flex items-center justify-center space-x-4 bg-white shadow-lg py-2 px-4 rounded-xl cursor-pointer '>
                        <a className='flex items-center justify-center space-x-4' href="#">
                        <FaApple className='w-8 h-8'/>
                        <div>
                            <h1 className='text-sm'>Available on the </h1>
                            <h2 className='text-lg'>App Store</h2>
                        </div>
                        </a>
                    </div>
                    {/* Google Play */}
                    <div className='flex items-center justify-center space-x-4 bg-white shadow-lg py-2 px-4 rounded-xl cursor-pointer'>
                        <a className='flex items-center justify-center space-x-4' href="#">
                        <FaGooglePlay className='w-8 h-8'/>
                        <div>
                            <h1 className='text-sm'>GET IT ON</h1>
                            <h2 className='text-lg'>Google Play</h2>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Img */}
            <div>
                <img className='' src={require(`../../assets/img/PhonesPng.png`)} alt="" />
            </div>
        </div>
    </div>
  )
}
export default DownloadApp
