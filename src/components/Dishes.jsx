import React from 'react'

import Dishescard from '../layouts/Dishescard'
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const Dishes = () => {
  return (

    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>
        Our Dishes
      </h1>

      <div className=' flex flex-wrap gap-8 justify-center'>
        <Dishescard img={img1} title="Tasty Dish" price="$10.99" />
        <Dishescard img={img2} title="Tasty Dish" price="$12.99" />
        <Dishescard img={img3} title="Tasty Dish" price="$10.99" />
        <Dishescard img={img4} title="Tasty Dish" price="$11.99" />
        <Dishescard img={img5} title="Tasty Dish" price="$10.99" />
        <Dishescard img={img6} title="Tasty Dish" price="$12.99" />
      </div>
    </div>
  )
}

export default Dishes