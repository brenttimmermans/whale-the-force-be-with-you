'use client'

import fallbackImage from '@/public/images/star-wars-logo.jpeg'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { useEffect, useState } from 'react'

interface Props extends NextImageProps {
  clickable?: boolean
}

export default function Image(props: Props) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [props.src])

  return (
    <NextImage
      {...props}
      onError={() => setError(true)}
      src={error ? fallbackImage : props.src}
    />
  )
}
