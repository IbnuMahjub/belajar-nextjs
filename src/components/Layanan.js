import React from 'react'
import Konsul from '../../public/assets/konsultasi.png'
import Kontrak from '../../public/assets/kontrak.png'
import Kamus from '../../public/assets/kamus.png'
import Image from 'next/image'

export default function Layanan() {
  return (
    <div>
      <section className="p-20 bg-blue">
        <div className="container">
          <h1 className="text-3xl py-10 font-bold text-center">
            <span className="text-green">Layanan</span> Kami
          </h1>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="mb-10 p-6 max-w-sm bg-white rounded-lg border border-gray shadow-md dark:bg-gray">
                <div className="columns-2 px-2 mb-3 mx-10 max-w-sm">
                  <Image src={Konsul} className="w-[76px]" />
                  <h1 className="font-bold text-2xl lg:mx-auto">Konsultasi</h1>
                  <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                </div>
                <div className="py-4 px-4">
                  <p>lLorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque dolore officia corporis sit in totam sint impedit, illum harum.</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="p-6 mb-10  max-w-sm bg-white rounded-lg border border-gray shadow-md dark:bg-gray">
                <div className="columns-2 px-2 mb-3 mx-10 max-w-sm">
                  <Image src={Kontrak} className="w-[76px]" />
                  <h1 className="font-bold text-2xl lg:mx-auto">Kontrak</h1>
                  <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                </div>
                <div className="py-4 px-4">
                  <p>lLorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque dolore officia corporis sit in totam sint impedit, illum harum.</p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="p-6  mb-10 max-w-sm bg-white rounded-lg border border-gray shadow-md dark:bg-gray">
                <div className="columns-2 px-2 mb-3 mx-10 max-w-sm">
                  <Image src={Kamus} className="w-[56px]" />
                  <h1 className="font-bold text-2xl lg:mx-auto">Kamus</h1>
                  <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                </div>
                <div className="py-4 px-4">
                  <p>lLorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque dolore officia corporis sit in totam sint impedit, illum harum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
