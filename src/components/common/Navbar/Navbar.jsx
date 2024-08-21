import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const menuItem = (
    <>
      <li><Link to="/" onClick={closeMenu}>Home</Link></li>
      <li><Link to="/destination" onClick={closeMenu}>Destination</Link></li>
      <li><Link to="/crew" onClick={closeMenu}>Crew</Link></li>
      <li><Link to="/technology" onClick={closeMenu}>Technology</Link></li>
    </>
  )

  return (
    <nav>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {menuItem}
      </ul>

      {/* Botón Mobile Menu */}
      <button className="block md:hidden" onClick={toggleMenu}>menu</button>

      {/* Mobile Menu */}
      <ul className={`md:hidden  ${open ? 'block' : 'hidden'}`}>
        <button className="block md:hidden" onClick={toggleMenu}>close</button>
        {open && menuItem}
      </ul>
    </nav>
  )
}

export default Navbar