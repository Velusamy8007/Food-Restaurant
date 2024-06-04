import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>

            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
                <div className=' w-full md:w-1/4'>
                    <h1 className='font-semibold text-xl pb-4 '>FoodieWeb</h1>

                    <p className='text-sm'>Indulge in a symphony of flavors.
                        where each plate is a canvas for culinary excellence.
                    </p>
                </div>


                <div>
                    <h1 className='font-medium text-xl pb-4 md:pt-0'>Links</h1>

                    <nav className='flex flex-col gap-2'>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >
                            Dishes
                        </a>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >About
                        </a>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >Menu
                        </a>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >Reviews
                        </a>
                    </nav>
                </div>








                <div>
                    <h1 className='font-medium text-xl pb-4 md:pt-0'>Menu</h1>

                    <nav className='flex flex-col gap-2'>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >
                            Our Dishes
                        </a>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >Premium Menu
                        </a>


                    </nav>
                </div>





                <div>
                    <h1 className='font-medium text-xl pb-4 md:pt-0'>Contact Us</h1>

                    <nav className='flex flex-col gap-2'>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >
                            Velusamymsc07@gmail.com
                        </a>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >+91 90258 98007
                        </a>

                        <a
                            className='hover:text-brightColor transition-all curser-pointer'
                            href="/"
                        >Social media
                        </a>
                    </nav>
                </div>

            </div>



            <div className='text-center py-4'>
                @copyright developed by
                <span className='text-brightColor'> Velusamy 8007</span> | All rights reserved
            </div>
        </div>
    )
}

export default Footer