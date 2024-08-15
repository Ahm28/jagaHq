import { GET_DETAIL_EPISODE, GET_EPISODES } from '@/configs/query/queries';
import Navbar from '@/shared/components/navbar';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const YoutubeEmebed = () => {
  return (
    <div className=''>
      <iframe
        width='870'
        height='480'
        src={`https://www.youtube.com/embed/bhqRGAnOikM?si=xmE1DcUUdeUI3H1S`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      // className='w-full h-full'
      />
    </div>
  )
}

function EpisodesPage() {

  const { episode } = useParams()

  const [detailEpisode, setDetailEpisode] = useState()

  const { loading, error, data } = useQuery(GET_DETAIL_EPISODE, {
    variables: {
      page: 0,
      episode
    }
  })

  useEffect(() => {
    if (data) {
      setDetailEpisode(data.episodes.results[0])
    }
  }, [data])

  console.log('detailEpisode', detailEpisode)

  const newLocal = 'http://www.w3.org/2000/svg';
  return (

    <div className='bg-gray-100'>
      <div className='container mx-auto p-4'>

        <Navbar />

        <div className='flex justify-between gap-10'>

          {/* Left Content */}
          <div>
            <div className='mt-8'>
              <div className='bg-black rounded-lg overflow-hidden'>
                <div className=''>
                  <YoutubeEmebed />
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <div className='p-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <svg xmlns={newLocal} className='h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
                        <path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z' />
                      </svg>
                      <span className='text-gray-600 ml-2'>24.2K</span>
                    </div>
                    <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                      Favorit Saya
                    </button>
                  </div>
                  <h3 className='text-xl font-bold text-gray-800 mt-4'>{detailEpisode?.name}</h3>
                  <p className='text-gray-600 mt-2'>
                    3.7M Putar | {detailEpisode?.air_date}
                  </p>
                  <div className='flex items-center mt-4'>
                    <span className='bg-blue-500 text-white font-bold py-1 px-3 rounded-full mr-2'>Anime</span>
                    <span className='bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-full mr-2'>Adaptasi novel</span>
                    <span className='bg-gray-300 text-gray-800 font-bold py-1 px-3 rounded-full mr-2'>Isekai</span>
                  </div>
                  <p className='text-gray-600 mt-4'>
                    "Kerjarlah mimpimu selagi masih muda." Itulah yang dipikirkan semua orang. Tapi ada juga orang dewasa di sana yang pantang menyerah untuk mewujudkan impiannya.
                    Di dunia di mana menjadi seorang petualang di usia remaja adalah hal yang biasa, Rick Gladiatol beralih dari pegawai serikat menjadi petualang di usia 30 tahun. Dia menghabiskan hari-hari dalam pelatihan yang tak terbayangkan
                    oleh anggota sebuah grup terkuat legendaris di benua, "Tinju Orichalcum". Dia adalah petualang peringkat F baru, tetapi memiliki kekuatan tempur peringkat tertinggi, yaitu peringkat S.
                  </p>
                </div>
              </div>
            </div>

          </div>


          {/* Right Content */}
          <div className=''>

            <div className='mt-8'>

              <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold text-gray-800'>Semua Karakter</h2>
                <div className='flex items-center'>
                  <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-3.887 3.886-5.656-5.657M22 12l-5.657 5.656-3.887-3.886m-5.657-5.657l3.887-3.886 5.656 5.657M5.298 8.298l3.887 3.886 5.656-5.657' />
                    </svg>
                  </button>
                  <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap="round" strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-3.887 3.886-5.656-5.657M22 12l-5.657 5.656-3.887-3.886m-5.657-5.657l3.887-3.886 5.656 5.657M5.298 8.298l3.887 3.886 5.656-5.657' />
                    </svg>
                  </button>
                </div>
              </div>

              {/* <div className='flex mt-4'>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                  1-6
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                  PV&More
                </button>
              </div> */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>

                {
                  detailEpisode && detailEpisode?.characters?.map((character: any, index: number) => (
                    <>
                      {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <img className="w-full" src={character.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-2">
                          <div className="font-bold text-xl mb-2">{character.name}</div>
                          <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                          </p>
                        </div>
                        <div className="px-6 pt-2 pb-2">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">species: {character.species}</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">status: {character.status}</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{character.type}</span>
                        </div>
                      </div> */}

                      <div className='bg-white rounded-lg shadow-md overflow-hidden w-min-full'>
                        <img
                          src={character.image}
                          alt='Anime Title'
                          className='w-full'
                        />
                        <div className='p-4'>
                          {/* <h3 className="text-xl font-bold text-gray-800 min-w-36">Om-om Petualang Pemula Dilatih Setengah Mati oleh Grup Terhebat Hingga Jadi Tanpa Tanding</h3> */}
                          <h3 className='text-xl font-bold text-gray-800 min-w-36'>{character.name}</h3>
                          <p className='text-gray-600 mt-2'>
                            Species: {character.species ?? '-'}
                          </p>
                          <p className='text-gray-600 mt-2'>
                            Status: {character.status ?? '-'}
                          </p>
                          <p className='text-gray-600 mt-2'>
                            Type: {character.type ?? '-'}
                          </p>
                          <p className='text-gray-600 mt-2'>
                            Gender: {character.gender ?? '-'}
                          </p>
                          {/* <div className='flex items-center justify-between mt-4'>
                            <div className='flex items-center'>
                              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
                                <path d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z' />
                              </svg>
                              <span className='text-gray-600 ml-2'>3.7M Putar</span>
                            </div>
                            <span className='text-gray-600'>Peringkat Umum Top 4</span>
                          </div> */}
                        </div>
                      </div>
                    </>
                  ))
                }
              </div>


            </div>

            <div className="mt-8">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Anime Title"
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Om-om Petualang Pemula Dilatih Setengah Mati oleh Grup Terhebat Hingga Jadi Tanpa Tanding</h3>
                    <p className="text-gray-600 mt-2">
                      Adaptasi novel / Isekai
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z" />
                        </svg>
                        <span className="text-gray-600 ml-2">3.7M Putar</span>
                      </div>
                      <span className="text-gray-600">Peringkat Umum Top 4</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Anime Title"
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Dengan Bingkai Status Sampah "Skill..."</h3>
                    <p className="text-gray-600 mt-2">
                      Adaptasi novel / Isekai
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z" />
                        </svg>
                        <span className="text-gray-600 ml-2">29.9K Putar</span>
                      </div>
                      <span className="text-gray-600">4.7M Putar</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Anime Title"
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Catatan Perjalanan Santai di Dunia Lain A...</h3>
                    <p className="text-gray-600 mt-2">
                      Adaptasi novel / Isekai
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z" />
                        </svg>
                        <span className="text-gray-600 ml-2">1.8M Putar</span>
                      </div>
                      <span className="text-gray-600">1.8M Putar</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Anime Title"
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Bye Bye, Earth</h3>
                    <p className="text-gray-600 mt-2">
                      Adaptasi novel / Isekai
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z" />
                        </svg>
                        <span className="text-gray-600 ml-2">070.2K Putar</span>
                      </div>
                      <span className="text-gray-600">070.2K Putar</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Anime Title"
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Penggunaan Sihir Penyembuh yang Keliru</h3>
                    <p className="text-gray-600 mt-2">
                      Adaptasi novel / Isekai
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z" />
                        </svg>
                        <span className="text-gray-600 ml-2">6.5M Putar</span>
                      </div>
                      <span className="text-gray-600">6.5M Putar</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Anime Title"
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">TSUKIMICHI -Moonlit Fantasy- Season 2</h3>
                    <p className="text-gray-600 mt-2">
                      Adaptasi novel / Isekai
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z" />
                        </svg>
                        <span className="text-gray-600 ml-2">20.8M Putar</span>
                      </div>
                      <span className="text-gray-600">20.8M Putar</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Anime Title"
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Bereinkarnasi Malah Menjadi Slime Musim...</h3>
                    <p className="text-gray-600 mt-2">
                      Adaptasi novel / Isekai
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z" />
                        </svg>
                        <span className="text-gray-600 ml-2">17.8M Putar</span>
                      </div>
                      <span className="text-gray-600">17.8M Putar</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Anime Title"
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Bereinkarnasi Malah Menjadi Pangeran...</h3>
                    <p className="text-gray-600 mt-2">
                      Adaptasi novel / Isekai
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6.5 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM11 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z" />
                        </svg>
                        <span className="text-gray-600 ml-2">Panas Dijual</span>
                      </div>
                      <span className="text-gray-600">Panas Dijual</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default EpisodesPage