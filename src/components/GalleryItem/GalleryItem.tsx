import React, { memo } from 'react'
import { IImage } from '../../types'
import styles from './GalleryItem.module.css'

type IProps = Partial<IImage>

const GalleryItem = (props: IProps) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={props.thumbnailUrl} alt={props.thumbnailUrl} />
      </div>
      <div>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default memo(GalleryItem)
