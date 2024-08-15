
const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
        <a href='/'>
          <span className='text-xl font-bold text-gray-800 ml-4'>Rick and Morthy</span>
        </a>
      </div>

      <div className='flex items-center'>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-3.887 3.886-5.656-5.657M22 12l-5.657 5.656-3.887-3.886m-5.657-5.657l3.887-3.886 5.656 5.657M5.298 8.298l3.887 3.886 5.656-5.657' />
          </svg>
        </button>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 .552-.008 1-.02 1.5-.058.417-.163.819-.332 1.151C20.54 15.47 20.015 16 19.5 16H5c-.515 0-.987-.524-1.024-1.024C3.008 15.47 2.94 14.988 2.922 14.5A3.983 3.983 0 013 10.5c0-.552.008-1 .02-1.5.058-.417.163-.819.332-1.151C3.54 6.53 4.015 6 4.5 6H19.5c.515 0 .987.524 1.024 1.024C21.992 6.53 22 7.012 22 7.5c0 .552-.008 1-.02 1.5-.058.417-.163.819-.332 1.151C21.54 10.53 21.015 11 20.5 11H5c-.515 0-.987.524-1.024 1.024C3.008 10.53 2.94 11.012 2.922 11.5A3.983 3.983 0 013 13.5c0 .552.008 1 .02 1.5.058.417.163.819.332 1.151C3.54 16.53 4.015 17 4.5 17H19.5c.515 0 .987.524 1.024 1.024C21.992 16.53 22 17.012 22 17.5c0 .552-.008 1-.02 1.5-.058.417-.163.819-.332 1.151C21.54 19.47 21.015 20 20.5 20H5c-.515 0-.987-.524-1.024-1.024C3.008 19.47 2.94 18.988 2.922 18.5A3.983 3.983 0 013 16.5c0-.552.008-1 .02-1.5.058-.417.163-.819.332-1.151C3.54 13.53 4.015 13 4.5 13H19.5c.515 0 .987.524 1.024 1.024C21.992 13.53 22 14.012 22 14.5c0 .552-.008 1-.02 1.5-.058.417-.163.819-.332 1.151C21.54 17.47 21.015 18 20.5 18H5c-.515 0-.987-.524-1.024-1.024C3.008 17.47 2.94 16.988 2.922 16.5A3.983 3.983 0 013 14.5' />
          </svg>
        </button>
        <input type='text' className='border border-gray-300 rounded-md px-3 py-2' placeholder='Cari' />
      </div>
    </div>
  );
};

export default Navbar;