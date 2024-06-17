//Menu.js 
import React from "react"; 
import "./Menu.css"; 

const Menu = ({ onRouteChange }) => { 
	return ( 
		<div className="wrapper"> 
			<div> 
				<input 
					onClick={onRouteChange} 
					className="start"
					type="button"
					value="start game"
				/> 
			</div> 
		</div> 
	); 
}; 

export default Menu; 
