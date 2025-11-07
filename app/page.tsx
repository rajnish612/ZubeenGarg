import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-10" />
        
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--maroon)]/30 to-[var(--dark-maroon)]/30" />
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          {/* Portrait placeholder */}
          <div className="mb-8 float">
            <div className="w-72 h-72 mx-auto rounded-full bg-gradient-to-b from-[var(--gold)] to-[var(--maroon)] p-2 glow-gold">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-gray-600 to-gray-800 flex items-center justify-center text-6xl text-[var(--gold)]">
                ZG
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mb-6 fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">
              ZUBEEN GARG
            </h1>
            <h2 className="text-4xl md:text-6xl assamese-text text-[var(--gold)] font-medium">
              জুবিন গাৰ্গ
            </h2>
          </div>

          {/* Tribute Quote */}
          <div className="mb-12 fade-in-up">
            <blockquote className="text-xl md:text-2xl text-white/90 font-light italic max-w-3xl mx-auto leading-relaxed">
              "মোৰ গানে মানুহৰ হৃদয় স্পৰ্শ কৰক, সেয়াই মোৰ আশা"
            </blockquote>
            <p className="text-lg md:text-xl text-[var(--gold)] mt-4 font-medium">
              "May my songs touch people's hearts, that's my hope"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up">
            <Link 
              href="/songs"
              className="btn-primary text-lg px-8 py-4 no-underline inline-flex items-center space-x-3 pulse-glow"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Play Songs</span>
            </Link>
            
            <Link 
              href="/biography"
              className="btn-secondary text-lg px-8 py-4 no-underline"
            >
              জীৱনী পঢ়ক (Read Biography)
            </Link>
          </div>
        </div>

        {/* Floating music notes animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[var(--gold)]/20 text-2xl float"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 2)}s`
              }}
            >
              ♪
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-[var(--gold)] font-medium">Songs</div>
              <div className="text-white/70 text-sm assamese-text">গান</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-4xl font-bold text-gradient mb-2">25+</div>
              <div className="text-[var(--gold)] font-medium">Years</div>
              <div className="text-white/70 text-sm assamese-text">বছৰ</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-4xl font-bold text-gradient mb-2">5</div>
              <div className="text-[var(--gold)] font-medium">Languages</div>
              <div className="text-white/70 text-sm assamese-text">ভাষা</div>
            </div>
            <div className="text-center glass-effect rounded-xl p-6">
              <div className="text-4xl font-bold text-gradient mb-2">∞</div>
              <div className="text-[var(--gold)] font-medium">Love</div>
              <div className="text-white/70 text-sm assamese-text">মৰম</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-4">
            The Voice of Assam
          </h2>
          <p className="text-xl text-center text-[var(--gold)] mb-16 assamese-text">
            অসমৰ কণ্ঠস্বৰ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/songs" className="group">
              <div className="glass-effect rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Explore Songs</h3>
                <p className="text-[var(--gold)]/80">গানৰ ভঁৰাল</p>
              </div>
            </Link>

            <Link href="/biography" className="group">
              <div className="glass-effect rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                    <polyline points="14,2 14,8 20,8"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Life Story</h3>
                <p className="text-[var(--gold)]/80">জীৱন কাহিনী</p>
              </div>
            </Link>

            <Link href="/tribute" className="group">
              <div className="glass-effect rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Leave Tribute</h3>
                <p className="text-[var(--gold)]/80">শ্ৰদ্ধাঞ্জলি</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
