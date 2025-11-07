'use client';

import Image from 'next/image';

interface Photo {
  id: number;
  title: string;
  titleAssamese: string;
  description: string;
  src: string;
}

const photosData: Photo[] = [
  {
    id: 1,
    title: "Zubeen Garg Portrait",
    titleAssamese: "জুবিন গাৰ্গৰ প্ৰতিকৃতি",
    description: "A beautiful portrait of the legendary singer",
    src: "/images/1.jpg"
  },
  {
    id: 2,
    title: "Musical Moment",
    titleAssamese: "সাংগীতিক মুহূৰ্ত",
    description: "Capturing the essence of music",
    src: "/images/2.jpg"
  },
  {
    id: 3,
    title: "Anniversary Celebration",
    titleAssamese: "বাৰ্ষিকী উদযাপন",
    description: "Celebrating special moments with loved ones",
    src: "/images/anniversary.jpg"
  },
  {
    id: 4,
    title: "With Arjun Kapoor",
    titleAssamese: "অৰ্জুন কাপুৰৰ সৈতে",
    description: "Meeting with Bollywood actor Arjun Kapoor",
    src: "/images/arjun-zubeen.jpg"
  },
  {
    id: 5,
    title: "Live Performance",
    titleAssamese: "জীৱন্ত পৰিৱেশনা",
    description: "Enthralling the audience with mesmerizing performance",
    src: "/images/concert-1.jpg"
  },
  {
    id: 6,
    title: "Concert Stage",
    titleAssamese: "কনচাৰ্ট মঞ্চ",
    description: "Another memorable concert performance",
    src: "/images/concert-2.jpg"
  },
  {
    id: 7,
    title: "Media Coverage",
    titleAssamese: "গণমাধ্যমৰ সংবাদ",
    description: "News coverage of recent events",
    src: "/images/death-news.jpg"
  },
  {
    id: 8,
    title: "Final Thoughts",
    titleAssamese: "চূড়ান্ত চিন্তা",
    description: "Reflection on life and music",
    src: "/images/final-thoughts.jpg"
  },
  {
    id: 9,
    title: "Press Coverage",
    titleAssamese: "সংবাদপত্ৰৰ সংবাদ",
    description: "Featured in news publications",
    src: "/images/news-photo.jpg"
  },
  {
    id: 10,
    title: "Professional Portrait 1",
    titleAssamese: "পেশাদাৰী প্ৰতিকৃতি ১",
    description: "Official professional photograph",
    src: "/images/OIP.jpg"
  },
  {
    id: 11,
    title: "Professional Portrait 2",
    titleAssamese: "পেশাদাৰী প্ৰতিকৃতি ২",
    description: "Another professional studio shot",
    src: "/images/OIP (1).jpg"
  },
  {
    id: 12,
    title: "Professional Portrait 3",
    titleAssamese: "পেশাদাৰী প্ৰতিকৃতি ৩",
    description: "Classic professional photograph",
    src: "/images/OIP (2).jpg"
  },
  {
    id: 13,
    title: "Professional Portrait 4",
    titleAssamese: "পেশাদাৰী প্ৰতিকৃতি ৪",
    description: "Elegant professional photograph",
    src: "/images/OIP (3).jpg"
  },
  {
    id: 14,
    title: "Wallpaper Style",
    titleAssamese: "ৱালপেপাৰ শৈলী",
    description: "Artistic wallpaper style photograph",
    src: "/images/wp7115054.jpg"
  },
  {
    id: 15,
    title: "Main Portrait",
    titleAssamese: "মূল প্ৰতিকৃতি",
    description: "Main official portrait photograph",
    src: "/images/zubeen-main.jpg"
  },
  {
    id: 16,
    title: "Portrait Study",
    titleAssamese: "প্ৰতিকৃতি অধ্যয়ন",
    description: "Detailed portrait study",
    src: "/images/zubeen-portrait.jpg"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-[var(--gold)] assamese-text mb-8">
            ফটো গেলেৰী
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A visual journey through the life and career of Zubeen Garg. From intimate studio sessions 
            to grand concert performances, these images capture the essence of a musical legend.
          </p>
        </div>

        {/* Photo Count */}
        <div className="text-center mb-8">
          <div className="glass-effect rounded-lg p-4 inline-block">
            <span className="text-[var(--gold)]">{photosData.length}</span>
            <span className="text-white ml-2">
              {photosData.length === 1 ? 'photo' : 'photos'}
            </span>
            <span className="text-gray-400 ml-2 assamese-text">ফটো</span>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {photosData.map((photo) => (
            <div
              key={photo.id}
              className="photo-card glass-effect rounded-xl overflow-hidden group"
            >
              {/* Real Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg width="24" height="24" fill="black" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">View Photo</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Photos Message */}
        {photosData.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 text-[var(--gold)]/50">📸</div>
            <h3 className="text-2xl font-bold text-white mb-2">No photos found</h3>
            <p className="text-gray-400 assamese-text">কোনো ফটো পোৱা নগল</p>
          </div>
        )}
      </div>
    </div>
  );
}