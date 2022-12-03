import Image from 'next/image'
import Pict from 'assets/question.png'
import React from 'react'

export default function Question() {
  return (
    <div>
      <section className="py-28">
      <div className="container">
        <div className="flex justify-center px-10">
          <div className="relative overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-green">
            <Image src={Pict} className="object-cover w-[1200px] h-[354px] mix-blend-overlay" />
            <div className="absolute top-32 left-0 px-8 py-4">
              <h4 className="text-3xl font-bold text-white">Ada Pertanyaan?</h4>
              <p className="text-white text-opacity-20 pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="text-white text-opacity-20">Maiores nesciunt omnis perferendis reiciendis, quibusdam quia corporis</p>
            </div>
              <div className="absolute bottom-36 right-32 text-white">
                <button type="button" class="text-white bg-green hover:bg-green focus:ring-4 focus:outline-none focus:ring-green font-bold rounded-lg text-sm px-7 py-4 text-center mr-3 md:mr-0 dark:bg-green dark:hover:bg-green dark:focus:ring-green">Mulai Bertanya</button>
              </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
