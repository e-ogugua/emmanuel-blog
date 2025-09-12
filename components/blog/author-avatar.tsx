'use client';

import Image from 'next/image';
import { useState } from 'react';

export function AuthorAvatar() {
  const [imgSrc, setImgSrc] = useState('/CEO.png');

  return (
    <div className="w-16 h-16 bg-primary rounded-full overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ring-2 ring-primary/20">
      <Image
        src={imgSrc}
        alt="Emmanuel"
        width={64}
        height={64}
        className="object-cover w-full h-full"
        onError={() => {
          setImgSrc('/blog-images/placeholder-user.jpg');
        }}
      />
    </div>
  );
}
