import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import Link from "next/link"

function ContactUs() {
  return (
    <div className="py-8 lg:py-14 lg:px-24 z-10 relative">
      <h4 className="text-brown-90 font-extrabold text-5xl">Contact us</h4>

      <form className="my-10 lg:my-20 w-full">
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full sm:w-1/2 px-2 mb-6 sm:mb-0">
            <input name="first-name" className="appearance-none block w-full bg-gray-70 text-gray-20 py-3 px-4 focus:outline-none focus:bg-white focus:border-b-2 focus:border-b-gray-20" id="first-name" type="text" placeholder="First name" required />
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <input name="last=name" className="appearance-none block w-full bg-gray-70 text-gray-20 py-3 px-4 focus:outline-none focus:bg-white focus:border-b-2 focus:border-b-gray-20" id="grid-first-name" type="text" placeholder="Last name" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full sm:w-1/2 px-2 mb-6 sm:mb-0">
            <input name="email" className="appearance-none block w-full bg-gray-70 text-gray-20 py-3 px-4 focus:outline-none focus:bg-white focus:border-b-2 focus:border-b-gray-20" id="email" type="email" placeholder="Email" required />
          </div>
          <div className="w-full sm:w-1/2 px-2">
            <input name="phone" className="appearance-none block w-full bg-gray-70 text-gray-20 py-3 px-4 focus:outline-none focus:bg-white focus:border-b-2 focus:border-b-gray-20" id="phone" type="tel" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-5">
          <div className="w-full px-2 mb-6 sm:mb-0">
            <textarea name="message" className="mb-2 appearance-none block w-full bg-gray-70 text-gray-20 py-3 px-4 focus:outline-none focus:bg-white focus:border-b-2 focus:border-b-gray-20 min-h-[110px]" id="email" placeholder="Message" />
          </div>
        </div>
        <div className="flex items-center w-fit">
          <Button
            variant='btn_black'
            title='Submit'
            type="submit"
          />
        </div>
      </form>

      <ul className="flex gap-6 sm:gap-12">
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href}
            key={link.key}
            className=' text-gray-20 font-medium hover:opacity-60 transition duration-200'
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default ContactUs