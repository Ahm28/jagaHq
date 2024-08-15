import { GET_EPISODES } from '@/configs/query/queries'
import Navbar from '@/shared/components/navbar'
import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

interface episode {
  name: string;
  air_date: string;
  characters: {
    name: string
  }[]
}

interface characterInterface {
  id: string;
  name: string;
  image: string;
  // status: string
  // species: string
  // type: string
  // gender: string
  // created: string
}

function Home() {

  const [listEpisodes, setListEpisodes] = useState([])

  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: {
      page: 0,
      // name: search
    }
  })

  useEffect(() => {
    if (data) {
      setListEpisodes(data.episodes.results)
    }
  }, [data])

  const fetchData = () => { }


  return (
    <div className='bg-gray-100 h-full'>
      <div className='container mx-auto p-4'>

        <Navbar />

        <div className='mt-8'>

          <div className='mb-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight'>Semua Episode</h5>
          </div>

          <InfiniteScroll
            dataLength={listEpisodes.length}
            height={window.screen.height}
            next={fetchData}
            hasMore={data?.episodes?.info?.next !== null}
            loader={<p>Loading...</p>}
          >
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
              {
                loading ? <p>Loading...</p> : listEpisodes.map((episode: episode, index: number) => (
                  <div className='max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow' key={index}>
                    <a href={`/episode/${episode.episode}`}>
                      <h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>{episode.name}</h5>
                    </a>
                    <p className='mb-3 font-normal text-gray-700 text-sm'>{episode.air_date}</p>
                    <p className='mb-2 font-semibold text-gray-700 text-lg'>All Characters</p>
                    <div className='mb-3 max-h-[100px] text-ellipsis hover:max-h-full'>
                      {episode.characters.map((character: characterInterface, index: number) => (
                        <Tooltip key={character.id} text={character.name} image={character.image}>
                          <span className='mb-3 font-normal text-gray-700 cursor-pointer hover:text-gray-900 hover:font-semibold hover:text-lg'>
                            {character.name}{index < episode.characters.length - 1 ? ', ' : ''}
                          </span>
                        </Tooltip>
                      ))}

                      {/* <Tooltip text={'testing'} image={'https://picsum.photos/id/237/200/300'}>
                        <span className='mb-3 font-normal text-gray-700 cursor-pointer hover:text-gray-900 hover:font-semibold hover:text-lg'>
                          {"character.name"}
                        </span>
                      </Tooltip> */}
                    </div>

                    <a href={`/episode/${episode.episode}`} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 '>
                      Lihat Episode
                    </a>
                  </div>
                ))
              }
            </div>
          </InfiniteScroll>
        </div>

      </div>
    </div>

  )
}

const Tooltip = ({ children, text, image }: { children: React.ReactNode, text: string, image: string }) => {
  return (
    <span className='relative group'>
      {children}
      <div className='absolute left-1/2 w-full h-full transform -translate-x-1/2 bottom-2 mb-1 hidden group-hover:block bg-gray-50 border-2 text-gray-900 text-sm rounded py-1 px-2 z-10'>
        <img src={image} alt={text} className='w-100 h-100' />
        {text}
      </div>
    </span>
  );
};

export default Home