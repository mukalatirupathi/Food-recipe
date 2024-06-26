import React from 'react';

const CardComponent = ({item}) => {
  return (
    <>
      <img src={item.recipe.image} alt="food-img" width="250px" height="250px"/>
      <p>{item.recipe.label}</p>
      <p>Total calories :{Math.round(item.recipe.calories)}</p>
      <button>Buy</button>
    </>
  );
}

export default CardComponent;
