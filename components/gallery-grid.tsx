'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, alt: 'Students singing in harmony', src: '/choir-students-singing.jpg' },
  { id: 2, alt: 'Music lesson in progress', src: '/piano-lesson.jpg' },
  { id: 3, alt: 'English class activity', src: '/classroom-discussion.jpg' },
  { id: 4, alt: 'Community service event', src: '/volunteer-event.jpg' },
  { id: 5, alt: 'Student concert performance', src: '/concert-stage.jpg' },
  { id: 6, alt: 'Prayer and worship meeting', src: '/worship-gathering.jpg' },
  { id: 7, alt: 'Young musicians practicing', src: '/orchestra-practice.jpg' },
  { id: 8, alt: 'Academy campus building', src: '/academy-building.jpg' },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
              <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up">
          <div className="relative max-w-2xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 -top-10 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
