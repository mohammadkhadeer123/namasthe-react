import React from "react";
import ReactDOM from "react-dom/client";


const Title =()=> (
  <h1 className="head">Namasthe React Jsx Using</h1>
);

const HeadingComponent = ()=> (
 
  <div id ="container">
  <Title/>
  <h1 className="heading">Namasthe React functional Components </h1></div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
