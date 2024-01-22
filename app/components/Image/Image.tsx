'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { useEffect, useState } from 'react'
import fallbackImage from '../../../public/images/star-wars-logo.jpeg'

interface Props extends NextImageProps {
  clickable?: boolean
}

export default function Image(props: Props) {
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
  }, [props.src])

  return (
    <NextImage
      {...props}
      onError={setError}
      src={error ? fallbackImage : props.src}
    />
  )
}
