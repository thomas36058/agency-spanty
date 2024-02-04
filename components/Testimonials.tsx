import { CUSTOMERS } from '@/constants';
import Image from 'next/image'

type StarsProps = {
  stars: number,
}

const Stars = ({ stars }: StarsProps) => {
  return (
    <div className='flex gap-3 mb-8 justify-center'>
      {Array.from({ length: stars }, (_, index) => (
        <Image 
          key={index}
          src="/star.png"
          alt='star'
          width={20}
          height={19}
        />
      ))}
    </div>
  );
};

function Testimonials() {

  return (
    <div className="mt-32 lg:mt-48 pt-10 pb-20 bg-green text-white">
      <div className="container flex flex-col items-center">
        <Image
          src="/quote.png"
          alt="yellow quote"
          width={52}
          height={42}
        />
        <h4 className='pt-3 pb-16 font-semibold text-3xl lg:text-5xl text-white text-center'>What our Customers says</h4>

        {CUSTOMERS.map((customer) => (
          <CustomerItem
            key={customer.name}
            number_of_stars={customer.number_of_stars}
            depoiment={customer.depoiment}
            name={customer.name}
            description={customer.description}
            image={customer.image}
          />
        ))}
      </div>
    </div>
  )
}

type CustomerProps = {
  number_of_stars: number,
  depoiment: string,
  name: string,
  description: string,
  image: string
}

const CustomerItem = ({ number_of_stars, depoiment, name, description, image } : CustomerProps) => {
  return (
    <div key={name} className='flex justify-center flex-col text-center max-w-[792px]'>
      <Stars 
        stars={number_of_stars}
      />
      <p className='font-light text-lg leading-8 text-center pb-8'>{depoiment}</p>
      <h5 className='pb-2 font-semibold text-2xl'>{name}</h5>
      <p className='font-light'>{description}</p>
      <Image
        className='mx-auto mt-12'
        src={image}
        alt={name}
        width={60}
        height={60}
      />
    </div>
  )
}

export default Testimonials