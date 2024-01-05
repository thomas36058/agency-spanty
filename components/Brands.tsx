import { BRANDS } from '@/constants'
import Image from 'next/image'

function Brands() {
  return (
    <section className="lg:py-24 py-12">
        <div className="container flex gap-4 lg:gap-6 justify-center items-center flex-col lg:flex-row">
            {BRANDS.map((brand) => (
                <Image 
                    className='object-contain'
                    src={brand}
                    key={brand}
                    alt='umbrella logo'
                    width={190}
                    height={68}
                />
            ))}
        </div>
    </section>
  )
}

export default Brands