import React from 'react'
import {FaApple,FaGooglePlay} from 'react-icons/fa'
import './styles.css'
const DownloadApp = () => {
  return (
    <div className='lg:mt-20 flex justify-center items-center'>
        <div className='bg-gradient my-20 flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-20   mx-10 lg:mx-0  lg:h-80 p-20 rounded-3xl shadow-lg '>
            {/* Text */}
            <div className='space-y-10'>
                <h1 className='text-6xl lg:text-7xl font-semibold text-white  w-80'>Download Our App</h1>
                <div className='flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-10'>
                    {/* Apple */}
                    <div className='flex items-center justify-center space-x-4 bg-white shadow-lg py-4  px-5 rounded-xl cursor-pointer hover:scale-125 transform-all duration-500 ease-in-out '>
                        <a className='flex items-center justify-center space-x-4' href="https://apps.apple.com/us/app/uoitc/id1496550016" target={"_blank"} rel="noreferrer">
                        <FaApple className='text-red-800 w-8 h-8'/>
                        <div>
                            <h1 className='text-sm'>Available on the </h1>
                            <h2 className='text-lg'>App Store</h2>
                        </div>
                        </a>
                    </div>
                    {/* Google Play */}
                    <div className='flex items-center justify-center space-x-4 bg-white shadow-lg py-4  px-6 rounded-xl cursor-pointer hover:scale-125 transform-all duration-500 ease-in-out'>
                        <a className='flex items-center justify-center space-x-4' href="https://play.google.com/store/apps/details?id=iq.edu.uoitc" target={"_blank"} rel="noreferrer">
                        <FaGooglePlay className='text-red-800 w-8 h-8'/>
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
                <img className='h-[26rem]' src={require(`../../assets/img/PhonesPng.png`)} alt="" />
            </div>
        </div>
    </div>
  )
}
export default DownloadApp
