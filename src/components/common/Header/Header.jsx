import Navbar from "../Navbar/Navbar"
import LogoHeader from "../../../assets/icons/logo.svg"

const Header = () => {
  return (
    <header className="w-full h-24 absolute z-10 top-0 flex justify-between items-center px-6  ">
      <img className="size-[2.5rem]" src={LogoHeader} alt="Logo Header"/>
      <Navbar/>
    </header>
  )
}

export default Header