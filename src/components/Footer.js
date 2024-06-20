import Image from 'next/image'
import React from 'react'
import Logo from 'assets/logo.png'
import Playstore from 'assets/playstore.png'
import Facebook from 'assets/facebook 1.png'
import Youtube from 'assets/youtube 1.png'
import Twitter from 'assets/twitter 1.png'
import Instagram from 'assets/instagram 1.png'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap px-10">
            <div className="mb-12 w-full px-8 md:w-1/3">
              <Image src={Logo} className="mb-10" />
              <h2 className="mb-5 text-2xl font-semibold text-grey">PT. Prawira Bahagia Selalu</h2>
              <h3 className="text-lg font-medium mb-4 text-grey">Jasa layanan hukum</h3>
              <p className="text-sm font-normal text-grey">Jl.Raya Pondok Cabe Blok B5 No.6 Kav.77</p>
              <p className="text-sm font-normal mb-5 text-grey">Tanggerang Selatan</p>
              <p className="text-sm font-normal text-grey">Telepon/SMS/WA/: 0813 8002 2929</p>
              <p className="text-sm font-normal text-grey">Email : Info@heylaw.id</p>
            </div>
            <div className="mb-12 w-full px-8 md:w-1/3">
              <h1 className="text-lg font-semibold text-grey mb-10">Tentang Kami</h1>
              <ul className="text-grey">
                <li>
                  <a href="#" className="mb-10 inline-block text-lg font-semibold">FAQ</a>
                </li>
                <li>
                  <a href="#" className="mb-14 inline-block text-lg font-semibold">Kontak Kami</a>
                </li>
                <li>
                  <a href="#" className="mb-5 inline-block text-lg font-semibold">Syarat & Ketentuan</a>
                </li>
              </ul>
            </div>
            <div className="mb-12 w-full px-8 md:w-1/3">
              <h3 className="mb-10 text-grey text-lg font-semibold">Get the App</h3>
              <ul className="">
                <li>
                  <a>
                    <Image src={Playstore} className="mb-8" />
                  </a>
                </li>
                <li>
                  <a className="text-lg font-semibold text-grey">Ikuti Kami</a>
                </li>
              </ul>
              <div className="grid grid-cols-4 md:grid-cols-6 pt-10">
                <a href="#">
                  <Image src={Instagram} />
                </a>
                <a href="#">
                  <Image src={Facebook} />
                </a>
                <a href="#">
                  <Image src={Twitter} />
                </a>
                <a href="#">
                  <Image src={Youtube} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
