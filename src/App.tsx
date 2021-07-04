
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
      title:"Get insights that help your business grow.",
      sub:"Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency. ",
      companies: 10,
      templates: 314,
      queries: 12,
      url:"https://i.ibb.co/WWpFnVP/Office-Image.png" 
    }]
  )



  return (
    <div className="App">
      <header className="App-header">
        <div  style={{display:'flex',flexDirection:'row',height:'100vh',width:'100vw',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
        <Grids content={content}/>
        </div>
        <div style={{fontFamily:'PTSansBold'}}>
          <b>Hello</b>
        </div>
      </header>
    </div>
  );
}

export default App;