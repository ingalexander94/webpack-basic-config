import React from 'react';
import "../styles.css";

export const HelloWorld = ({name, logo, menu}) => {
    return (
        <>
         <h1>¡Hola Mundo con Webpack desde {name}!</h1>  
        <img className="logo" src={logo} alt={name}/>
         <nav>
            {
                menu.map((el, i) => <a key={i} href={el[1]}>{el[0]}</a>)
            }     
        </nav> 
        </>
    )
}
