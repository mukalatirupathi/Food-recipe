import React, {useState} from 'react'
import FoodRecipe from './FoodRecipe'
import Foodlogin from './Foodlogin'
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Components/Home';
import Recipes from './Components/Recipes';

const App = () => {
  const[search, setsearch] = useState("");
  const [data, setdata] = useState({hits: []});
  return (
    
    // <div>
    //  <FoodRecipe/> 
    //  {/* <Foodlogin/> */}
    // </div>
    <Router>
      <Routes>
        <Route path='/home' element={<Home setsearch={setsearch} />}/>
        <Route path='/recipes' element={<Recipes search={search} setsearch={setsearch} data={data} setdata={setdata}/>} />
      </Routes>
    </Router>
  )
}

export default App
