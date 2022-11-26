import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <Navbar
      fluid={false}
      rounded={true}
    >
      <Navbar.Brand>
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="AcademyHub Logo"
          /> */}
        <NavLink className='no-underline text-[#ff7900]' to='/'>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-[#ff7900] no-underline">
            AcademyHub
          </span>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href="/navbars"
          active={true}
        >
          Home
        </Navbar.Link>
        <Navbar.Link className="text-[#ff7900]" >
          <NavLink className="text-[#ff7900] no-underline" to='/'>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link >
        <NavLink className="text-[#ff7900]" to='/about'>About Us</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;