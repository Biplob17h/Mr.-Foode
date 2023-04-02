import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Food from '../Shared/Food/Food';

const Orders = () => {
    const [category, setCategory] = useState('')
    const { data: foods = []} = useQuery({
        queryKey: ['food', category],
        queryFn: () => fetch(`https://mr-foode-server.vercel.app/food?category=${category}`)
            .then(res => res.json())
    })
    const handleCategory = event =>{
        const category = event.target.value;
        setCategory(category)
    }
    return (
        <div className=''>
            <div className='ml-20 mt-10 mb-10'>
                <select name='category' onChange={handleCategory} >
                    <option disabled value='all'>Select your category</option>
                    <option  value="all">All</option>
                    <option  value="seafood">Sea Food</option>
                    <option  value="rice">Rice</option>
                    <option  value="fish">Fish</option>
                    <option  value="pork">Pork</option>
                    <option  value="deep-fry">Deep-fry</option>
                    <option  value="chicken">Chicken</option>
                    <option  value="grill">Grill</option>
                    <option  value="meat">Meat</option>
                    <option  value="beef">Beef</option>
                    <option  value="vegetable">Vegetable</option>
                    <option  value="stew">Stew</option>
                    <option  value="curry">Curry</option>
                    <option  value="soup">Soup</option>
                    <option  value="egg">Egg</option>
                    <option  value="noodle">Noodle</option>
                    <option  value="bread">Bread</option>
                    <option  value="sweet">Sweet</option>
                    <option  value="bean">Bean</option>
                    <option  value="tea">Tea</option>
                    <option  value="coffe">Coffe</option>
                    <option  value="vegan">Vegan</option>
                    <option  value="sauce">Sauce</option>
                    <option  value="drink">Drink</option>
                    <option  value="duck">Duck</option>
                    <option  value="roll">Roll</option>
                    <option  value="crab">Crab</option>
                    <option  value="cheese">Cheese</option>
                    <option  value="masshrooms">Masshrooms</option>
                    <option  value="potato">Potato</option>
                    <option  value="roast">Roast</option>
                    <option  value="barbeque">Barbeque</option>
                    <option  value="pancake">Pancake</option>
                    <option  value="naan">Naan</option>
                    <option  value="ice-cream">Ice-cream</option>
                    <option  value="pizza">Pizza</option>
                    <option  value="clams">Clams</option>
                    <option  value="cake">Cake</option>
                    <option  value="lobster">Lobster</option>
                    <option  value="sandwich">Sandwich</option>
                    <option  value="shrimps">Shrimps</option>
                </select>
            </div>
            <div className='grid grid-cols-3 mx-10 gap-10 mt-5'>
                {
                    foods.map(food => <Food
                        key={food._id}
                        food={food}
                    ></Food>)
                }
            </div>
        </div>
    );
};

export default Orders;