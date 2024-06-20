import Image from 'next/image'
import React from 'react'
import Timbang from 'assets/timbang.png'
import Chat from 'assets/chat1.png'
import Playstore from 'assets/playstore.png'
import Link from 'next/link'

export default function Problem() {
  return (
    <div>
      <section className="bg-white">
        <div className="container">
          <div className="flex flex-wrap px-10">
            <div className="pt-6 w-full self-center px-10 lg:w-1/2 mb-10">
              <Image src={Timbang} />
              <h1 className="pt-6 text-2xl font-bold"><span className='text-green'>Selesaikan Masalah</span> Anda dengan</h1>
              <h2 className="text-2xl font-bold">Konsultan Hukum terpercaya kami</h2>
              <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt omnis perferendis reiciendis, quibusdam quia corporis obcaecati iure veritatis est eos blanditiis nobis ad sapiente sint aut placeat cupiditate facere. Neque nam explicabo inventore illum cum iusto, reprehenderit dolores ipsum!</p>
              <a href="#">
                <Image src={Playstore} className="pt-10" />
              </a>
            </div>
            <div className="pt-6 w-full self-end px-10 lg:w-1/2 mb-10">
              <div className="mt-10 lg:right lg:mt-9">
                <Image src={Chat} className="relative z-10 mx-auto max-w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
