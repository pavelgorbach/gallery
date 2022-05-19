import React from 'react'
import useGetImages from '../../hooks/useGetImages'
import Loader from '../Loader/Loader'
import GalleryItem from '../GalleryItem/GalleryItem'

import styles from './Gallery.module.css'

const Gallery = () => {
  const { loading, images } = useGetImages()

  if(loading) {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      {images.map(({ id, thumbnailUrl, title }) => {
        return <GalleryItem key={id} {...{thumbnailUrl, title}}  />
      })}
    </div>
  )
}

export default Gallery 