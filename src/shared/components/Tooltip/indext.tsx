const Tooltip = ({ children, text, image, species }: { children: React.ReactNode, text: string, image: string, species: string }) => {
  return (
    <span className='relative group'>
      {children}
      <div className='absolute flex-col -left-1/2 -top-64 w-[15vw] h-[20vh] hidden group-hover:flex bg-gray-50 border-2 text-gray-900 text-sm rounded-md py-1 px-2 z-10'>
        <img src={image} alt={text} className='w-full h-3/4 object-cover object-center rounded-md' />
        <div className='mt-2 text-center'>
          <p className='text-lg '>
            {text}
          </p>
          <p className='text-sm'>
            {species}
          </p>
        </div>
      </div>
    </span>
  );
};

export default Tooltip;