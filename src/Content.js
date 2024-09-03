import React, { useState } from 'react'

const Content = () => {

    function handleNameChange(){
          const names =["Earn","grow","give"]
          const int =Math.floor(Math.random()*3);
          return names[int]
        }

        const [count,setCount] =useState(0);

        function incrementFunction(){
          setCount(count +1)
        } 
        function decrementFunction(){
          setCount(count -1)
        }
        
        const [color,setClor] =useState("blue")

        const [brand, setBrand] = useState("Ford");
        const [model, setModel] = useState("Mustang");
        const [year, setYear] = useState("1964");
        const [colors, setColor] = useState("red");

        const [car, setCar] = useState({
          brand: "Ford",
          model: "Mustang",
          year: "1964",
          color: "red"
        })

        const click = useState('GeeksForGeeks')

        const [clicks, setClicks] = useState(0);


  return (
    <div>
      <h3 className="text">Let's {handleNameChange()} money</h3>
      <div className='buttons'>
      <button onClick={decrementFunction}>-</button>
      <button>{count}</button>
      <button onClick={incrementFunction}>+</button>
      </div>

      <>
        <p>My favorite color is {color}</p>
      </>

      <>
      <h1>My {brand}</h1>
      <p>It is a {colors} {model} from {year}.</p>
      </>

      <>
      <h1>My {car.brand}</h1>
      <p> It is a {car.color} {car.model} from {car.year}.</p>
      </>

      <>
      <h1>My favorite color is {color}!</h1>
      <button type="button"onClick={() => setColor("blue")}>Blue</button>
      </>
      
      <>
      <h1>Welcome to {click}</h1>
            <p>You clicked {clicks} times</p>

            <button onClick={() => setClicks(clicks + 1)}>
                Click me
            </button>
      </>
      
      <div>
      <button>-</button>
      <button>0</button>
      <button>+</button>
      </div>
      

    </div>
  )
}

export default Content