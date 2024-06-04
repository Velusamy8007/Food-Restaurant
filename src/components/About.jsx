import React from 'react';
import img from "../assets/images/about.png"
import Button from '../layouts/Button';

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
            <img src={img} alt="img" />

            <div className='space-y-4 lg:pt-14'>
                <h1 className='font-semibold text-4xl text-center md:text-start'>Why Choose Us?</h1>

             <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Sit totam praesentium voluptates nulla odio sunt hic! Atque voluptatem repudiandae non inventore ea nobis,
                 minima, ipsam doloribus illo explicabo illum, itaque optio officia quisquam expedita exercitationem ut necessitatibus alias! Fuga, aliquid.
             </p>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minus ut repudiandae sapiente. Et ab sequi autem adipisci labore quibusdam saepe?
                </p>

                <div className=' flex justify-center lg:justify-start'>
                    <Button title='Learn More' />
                </div>
            </div>
        </div>
    )
}

export default About