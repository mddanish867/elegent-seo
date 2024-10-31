import { useNavigate } from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate(); 
  const handleConsultant = () => {
    navigate("/login")
  }
  return (
    <>
     <header className="py-6 px-4 sm:px-6 lg:px-8 bg-blue-950">
        <div className="md:container mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif text-orange-300">Elegance</div>      
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-orange-300 transition duration-300">Home</a>
            <a href="/services" className="text-white hover:text-orange-300 transition duration-300">Services</a>
            <a href="/process" className="text-white hover:text-orange-300 transition duration-300">Process</a>
            <a href="/journey" className="text-white hover:text-orange-300 transition duration-300">Journey</a>
            <a href="/about" className="text-white hover:text-orange-300 transition duration-300">About</a>
            <a href="/contact" className="text-white hover:text-orange-300 transition duration-300">Contact</a>
          </nav>
          <button
          onClick={handleConsultant}
          className="border border-orange-300 text-orange-300 hover:bg-orange-300 hover:text-blue-950 px-4 py-2 rounded transition duration-300 font-semibold">
            Consultation
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar