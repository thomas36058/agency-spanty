import { HERO } from '@/constants'
import Image from 'next/image'
import Button from './Button'

function Hero() {
  return (
    <section className='bg-brown-30'>
        <div className="container lg:flex gap-10 relative">
            <div className='lg:w-[50%] pt-10 pb-24'>
                <h1 className='text-brown-90 font-bold text-7xl text-center lg:text-left'>{HERO.title}</h1>
                <p className='my-8 text-white text-lg lg:max-w-[500px] text-center lg:text-left'>{HERO.description}</p>
                <div className="flex justify-around lg:justify-between flex-col lg:flex-row items-center gap-7 lg:items-start">
                    <div className="bg-white w-[215px] p-6">
                        <div className="flex">
                            <div className='p-2 bg-gray-60 flex items-center'>
                                <Image 
                                    src="/marker-icon.png"
                                    alt="marker"
                                    width={22}
                                    height={22}
                                />
                            </div>
                            <div className='pl-3 flex flex-col justify-between'>
                                <span className='text-xs text-gray-40'>Location</span>
                                <p className='font-bold text-blue-90 text-sm'>{HERO.location}</p>
                            </div>
                        </div>
                        <div className="my-7 flex">
                            <div className='p-2 bg-gray-60 flex items-center'>
                                <Image 
                                    src="/currency-icon.png"
                                    alt="marker"
                                    width={22}
                                    height={22}
                                />
                            </div>
                            <div className='pl-3 flex flex-col justify-between'>
                                <span className='text-xs text-gray-40'>Price</span>
                                <p className='font-bold text-blue-90 text-sm'>{HERO.price}</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className='p-2 bg-gray-60 flex items-center'>
                                <Image 
                                    src="/layers-three-icon.png"
                                    alt="marker"
                                    width={22}
                                    height={22}
                                />
                            </div>
                            <div className='pl-3 flex flex-col justify-between'>
                                <span className='text-xs text-gray-40'>Type of Property</span>
                                <p className='font-bold text-blue-90 text-sm'>{HERO.type_property}</p>
                            </div>
                        </div>
                        <div className="mt-9 w-full">
                            <Button 
                                title="Search"
                                variant="btn_black"
                            />
                        </div>
                    </div>
                    <div className='w-[225px] pt-4'>
                        <h4 className='font-semibold text-white text-xl'>Our Services</h4>
                        <div className="pt-6 flex flex-col gap-12">
                            {HERO.services.map((service) => (
                                <ServiceItem 
                                    icon={service.image}
                                    description={service.description}
                                    key={service.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex'>
                <Image 
                    src="/hero.png"
                    alt="white house"
                    width={756}
                    height={800}
                    className='lg:absolute lg:bottom-0'
                />
            </div>
        </div>
    </section>
  )
}

type ServiceItem = {
    icon: string;
    description: string;
}

const ServiceItem = ({ icon, description }: ServiceItem) => {
    return (
        <div className='flex flex-col gap-3'>
            <Image 
                src={icon}
                alt={description}
                width={30}
                height={30}
            />
            <p className='text-white text-sm'>{description}</p>
        </div>
    )
}

export default Hero