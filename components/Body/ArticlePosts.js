import React from 'react';
import { listarticle } from '../../constants';
import Image from 'next/image';

const ArticlePosts = () => {
  return (
    <div className='desktop:flex desktop:flex-row'>
      {listarticle.map((list) => (
        <div className='flex flex-row'>
          <div className='mobile:min-h-full mobile:pt-2 mobile:min-w-fit' key={list.id}>
            <Image className='desktop:h-[180px] desktop:w-[120px] p-4 h-auto' src={list.image} />
          </div>
          <div className=' mobile:mt-5'>
            <h1>{list.number}</h1>
            <h2>{list.title}</h2>
            <p>{list.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// const ArticlePosts = () => {
//   return (
//     <div className='mt-4 desktop:flex desktop:flex-row'>
//       {listarticle.map((list) => (
//         <div className='flex justify-center mobile:flex-col'>
//           <div className='flex flex-col mobile:flex-row mobile:max-w-xl rounded-lg bg-white shadow-lg'>
//             <Image className='w-full desktop:h-96 mobile:h-auto object-cover desktop:w-48 rounded-t-lg mobile:rounded-none mobile:rounded-l-lg p-4' src={list.image} />
//             <div className='p-6 flex flex-col justify-start'>
//               <h1 className='text-gray-900 text-xl font-medium mb-2'>{list.number}</h1>
//               <h2 className='text-gray-700 text-base mb-4'>{list.title}</h2>
//               <p className='text-gray-600 text-xs'>{list.excerpt}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export default ArticlePosts;
