import { FEATURED_LINKS } from '@/constants'

import Image from 'next/image'

function Listing() {
  return (
    <section className='pt-32 lg:pt-48'>
      <div className="container lg:grid grid-cols-3 gap-8">
        <div className='pb-8 lg:pb-0 font-semibold'>
          <h4 className='text-blue-90 font-bold text-7xl lg:text-[88px] lg:leading-[87px] tracking-[-4px] pb-6'>Featured Listings</h4>
          <span className='flex gap-1 items-center cursor-pointer group'>
            More
            <svg className=' transition-all group-hover:translate-x-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699" stroke="#191A23" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.5 12H20.33" stroke="#191A23" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
        {FEATURED_LINKS.map((item) => (
          <ListItem
            key={item.title}
            image={item.image}
            price={item.price}
            title={item.title}
            address={item.address}
            beds={item.beds}
            baths={item.baths}
            area={item.area}
          />
        ))}
      </div>
    </section>
  )
}

type ListItem = {
  image: string,
  price: string,
  title: string,
  address: string,
  beds: string,
  baths: string,
  area: string
}

const ListItem = ({ image, price, title, address, beds, baths, area }: ListItem) => {
  return (
    <div className='pb-4 lg:pb-0 border border-gray-80'>
      <Image 
        src={image}
        alt={price}
        width={364}
        height={182}
      />
      <div className='p-4 pt-5 lg:pt-8 lg:pb-6 lg:px-6 text-gray-40 text-base font-light leading-7'>
        <p>
          <span className='text-blue-90 text-2xl leading-10 font-semibold'>${price}</span>
          /month
        </p>
        <p className='text-blue-90 text-xl leading-8 font-semibold pt-1 pb-3'>{title}</p>
        <span>{address}</span>
        <div className='flex gap-6 pt-4 justify-between lg:justify-start'>
          <span className='flex gap-2 items-center flex-col lg:flex-row'>
            <Image 
              src='/bed-icon.png'
              alt='bed'
              width={24}
              height={24}
            />
            {beds} beds
          </span>
          <span className='flex gap-2 items-center flex-col lg:flex-row'>
            <Image 
              src='/bath-icon.png'
              alt='bath'
              width={24}
              height={24}
            />
            {baths} Baths
          </span>
          <span className='flex gap-2 items-center flex-col lg:flex-row'>
            <Image 
              src='/size-icon.png'
              alt='square size'
              width={24}
              height={24}
            />
            {area}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Listing