import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  const menuItem = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/destination">Destination</Link></li>
      <li><Link to="/crew">Crew</Link></li>
      <li><Link to="/technology">Technology</Link></li>
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
      <ul className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        {open && menuItem}
      </ul>
    </nav>
  )
}

export default Navbar