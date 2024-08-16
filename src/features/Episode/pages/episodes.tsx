import { GET_DETAIL_EPISODE, GET_EPISODES } from '@/configs/query/queries';
import Navbar from '@/shared/components/navbar';
import { useQuery } from '@apollo/client';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'ldrs/ring'


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

interface characterInterface {
  name: string
  id: string
  species: string
  image: string
  status: string
  gender: string
  type: string
}

function EpisodesPage() {

  const { episode } = useParams()

  const [detailEpisode, setDetailEpisode] = useState({
    id: '',
    name: '',
    air_date: '',
    episode: '',
    characters: [
      {
        name: '',
        id: '',
        species: '',
        image: '',
        status: '',
        gender: '',
        type: '',
      }
    ]
  })

  const { loading, data } = useQuery(GET_DETAIL_EPISODE, {
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

  const newLocal = 'http://www.w3.org/2000/svg';
  return (
    <>
      <Navbar />
      <div className='bg-gray-100'>
        <div className='container mx-auto p-4 py-0'>
          <div className='flex justify-between gap-10'>
            {/* Left Content */}
            <div className='sticky top-32 h-fit flex-1'>
              <div>
                <div className='bg-black rounded-lg overflow-hidden'>
                  <div className=''>
                    {loading ? (
                      <div className='flex justify-center items-center mt-4 flex-col h-[400px] w-[870px]'>
                        <l-ring size='20' stroke='5' bg-opacity='0' speed='2' color='white' ></l-ring>
                        <p className='text-xl mt-3 text-white'>Loading ...</p>
                      </div>
                    ) : (
                      <YoutubeEmebed />
                    )}
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
                    {
                      loading ? (
                        <div className='flex justify-center items-center mt-4 flex-col'>
                          <l-ring size='20' stroke='5' bg-opacity='0' speed='2' color='black' ></l-ring>
                          <p className='text-xl mt-3'>Loading ...</p>
                        </div>
                      ) : (
                        <Fragment>
                          <h3 className='text-xl font-bold text-gray-800 mt-4'>
                            {detailEpisode?.name}
                          </h3>

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
                        </Fragment>
                      )
                    }

                  </div>
                </div>
              </div>

            </div>


            {/* Right Content */}
            <div className='w-1/2'>
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
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-3.887 3.886-5.656-5.657M22 12l-5.657 5.656-3.887-3.886m-5.657-5.657l3.887-3.886 5.656 5.657M5.298 8.298l3.887 3.886 5.656-5.657' />
                      </svg>
                    </button>
                  </div>
                </div>

                {loading ? (
                  <div className='flex justify-center items-center mt-4'>
                    <l-ring size='40' stroke='5' bg-opacity='0' speed='2' color='black' ></l-ring>
                    <p className='text-xl ml-4'>Loading ..</p>
                  </div>
                ) : (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                    {
                      detailEpisode?.characters?.map((character: characterInterface) => (
                        <div key={character.image} className='bg-white rounded-lg shadow-md overflow-hidden w-min-full flex-1'>
                          <img
                            src={character.image}
                            alt='Anime Title'
                            width={300}
                            height={200}
                          />
                          <div className='p-4'>
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
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </div >
    </>
  );
}

export default EpisodesPage