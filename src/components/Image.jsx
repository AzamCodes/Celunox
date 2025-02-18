import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image = ({src, className, w, h, alt}) => {
  // Add check for src
  if (!src) return null;
  
  // Ensure path is a string
  const imagePath = typeof src === 'string' ? src : '';
  
  return (
    <IKImage 
      loading='lazy'
      lqip={{active:true, quality:20}}
      transformation={[{ width: w, height: h }]} // Pass as array
      className={className}
      urlEndpoint={import.meta.env.VITE_IK_PUBLIC_URL_ENDPOINT}
      path={imagePath}
      alt={alt || ''}
    />
  )
}

export default Image