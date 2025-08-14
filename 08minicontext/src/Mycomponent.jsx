import React from 'react'
import { useState } from 'react'
function Mycomponent() {
    const[foods, setfoods] = useState(["apple","banana", "orange"])

    function handleAddFood ()
    {
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value ="";

        setfoods(f => [...f,newFood])
    }
    function handleremoveFoods(index){
        setfoods(foods.filter((_,i)=> i !== index))
        console.log(foods)
    }
  return (
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food,index)=><li key={index} onClick={()=> handleremoveFoods(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodinput" placeholder='Enter the Food Name '/>
        <button onClick={handleAddFood} >Add food    </button>
        <button>add new</button>
    </div>
  )
}

export default Mycomponent


