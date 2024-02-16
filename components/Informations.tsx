import { FOOTER_INFORMATIONS, SOCIAL_MEDIAS } from "@/constants"

function Informations() {
  return (
    <div className="flex flex-col justify-around gap-12 py-14 lg:max-w-[340px]">
      <div className="text-white text-lg">
        <h4 className="font-bold text-5xl lead-[60px] pb-6 text-brown-90">We'd love to hear from you</h4>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="flex flex-col text-lg">
        <h5 className="uppercase pb-5 text-white">GET IN TOUCH</h5>
        <p className="lg:max-w-[190px] text-gray-50 pb-10">{FOOTER_INFORMATIONS.address}</p>
        <p className=" text-gray-50">{FOOTER_INFORMATIONS.telephone}</p>
      </div>

      <ul className="flex flex-col text-center lg:flex-row gap-5">
        {SOCIAL_MEDIAS.map((social_media) => (
          <li key={social_media.name}>
            <a href={social_media.url} className="transition-all duration-200 border-b pb-1 font-medium text-lg uppercase text-white hover:pb-2">
              {social_media.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Informations