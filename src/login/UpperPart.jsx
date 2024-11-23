import React from 'react'

function UpperPart() {
    return (
        <div className='h-[50%]'>
            <img src='/images/Ellipse7.png' className='h-[50%] w-[100vw] fixed top-0 z-0' />
            <div className='fixed top-0 z-10 h-[50%]'>
                <div className='text-center w-[100vw] p-4 font-poppins text-white text-[130%]'>know your <span className='block font-semibold text-[150%]'>Friends Better</span></div>
                <div className=''>
                    <img src='/images/Illustration.png' className='ml-auto mr-auto h-[30vh] w-[70vw] lg:w-auto md:max-w-[30vw] md:h-[33vh]' />
                </div>
            </div>
        </div>
    )
}

export default UpperPart
