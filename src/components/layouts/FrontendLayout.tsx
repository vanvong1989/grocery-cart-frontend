import LoginModal from "../model/LoginModal"
import RegisterModal from "../model/RegisterModal"
import Navbar from "../navbar/Navbar"
import Footer from "../ui/Footer"


const FrontendLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <> 
    <Navbar />
    <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {children}
    </div> 
    <Footer />
    <RegisterModal />
    <LoginModal />
    </>
  )
}

export default FrontendLayout