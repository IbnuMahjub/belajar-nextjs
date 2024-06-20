import Image from 'next/image'
import Hero from 'assets/hero.png'
import Btnchat from 'assets/chat.png'
import React from 'react'

export default function Section() {
  return (
    <div>
      <section className="relative pt-10">
        <Image src={Hero} className="object-cover absolute mix-blend-overlay w-full"></Image>
        <div className="p-24 text-center">
          <h1 className=' font-bold text-5xl'>Selesaikan <span className="text-green">Masalah Hukum</span> Anda</h1>
          <h2 className='pt-3 font-bold text-5xl'>dengan mudah</h2>
        </div>
      </section>
      <svg className="relative mt-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#EEF2F5" fillOpacity="1" d="M0,64L80,90.7C160,117,320,171,480,186.7C640,203,800,181,960,149.3C1120,117,1280,75,1360,53.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <div className="xl:text-right pt-1 bg-primarry">
        <button type="button" className="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-32 dark:bg-green dark:hover:bg-green dark:focus:ring-green">
          <Image src={Btnchat} />
        </button>
      </div>
    </div>
  )
}
