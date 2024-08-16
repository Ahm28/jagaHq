import { GET_EPISODES } from '@/configs/query/queries'
import Navbar from '@/shared/components/navbar'
import Tooltip from '@/shared/components/Tooltip/indext'
import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'ldrs/ring'


interface episode {
  episode: string
  name: string;
  air_date: string;
  characters: {
    name: string
    id: string;
    species: string;
    image: string;
  }[]
}

function Home() {

  const [listEpisodes, setListEpisodes] = useState([])
  const [loadingFetchMore, setLoadingFetchMore] = useState(false)
  const [search, setSearch] = useState()

  const { loading, data, fetchMore } = useQuery(GET_EPISODES, {
    variables: {
      page: 0,
      name: search
    }
  })

  useEffect(() => {
    if (data) {
      setListEpisodes(data.episodes.results)
    }
  }, [data])

  const fetchData = () => {
    setLoadingFetchMore(true)
    fetchMore({
      variables: {
        page: data?.episodes?.info?.next,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        return Object.assign({}, prev, {
          episodes: {
            ...prev.episodes,
            results: [...prev.episodes.results, ...fetchMoreResult.episodes.results]
          }
        })
      }
    })
  }

  const handleChange = (value: string) => {
    setTimeout(() => setSearch(value), 1000)
  }

  return (
    <>
      <Navbar />

      <div className='bg-gray-100 h-full'>
        <div className='container mx-auto p-4'>

          <div className='mt-8'>

            <div className='mb-5'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight'>Semua Episode</h5>
            </div>

            <div className='mb-4 w-full'>
              <input type='text' className='border border-gray-300 rounded-md px-3 py-2 w-full'
                placeholder='Cari Episode'
                onChange={(e) => handleChange(e.target.value)} />
            </div>


            <InfiniteScroll
              dataLength={listEpisodes.length}
              height={window.screen.height}
              next={fetchData}
              hasMore={data?.episodes?.info?.next !== null}
              loader={loadingFetchMore ? <l-ring size='40' stroke='5' bg-opacity='0' speed='2' color='black' ></l-ring> : null}
            >
              {
                loading ? (

                  // Default values shown  
                  <div className='flex justify-center items-center max-h-vh'>
                    <l-ring size='40' stroke='5' bg-opacity='0' speed='2' color='black' ></l-ring>
                  </div>
                ) : (
                  <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                    {
                      listEpisodes.map((episode: episode, index: number) => (
                        <div className='max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow' key={index}>
                          <a href={`/episode/${episode.episode}`}>
                            <h5 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>{episode.name}</h5>
                          </a>
                          <p className='mb-3 font-normal text-gray-700 text-sm'>{episode.air_date}</p>
                          <p className='mb-2 font-semibold text-gray-700 text-lg'>All Characters</p>
                          <div className='mb-3 flex gap-3 flex-wrap text-ellipsis'>
                            {episode.characters.map((character, index: number) => (
                              <>
                                {index < 10 && (
                                  <Tooltip key={character.id} text={character.name} image={character.image} species={character.species}>
                                    <span className='mb-3 font-normal text-gray-700 cursor-pointer hover:text-gray-900 hover:font-semibold'>
                                      {character.name}{index < episode.characters.length - 1 ? ', ' : ' '}
                                    </span>
                                  </Tooltip>
                                )}
                              </>
                            ))}
                            <a href={`/episode/${episode.episode}`} className='text-blue-500'>...lihat semua</a>
                          </div>
                          <a href={`/episode/${episode.episode}`} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 '>
                            Lihat Episode
                          </a>
                        </div>
                      ))
                    }
                  </div>


                )


              }
            </InfiniteScroll>
          </div>
        </div >
      </div >
    </>
  )
}



export default Home