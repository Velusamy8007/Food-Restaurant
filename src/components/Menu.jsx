import React from 'react'
import Dishescard from '../layouts/Dishescard'
import img1 from "../assets/images/menu1.jpg"
import img2 from "../assets/images/menu2.jpg"
import img3 from "../assets/images/menu3.jpg"

const Menu = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className=' text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>Premium Menu</h1>



        <div className='flex flex-wrap  gap-8 justify-center'>
            <Dishescard img={img1} title="Delicious Dish" price="$16.99"/>
            <Dishescard img={img2} title="Delicious Dish" price="$18.99"/>
            <Dishescard img={img3} title="Delicious Dish" price="$15.99"/>
        </div>
    </div>
  )
}

export default Menu