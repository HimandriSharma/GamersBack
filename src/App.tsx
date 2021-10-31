
import React, { useState } from 'react';
import './App.css';
import Grids from './Components/Grids';

export interface IState{
  content:{title: string
  sub: string
  companies: number
  templates: number
  queries: number
  url: string}[]
}


function App() {

  const [content] = useState<IState["content"]>(
    [{
      title:"Fetch insights that help your business grow more.",
      sub:"Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency with performance of employees and growth in business. ",
      companies: 10,
      templates: 314,
      queries: 12,
      url:"https://i.ibb.co/WWpFnVP/Office-Image.png" 
    }]
  )



  return (
    <div className="App">
        <div  style={{display:'flex',flexDirection:'row',height:'100vh',width:'100vw',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Grids content={content}/>
        </div>
    </div>
  );
}

export default App;