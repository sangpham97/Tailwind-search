import React from 'react'

export default function ImageCard({ image }) {
  const tags = image.tags.split(',')

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src={image.webformatURL} alt='' />
      <div className='w-full'>
        <div className='font-bold text-purple-500 text-xl mb-2'>
          photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views:</strong>
            {image.views}
          </li>
          <li>
            <strong>Dowload:</strong>
            {image.dowloads}
          </li>
          <li>
            <strong>Dowload:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag) => {
          return (
            <span
              className='inline-block bg-gray-200 rounded-full px-5 py-2 mr-4 text-sm mt-6 '
              key={image.id}
            >
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}
