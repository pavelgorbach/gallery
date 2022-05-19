import React, { useState, useMemo, SyntheticEvent } from 'react'
import useGetImages from '../../hooks/useGetImages'
import Loader from '../Loader/Loader'
import GalleryItem from '../GalleryItem/GalleryItem'

import styles from './Gallery.module.css'

const Gallery = () => {
  const { loading, images } = useGetImages()
  const [filter, setFilter] = useState('')

  const filteredImages = useMemo(() => {
    if(!filter) {
      return images
    }
    return images.filter((image) => image.title.includes(filter)) 
  }, [filter, images])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setFilter(e.target.value)
  } 

  if(loading) {
    return <Loader />
  }

  return (
    <>
    <div>
      <span>SEARCH:</span>
      <input type="text" name="name" value={filter} onChange={handleChange} />
    </div>
      <div className={styles.container}>
        {filteredImages.map(({ id, thumbnailUrl, title }) => {
          return <GalleryItem key={id} {...{thumbnailUrl, title}}  />
        })}
      </div>
    </>
  )
}

export default Gallery 