import { useState } from 'react';
import { data } from '../data/data';

const Food = () => {
  const [foods, setFoods] = useState(data);

  // filter by food type
  const filterType = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category === category;
      })
    );
  };

  // filter by food price
  const filterPrice = (price) => {
    setFoods(
      data.filter((food) => {
        return food.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Item
      </h1>

      {/* filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => setFoods(data)}
            >
              All
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('burger')}
            >
              Burgers
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('pizza')}
            >
              Pizza
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('salad')}
            >
              Salads
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterType('chicken')}
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$')}
            >
              $
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$$')}
            >
              $$
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$$$')}
            >
              $$$
            </button>
            <button
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
              onClick={() => filterPrice('$$$$')}
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((food) => (
          <div
            key={food.id}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={food.image}
              alt={food.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />

            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{food.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
