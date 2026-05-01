'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  id: number;
}

interface Props {
  images: GalleryImage[];
}

export default function ActivitiesGallery({ images }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (idx: number) => setLightbox(idx);
  const close = () => setLightbox(null);

  const prev = useCallback(() => {
    setLightbox((cur) => (cur === null ? null : (cur - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox((cur) => (cur === null ? null : (cur + 1) % images.length));
  }, [images.length]);

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') close();
    },
    [prev, next]
  );

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
        {images.map((img, idx) => (
          <div
            key={img.id}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => open(idx)}
          >
            <Image
              src={img.src}
              alt={`CNRI Activity ${img.id}`}
              width={400}
              height={400}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/40 transition-all duration-300 flex items-center justify-center">
              <ZoomIn
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                size={32}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
          >
            <X size={28} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {lightbox + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={`CNRI Activity ${images[lightbox].id}`}
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] w-full rounded-lg"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 hover:bg-black/70"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
