import React,{useEffect, useRef, useState} from 'react';
import "./index.css";

const FoodRecipe = () => {
  const[search,setsearch]=useState('');
  const[data,setdata]=useState({hits:[]});

  const YOUR_APP_ID = "33790bbe";
  const YOUR_APP_KEY ="5cca26f9c89620baabc03705d2aab2d0";
  const ButtonClick=(e)=>{
    e.preventDefault()
      fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`)
      .then(function(response){
        return(response).json();
      })
      .then(function(data){
       setdata((data));
      })
    console.log("hello")
  }
  return (
    <div className='form' id="form1">
      <div className="form12">
      <form  >
        <h2 className='mt-1'>Food recipe</h2>
        <input type="text" className='form-control  w-50' onChange={(e)=>setsearch(e.target.value)}  placeholder='Enter your fav food..'></input>
        <br/>
        <button className='btn btn-primary button mb-4' onClick={ButtonClick}>submit</button>
      </form>
      </div>
      <div className="component">
      <div className='row'>
        {
          data.hits.map((item)=>
            <div className='col-md-4'>
              <div className='card p-2 m-2 '>
              <img src={item.recipe.image} className='card-img-top' height="300" ></img>
              <div className='card-body'>
                <dl>
                  <dd className='card-title'>{item.recipe.label}</dd>
                  <dd>Total calories :{Math.round(item.recipe.calories)}</dd>
                  <button className='card-footer mt-4'>buy</button>
                </dl>
              </div>
            </div>
            </div>
          )
        }
      </div>
      </div>
    </div>
   
  )
}



export default FoodRecipe
