'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type ClientImageProps = Omit<ImageProps, 'onError'> & {
  fallbackSrc?: string;
};

export function ClientImage({ 
  src, 
  alt, 
  fallbackSrc = '/blog-images/placeholder.svg',
  className = '',
  ...props 
}: ClientImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src as string);
  const [isError, setIsError] = useState<boolean>(false);
  
  const handleError = () => {
    if (!isError) {
      setIsError(true);
      setImgSrc(fallbackSrc);
    }
  };

  // Handle both fill and fixed dimensions
  const imageProps = {
    ...props,
    alt,
    src: imgSrc,
    className: `${className} ${isError ? 'object-contain' : ''}`,
    onError: handleError,
  };
  
  // If using fill, we don't need width/height
  if (props.fill) {
    const { width, height, ...rest } = imageProps;
    return <Image {...rest} fill />;
  }
  
  return <Image {...imageProps} />;
}
