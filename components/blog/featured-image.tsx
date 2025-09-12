'use client';

import Image from 'next/image';
import { useState } from 'react';

interface FeaturedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FeaturedImage({ src, alt, className = '' }: FeaturedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="relative w-full h-96 md:h-[500px]">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={`object-cover rounded-lg ${className}`}
        sizes="(max-width: 768px) 100vw, 80vw"
        priority
        onError={() => {
          setImgSrc('/blog-images/placeholder.svg');
        }}
      />
    </div>
  );
}
