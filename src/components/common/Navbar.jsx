import Container from "./Container"
import logo from '../../assets/logo.svg'
import Button from "./button"
function Navbar() {
  return (
    <div className="w-full py-5 ">
        <Container>
            <div className="w-full flex justify-between items-center">
                <img src={logo} alt="" />
               
                <div className="links flex justify-center items-center">
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