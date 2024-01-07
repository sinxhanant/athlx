import React from 'react'; 
import { 
Nav, 
NavLink, 
Bars, 
NavMenu, 
NavBtn, 
NavBtnLink, 
} from './NavbarElements'; 

const Navbar = () => { 
return ( 
	<> 
	<Nav> 
		<Bars /> 

		<NavMenu> 
		<NavLink to='/' activeStyle> 
			<h2>Athlx</h2> 
		</NavLink> 
		<NavLink to='/about' activeStyle> 
			About 
		</NavLink> 
		<NavLink to='/Contact' activeStyle> 
			Contact
		</NavLink> 
		{/* Second Nav */} 
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */} 
		</NavMenu> 
		<NavBtn> 
		<NavBtnLink to='/userreg'>Sign Up</NavBtnLink> 
		</NavBtn> 
	</Nav> 
	</> 
); 
}; 

export default Navbar;
