import { useEffect, useState } from 'react'
import { getImages } from '../api/images'
import { IImage } from '../types'

const useGetImages = () => {
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<IImage[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getImages()
        setImages(images)
        setLoading(true)
      } catch (e) {
        setLoading(false)
        console.error(e)
      } finally {
        setLoading(false)
      }
    } 

    fetchImages()
  }, [])

  return {
    loading,
    images
  }
}

export default useGetImages