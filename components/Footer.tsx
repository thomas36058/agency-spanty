import Informations from './Informations'
import ContactUs from './ContactUs'

function Footer() {
  return (
    <div className="bg-brown-30 overflow-hidden">
      <div className='container grid lg:grid-cols-8'>
        <div className="lg:col-span-3">
          <Informations />
        </div>
        <div className="lg:col-span-5 relative">
          <div className="left-[-16px] w-screen h-full absolute top-0 lg:left-0 bg-white -z-1 sm:pl-0"></div>
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default Footer