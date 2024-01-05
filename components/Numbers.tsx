import { NUMBERS } from '@/constants'
import React from 'react'
import Button from './Button';

function Numbers() {
  return (
    <section className='pt-16'>
        <div className="container flex gap-16 lg:gap-24 flex-col lg:flex-row">
            <div className='flex gap-x-20 gap-y-12 lg:w-2/4 flex-wrap order-last justify-center lg:justify-start'>
                {NUMBERS.informations.map((number) => (
                    <NumberItem
                        number={number.number}
                        text={number.description}
                        key={number.description}
                    />
                ))}
            </div>
            <div className='lg:w-2/4 flex flex-col'>
                <h4 className='text-brown-90 text-4xl lg:text-5xl font-bold lg:leading-[56px] pb-4'>{NUMBERS.title}</h4>
                <p className='pb-11'>{NUMBERS.description}</p>
                <div className="w-fit">
                    <Button 
                        variant='btn_black'
                        title='Know more'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

type NumberItem = {
    number: string;
    text: string;
}

const NumberItem = ({ number, text }: NumberItem) => {
    return (
        <div className='flex flex-col gap-2 lg:max-w-[175px] text-center lg:text-start'>
            <span className='text-brown-90 text-4xl lg:text-5xl font-semibold'>{number}</span>
            <p className='text-gray-20 text-lg leading-7'>{text}</p>
        </div>
    )
}

export default Numbers