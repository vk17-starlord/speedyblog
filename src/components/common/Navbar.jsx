import Container from "./Container"
import logo from '../../assets/logo.svg'
import { Link } from "react-router-dom"
function Navbar() {


  
  return (
    <div className="w-full border border-b border-b-gray-200 py-5 ">
        <Container>
            <div className="w-full flex justify-center  md:justify-between items-center">
              
                <Link to={'/'}>
                <img src={logo}  alt="" />
                </Link>
               
                <div className="links md:flex hidden  justify-center items-center">
                  <a className="px-2" href="">Home</a>
                  <a className="px-2" href="">About Us</a>
                  <a className="px-2" href="">Company</a>
                </div>

            </div>
        </Container>
    </div>
  )
}

export default Navbar