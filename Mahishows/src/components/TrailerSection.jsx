import { useState } from 'react';
import BlurCircle from './BlurCircle';
import { dummyTrailers } from '../assets/assets';
import { PlayCircleIcon } from 'lucide-react';
import  ReactPlayer  from 'react-player';

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-10 overflow-hidden'>
        <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>
            Trailers
        </p>
        <div className="relative mt-6">
            <BlurCircle top='-100px' left='-100px' />
            <ReactPlayer url={currentTrailer.videoUrl} controls={false}
                className='mx-auto max-w-full' width="960px" height="540px" />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto px-2'>
            {dummyTrailers.map((trailer) => (
            <div
                key={trailer.image}
                className='relative group transition-transform transform hover:-translate-y-1 cursor-pointer'
                onClick={() => setCurrentTrailer(trailer)}>
                <img
                    src={trailer.image}
                    alt="Trailer"
                    className='rounded-lg w-full h-full object-cover brightness-75'
                />
                <PlayCircleIcon
                    strokeWidth={1.6}
                    className='absolute top-1/2 left-1/2 w-6 h-6 md:w-8 md:h-8 transform -translate-x-1/2 -translate-y-1/2 text-white'
                />
            </div>
            ))}
        </div> 
    </div>
);
};

export default TrailerSection;