import React from "react";
//import Rezultat from "./Rezultat";

const RezultatLista = (props) => {
  const rezultati = props.rezultati;
  console.log(rezultati);

  const listItems = rezultati.map((myList) =>  
    <li>{myList}</li>  
  )
  return (  
    <div>  
          <h2>React Map Example</h2>  
              <ul>{listItems}</ul>  
    </div>  
  )
}

export default RezultatLista;
