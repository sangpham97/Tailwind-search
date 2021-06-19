import React, { useState, useEffect } from 'react'
import './styles/output.css'
import ImageCard from './ImageCard'
import ImageSearch from './ImageSearch'
function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_BIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [term])
  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className='text-5xl text-center mx-auto mt-32'>No such Image</h1>
      )}
      {isLoading ? (
        <div className='text-6xl text-center mx-auto mt-32'>Loading...</div>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {images.map((image, index) => {
            return <ImageCard key={index} image={image} setTerm={setTerm} />
          })}
        </div>
      )}
    </div>
  )
}

export default App
