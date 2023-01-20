
import './App.css';

import {useState, useEffect} from 'react';
import axios from 'axios';
import background from './components/videos/background.jpg';


function App() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState([]);
  const[faren, setFaren] = useState(false);


  useEffect(() => {
    (async () => {
  

      const data = await getAll();
    
    
      
    }) ();


    
  async function getAll(){
    try{
      let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&APPID=32c1c0f82a8de6539b1e236714a9b387`);
      setWeather(res.data);

      console.log(res.data);
      getInfo(res.data);
  
      

    }catch(error){
      console.log("An error was returned "+ error);
     

    }
 
  }





  },[search]);




  
  
  
  
  
  


  
  
  
  





  const getInfo = (weather) => {
   
  var city = document.querySelector("#name");
    city.textContent = weather.name;
    
  var temp = document.querySelector("#temp");
    temp.textContent =  weather.main.temp + " " + '';

  var winds = document.querySelector("#winds");
    winds.textContent = "wind speed:" + " " + weather.wind.speed;

  var humidity = document.querySelector("#humidity");
    humidity.textContent = "humidity:"+ " " + weather.main.humidity + "%";

    var feels = document.querySelector("#feels");
    feels.textContent = "Feels like:" + " " + weather.main.feels_like;
    
   var ico = document.querySelector("#icon");
    ico.src=`http://openweathermap.org/img/wn/`+ weather.weather[0].icon + `@2x.png`;
      



   
  }



  




 
 
 



  return (
    <div className="App">
      <div className="pp">
      <div className = "main-page">

      
     

    
    
      </div>
      
          <div className = "main-center">
          <div className = "searchButton"> 
          <input className="searchButton" value={search} placeholder="Enter Location Here" onChange={e=> setSearch(e.target.value)} type = 'text'/> 
           
          
        
                  
          </div>
      </div>
      <div className='back'> <img className='back' src={background}></img> </div>

      <div id="info-container">  
        
      
        <div className='city-container'><h1 id="name"> </h1></div>
       <div className='temp-container'><p id="temp">  </p> </div> 
        <div className='wind-container'><p id="winds"> </p></div>
        <div  className='icon-container'> <img id='icon' src=""></img></div>
        <div className='humidity-container'><p id="humidity"> </p></div>
        <div className='feels-container'><p id="feels"> </p></div>  
        
      </div> 

 

      <div id="sub-info">
              
              
           
                 
      
      </div> 
      
          
    </div>
    </div>

    
  );
}

export default App;
