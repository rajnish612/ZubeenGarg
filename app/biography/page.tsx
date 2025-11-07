interface TimelineEvent {
  year: number;
  title: string;
  titleAssamese: string;
  description: string;
  descriptionAssamese: string;
  category: 'birth' | 'education' | 'career' | 'award' | 'milestone';
  image?: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: 1972,
    title: "Birth",
    titleAssamese: "জোৰহাটত জন্ম",
    description: "Born in Tura, Meghalaya, but raised in Assam (including Jorhat). His birth name was originally Zubeen Borthakur, later adopting the stage surname Garg.",
    descriptionAssamese: "অসমৰ যোৰহাট জিলাত জুবিন গাৰ্গৰ জন্ম নহয়; তেওঁৰ জন্ম হৈছিল মেঘালয়ৰ টুৰাত। প্ৰকৃত নাম আছিল জুবিন বৰঠাকুৰ, পাছত গাৰ্গ বুলিবলৈ আত্মীয় নামেৰে পৰিগণিত হয়।",
    category: 'birth'
  },
  {
    year: 1992,
    title: "Career",
    titleAssamese: "সংগীত যাত্ৰা আৰম্ভ",
    description: "Began career as playback singer and composer with local bands and cultural programs. Released debut Assamese album \"Anamika.\"",
    descriptionAssamese: "নেপথ্য গায়ক আৰু সুৰকাৰ হিচাপে কৰ্মজীৱন আৰম্ভ কৰিলে। প্ৰথম অসমীয়া এলবাম 'অনামিকা' মুক্তি পালে।",
    category: 'career'
  },
  {
    year: 2003,
    title: "Milestone",
    titleAssamese: "ইয়া আলী - সফলতাৰ শিখৰ",
    description: "Released 'Ya Ali' which became an all-India hit, establishing him as a pan-Indian artist.",
    descriptionAssamese: "'ইয়া আলী' গীতটো মুক্তি পায় যিটো ভাৰতজুৰি জনপ্ৰিয় হয়। এই গীতে তেওঁক সৰ্বভাৰতীয় শিল্পী হিচাপে প্ৰতিষ্ঠা কৰে।",
    category: 'milestone'
  },
  {
    year: 2005,
    title: "Career",
    titleAssamese: "অভিনেতা হিচাপে প্ৰথম ছবি",
    description: "Made acting debut in Assamese cinema alongside singing and composing career.",
    descriptionAssamese: "অসমীয়া চলচ্চিত্ৰত অভিনয় আৰম্ভ কৰিলে। গায়ন আৰু সুরকাৰৰ লগতে চলচ্চিত্ৰত অভিনয় কৰিবলৈ আগবাঢ়িল।",
    category: 'career'
  },
  {
    year: 2008,
    title: "Milestone",
    titleAssamese: "বলিউডৰ স্বীকৃতি",
    description: "Began Bollywood playback singing, gaining recognition with his unique voice.",
    descriptionAssamese: "বলিউডৰ চলচ্চিত্ৰত গান গাবলৈ আৰম্ভ কৰিলে। তেওঁৰ অনন্য কণ্ঠস্বৰে কঠিয়া আকৰ্ষণ কৰিলে।",
    category: 'milestone'
  },
  {
    year: 2010,
    title: "Milestone",
    titleAssamese: "বহুভাষিক এলবাম",
    description: "Released albums in Assamese, Hindi, Bengali, and other regional languages.",
    descriptionAssamese: "অসমীয়া, হিন্দী, বাংলা আৰু অন্যান্য আঞ্চলিক ভাষাত এলবাম মুক্তি দিলে।",
    category: 'milestone'
  },
  {
    year: 2012,
    title: "Award",
    titleAssamese: "সাংস্কৃতিক দূত",
    description: "Recognized as cultural ambassador for Assamese music and culture nationally and internationally.",
    descriptionAssamese: "অসমীয়া সংগীত আৰু সংস্কৃতিৰ সাংস্কৃতিক দূতাৰূপে স্বীকৃতি পাইছিল।",
    category: 'award'
  },
  {
    year: 2015,
    title: "Milestone",
    titleAssamese: "পৰম্পৰাগত সংগীত পুনৰুজ্জীৱন",
    description: "Led efforts to revive traditional Assamese folk and Bihu music.",
    descriptionAssamese: "অসমীয়া পৰম্পৰাগত লোক সংগীত আৰু বিহুগীত পুনৰুজ্জীৱন আৰু প্ৰচাৰত নেতৃত্ব দিছিল।",
    category: 'milestone'
  },
  {
    year: 2017,
    title: "Milestone",
    titleAssamese: "মিশ্যন চাইনা সফলতা",
    description: "Starred in the Assamese movie 'Mission China,' a box office success.",
    descriptionAssamese: "'মিশ্যন চাইনা' ছবিত মুখ্য চৰিত্ৰত অভিনয় কৰি সফলতা লাভ কৰিছিল।",
    category: 'milestone'
  },
  {
    year: 2020,
    title: "Milestone",
    titleAssamese: "ডিজিটেল সংগীত বিপ্লৱ",
    description: "Embraced digital platforms for music, expanding reach globally.",
    descriptionAssamese: "ডিজিটেল সংগীত প্লেটফৰ্ম গ্ৰহণ কৰি বিশ্বব্যাপী যুৱ প্ৰজন্মলৈ গান পঠিয়ালে।",
    category: 'milestone'
  },
  {
    year: 2023,
    title: "Award",
    titleAssamese: "সংগীত ঐতিহ্য",
    description: "Continued as a leading influential voice in Indian music, inspiring new generations.",
    descriptionAssamese: "ভাৰতীয় সংগীতৰ এটা প্ৰভাৱশালী কণ্ঠস্বৰ হিচাপে ৰৈ আছেহে, নতুন প্ৰজন্মক অনুপ্ৰাণিত কৰি।",
    category: 'award'
  }
];

const categoryIcons = {
  birth: '🌟',
  education: '🎓',
  career: '🎤',
  award: '🏆',
  milestone: '🎯'
};

const categoryColors = {
  birth: 'from-pink-500 to-rose-500',
  education: 'from-blue-500 to-indigo-500',
  career: 'from-green-500 to-emerald-500',
  award: 'from-yellow-500 to-orange-500',
  milestone: 'from-purple-500 to-violet-500'
};

export default function BiographyPage() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Life Journey
          </h1>
          <p className="text-xl text-[var(--gold)] assamese-text mb-8">
            জীৱন যাত্ৰা
          </p>
          
          {/* Hero Image Placeholder */}
          <div className="w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-b from-[var(--gold)] to-[var(--maroon)] p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-600 to-gray-800 flex items-center justify-center text-6xl text-[var(--gold)]">
              ZG
            </div>
          </div>
          
          <blockquote className="text-lg text-white/90 italic max-w-3xl mx-auto">
            "Music is the language of the soul, and through my songs, I want to speak to every heart"
          </blockquote>
          <p className="text-[var(--gold)] mt-2 assamese-text">
            "সংগীত হৈছে আত্মাৰ ভাষা, মোৰ গানেৰে মই প্ৰতিটো হৃদয়ৰ লগত কথা পাতিব খোজো"
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">33</div>
            <div className="text-[var(--gold)] text-sm">Years in Music</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">40,000+</div>
            <div className="text-[var(--gold)] text-sm">Songs Recorded</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">40+</div>
            <div className="text-[var(--gold)] text-sm">Languages Sung</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">∞</div>
            <div className="text-[var(--gold)] text-sm">Musical Legacy</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gold)] via-[var(--maroon)] to-[var(--dark-maroon)]"></div>
          
          {timelineData.map((event, index) => (
            <div key={event.year} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-[var(--gold)] border-4 border-[var(--maroon)] z-10">
                <div className="absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-75"></div>
              </div>
              
              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
                  {/* Year and Category */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${categoryColors[event.category]} flex items-center justify-center text-2xl`}>
                      {categoryIcons[event.category]}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--gold)]">{event.year}</div>
                      <div className="text-sm text-gray-400 capitalize">{event.category}</div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <h4 className="text-lg text-[var(--gold)] assamese-text mb-3">{event.titleAssamese}</h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-3 leading-relaxed">{event.description}</p>
                  <p className="text-[var(--gold)]/80 assamese-text text-sm leading-relaxed">{event.descriptionAssamese}</p>
                  
                  {/* Image placeholder */}
                  {event.image && (
                    <div className="mt-4 w-full h-32 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-[var(--gold)]">
                      📸 Photo from {event.year}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-gradient mb-12 text-center">Major Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-white mb-2">Musical Innovation</h3>
              <p className="text-gray-300 text-sm">Pioneered fusion of traditional Assamese music with modern sounds</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Cultural Bridge</h3>
              <p className="text-gray-300 text-sm">Connected Assamese culture with mainstream Indian entertainment</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-2">Youth Inspiration</h3>
              <p className="text-gray-300 text-sm">Inspired countless young artists to pursue music and preserve culture</p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="mt-20 text-center">
          <div className="glass-effect rounded-xl p-12 max-w-4xl mx-auto">
            <div className="text-6xl text-[var(--gold)] mb-6">♪</div>
            <blockquote className="text-2xl text-white font-light italic mb-6">
              "My music is my message to the world about the beauty of Assam and its people"
            </blockquote>
            <p className="text-xl text-[var(--gold)] assamese-text">
              "মোৰ সংগীত অসম আৰু ইয়াৰ জনগণৰ সৌন্দৰ্যৰ বিষয়ে বিশ্বৰ ওচৰত মোৰ বাৰ্তা"
            </p>
            <div className="text-[var(--gold)]/60 mt-4">- Zubeen Garg</div>
          </div>
        </section>
      </div>
    </div>
  );
}