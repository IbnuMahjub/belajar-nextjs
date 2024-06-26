import Image from 'next/image'
import React from 'react'
import Hp from '../../public/assets/hp.png'

export default function Konsultasi() {
  return (
    <div>
      <section className=" bg-primarry">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-2 lg:mt-2 xl:mt-4 xl:mr-12">
            <Image src={Hp} />
          </div>
          <div className="xl:text-left pt-[-135px]">
            <h1 className="text-4xl font-bold"><span className='text-green'>Konsultasi</span> hanya</h1>
            <h2 className="text-4xl font-bold">dengan satu aplikasi</h2>
            <p className="pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt omnis perferendis reiciendis, quibusdam quia corporis obcaecati iure veritatis est eos blanditiis nobis ad sapiente sint aut placeat cupiditate facere. Neque nam explicabo inventore illum cum iusto, reprehenderit dolores ipsum!</p>
          </div>
        </div>
      </section>
    </div>
  )
}
