import Navbar from 'components/Navbar';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Konsul from 'assets/konsultasi.png';
import Kontrak from 'assets/kontrak.png';
import Kamus from 'assets/kamus.png';
import Layanan from 'assets/Group 32.png';
import Footer from 'components/Footer';

export default function TentangKami() {
    return (
        <div>
            <Head>
                <title>Tentang Kami</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className='mb-28 mt-16'>
                <div className='absolute'>
                    <Image src={Layanan} className='responsive mb-10' />
                </div>
                <div className='relative p-20'>
                    <h1 className='text-4xl text-center font-extrabold mt-2 text-putih'>Tentang Kami</h1>
                </div>
            </div>
            <div className='container flex flex-wrap text-justify px-28 tracking-wide text-lg'>
                <p className='mb-2'>
                    HeyLaw didirikan oleh pemerhati hukum dan teknologi. Beberapa pendirinya adalah Awaludin Marwan, PhD, lulusan doktor Universitas Belanda, Wahyu Agung Pramudito, PhD lulusan doktor Universitas Manchester Inggris, Dr. Bambang Pratama akademisi dan peneliti hukum siber, az Zahra F Sunandi, MSc lulusan University College London, Andi Tri Haryono, MM akademisi di bidang ekonomi digital, dan beberapa kolega yang lain. Fokus layanan yang disediakan adalah link and match antara kebutuhan hukum di masyarakat dengan memanfaatkan teknologi informasi, salah satunya adalah membantu mempertemukan pengacara dan konsultan hukum yang tepat dan terpercaya.
                </p>
                <p>
                    Pengembangan platform HeyLaw di masa mendatang adalah berinovasi untuk memenuhi kebutuhan berhukum bagi praktisi dan masyarakat yang memerlukan layanan hukum secara mudah, cepat dan tepat sasaran.
                </p>
            </div>

            <div className="container text-center mt-10 mb-20">
                <h1 className="text-4xl py-10 font-bold mb-10">
                    <span className="text-green text-center">Layanan</span> Kami
                </h1>
                <div className="flex flex-wrap ml-20 md:flex">
                    <div className="w-full px-5 lg:w-1/2 xl:w-1/3">
                        <div className="mb-10 p-6 max-w-sm bg-white rounded-lg border-gray shadow-lg dark:bg-gray">
                            <div className="columns-2 px-2 mb-6 mx-10 max-w-sm">
                                <Image src={Konsul} className="w-[76px]" />
                                <h1 className="font-bold text-2xl lg:mx-auto">Konsultasi</h1>
                                <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                            </div>
                            <div className="py-4 px-4">
                                <p>Temukan pengacara yang cocok buatmu</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5 lg:w-1/2 xl:w-1/3">
                        <div className="p-6 mb-10  max-w-sm bg-white rounded-lg border-gray shadow-lg dark:bg-gray">
                            <div className="columns-2 px-2 mb-8 mx-10 max-w-sm">
                                <Image src={Kontrak} className="w-[76px]" />
                                <h1 className="font-bold text-2xl lg:mx-auto">Kontrak</h1>
                                <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                            </div>
                            <div className="py-4 px-4">
                                <p>Bikin kontrak mudah, tak perlu repot-repot</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5 lg:w-1/2 xl:w-1/3">
                        <div className="p-6  mb-10 max-w-sm bg-white rounded-lg border-gray shadow-lg dark:bg-gray">
                            <div className="columns-2 px-2  mx-10 max-w-sm">
                                <Image src={Kamus} className="w-[56px]" />
                                <h1 className="font-bold text-2xl lg:mx-auto">Kamus</h1>
                                <h1 className="text-2xl font-bold lg:mx-auto">hukum</h1>
                            </div>
                            <div className="py-4 px-4">
                                <p>Kata kata hukum susah dipelajari? Ah, kata siapa. Buka aja kamus hukum ini</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
