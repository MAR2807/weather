import React from 'react'

const weather = ({
    id,
    main,
    description,
    icon,
    sunny
}) => {
    
  return (
    <div>
        <div className='test'>
        <h1> id: {id}</h1>
        <h1> main: {main}</h1>
        <h1> description:{description} </h1>
        <h1> icon:{icon} </h1>
        <img id = "sunny-day" src="https://wallpaperboat.com/wp-content/uploads/2021/04/14/75026/sunny-day-08.jpg"> sunny:{sunny} </img>
        </div>
       
        
    </div>
  )
}

export default weather