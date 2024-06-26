import React, {useEffect, useState} from 'react';
import '../styles/recipes.css';
import CardComponent from './CardComponent';
import Searchbar from './Searchbar';
const Recipes = ({search, setsearch, data, setdata}) => {

    const [updateData, setUpdateData] = useState(false);


    useEffect(() => {
        const YOUR_APP_ID = "33790bbe";
        const YOUR_APP_KEY = "5cca26f9c89620baabc03705d2aab2d0";
       fetch(
         `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
       )
         .then(function (response) {
           return response.json();
         })
         .then(function (data) {
           setdata(data);
         });
    },[updateData]);

    
    const ButtonClick = () => {
      setUpdateData((updateData) => !updateData);
    };
  return (
    <div className="recipe-wrapper">
      <Searchbar setsearch={setsearch} ButtonClick={ButtonClick}/>
      <div className='recipe-items-wrapper'>
        {data.hits.map((item) => (
          <div key={item} style={{width: '300px'}}>
            <CardComponent item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
