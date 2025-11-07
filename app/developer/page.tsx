'use client';

export default function DeveloperPage() {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            About Developer
          </h1>
          <p className="text-xl text-[var(--gold)] assamese-text mb-6">
            ডেভেলপাৰৰ বিষয়ে
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn about the passionate developer who created this tribute website
            to honor the musical legend Zubeen Garg.
          </p>
        </div>

        {/* Developer Profile */}
        <div className="glass-effect rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Image/Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                RN
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">Rajnish Nath</h2>
              <p className="text-[var(--gold)] text-lg mb-4">Full Stack Developer & Aspiring AI/ML Engineer</p>
              
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[var(--gold)]">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>BCA Undergraduate (Online Program)</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[var(--gold)]">
                    <path d="M5,13.18V11H19V13.18L12,20L5,13.18Z"/>
                  </svg>
                  <span>Manipal University Jaipur</span>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[var(--gold)]">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                  </svg>
                  <span>Rajasthan, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Passion for Development */}
          <div className="glass-effect rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Passion for Development</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              As a dedicated BCA student pursuing my degree through online program at Manipal University Jaipur, 
              I have a deep passion for creating meaningful web applications and aspiring to become an AI/ML engineer 
              specializing in deep learning and computer vision. This tribute website represents my love for both 
              technology and the rich musical heritage of Assam, developed while learning modern web development 
              techniques through distance education. My journey combines traditional software development with 
              emerging AI technologies, focusing on deep learning algorithms and computer vision applications to 
              create intelligent solutions that make a positive impact.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="glass-effect rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Technical Expertise</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Next.js & React</span>
                <span className="text-[var(--gold)]">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span>TypeScript</span>
                <span className="text-[var(--gold)]">Intermediate</span>
              </div>
              <div className="flex justify-between">
                <span>MongoDB & APIs</span>
                <span className="text-[var(--gold)]">Intermediate</span>
              </div>
              <div className="flex justify-between">
                <span>Python & Data Science</span>
                <span className="text-[var(--gold)]">Learning</span>
              </div>
              <div className="flex justify-between">
                <span>Deep Learning & AI</span>
                <span className="text-[var(--gold)]">Learning</span>
              </div>
              <div className="flex justify-between">
                <span>Computer Vision</span>
                <span className="text-[var(--gold)]">Learning</span>
              </div>
              <div className="flex justify-between">
                <span>UI/UX Design</span>
                <span className="text-[var(--gold)]">Intermediate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="glass-effect rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h3>
          <p className="text-gray-300 text-center mb-6">
            Feel free to reach out for collaborations, feedback, or just to connect!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-secondary flex items-center space-x-2">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Email</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.219-.438-.219-1.085c0-1.016.589-1.775 1.323-1.775.623 0 .924.466.924 1.025 0 .624-.399 1.560-.603 2.425-.171.717.359 1.301 1.066 1.301 1.279 0 2.263-1.348 2.263-3.296 0-1.725-1.240-2.929-3.011-2.929-2.052 0-3.257 1.537-3.257 3.127 0 .619.238 1.285.535 1.646.059.071.067.133.049.207-.053.225-.172.719-.195.819-.030.13-.098.158-.226.095-1.006-.467-1.635-1.930-1.635-3.103 0-2.273 1.650-4.361 4.755-4.361 2.494 0 4.430 1.778 4.430 4.151 0 2.477-1.563 4.468-3.732 4.468-.729 0-1.414-.379-1.649-.830l-.449 1.713c-.162.625-.602 1.408-.896 1.887.675.208 1.388.322 2.129.322 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001"/>
              </svg>
              <span>LinkedIn</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.040-.015-2.040-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.610-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>GitHub</span>
            </button>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-12">
          <div className="glass-effect rounded-xl p-8">
            <div className="text-4xl mb-4">🙏</div>
            <h3 className="text-2xl font-bold text-white mb-4">Thank You</h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Thank you for visiting this tribute website. It has been an honor to create this platform 
              dedicated to celebrating the musical genius of Zubeen Garg. May his music continue to 
              inspire generations to come.
            </p>
            <p className="text-[var(--gold)] assamese-text mt-4 italic">
              "ধন্যবাদ আৰু জুবিন দাৰ সংগীত চিৰজীৱী হওক"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}