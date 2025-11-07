'use client';

import { useState, useEffect } from 'react';

interface TributeMessage {
  _id: string;
  name: string;
  location: string;
  message: string;
  messageAssamese?: string;
  createdAt: string;
}

interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
}

export default function TributePage() {
  const [tributes, setTributes] = useState<TributeMessage[]>([]);
  const [newTribute, setNewTribute] = useState({
    name: '',
    location: '',
    message: '',
    messageAssamese: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalTributes, setTotalTributes] = useState(0);

  // Fetch tributes
  const fetchTributes = async (pageNum: number = 1, reset: boolean = false) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/tributes?page=${pageNum}&limit=10`);
      const result = await response.json();
      
      if (result.success) {
        const newTributes = result.data.tributes;
        setTributes(prev => reset ? newTributes : [...prev, ...newTributes]);
        setHasMore(result.data.pagination.hasMore);
        setTotalTributes(result.data.pagination.total);
        setPage(pageNum);
      }
    } catch (error) {
      console.error('Error fetching tributes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load tributes on component mount
  useEffect(() => {
    fetchTributes(1, true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newTribute.name && newTribute.message && newTribute.location) {
      try {
        setSubmitLoading(true);
        const response = await fetch('/api/tributes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTribute),
        });

        const result = await response.json();
        
        if (result.success) {
          // Reset form and refresh tributes
          setNewTribute({ name: '', location: '', message: '', messageAssamese: '' });
          setShowForm(false);
          // Refresh the tributes list to show the new tribute at the top
          await fetchTributes(1, true);
          setPage(1);
        } else {
          alert(result.error || 'Failed to submit tribute');
        }
      } catch (error) {
        console.error('Error submitting tribute:', error);
        alert('Failed to submit tribute');
      } finally {
        setSubmitLoading(false);
      }
    }
  };

  // Format timestamp for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Tribute Wall
          </h1>
          <p className="text-xl text-[var(--gold)] assamese-text mb-6">
            শ্ৰদ্ধাঞ্জলি দেৱাল
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Share your thoughts, memories, and appreciation for Zubeen Garg. 
            Let your words be part of this eternal tribute to the musical legend.
          </p>

          {/* Add Tribute Button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary inline-flex items-center space-x-2 pulse-glow"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
            <span>Add Your Tribute</span>
          </button>
        </div>

        {/* Tribute Form */}
        {showForm && (
          <div className="glass-effect rounded-xl p-8 mb-12 fade-in-up">
            <h2 className="text-2xl font-bold text-white mb-6">Share Your Tribute</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--gold)] font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTribute.name}
                    onChange={(e) => setNewTribute({...newTribute, name: e.target.value})}
                    className="w-full bg-black/50 border border-[var(--gold)]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[var(--gold)] font-medium mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={newTribute.location}
                    onChange={(e) => setNewTribute({...newTribute, location: e.target.value})}
                    className="w-full bg-black/50 border border-[var(--gold)]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors"
                    placeholder="Your city, state"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[var(--gold)] font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={newTribute.message}
                  onChange={(e) => setNewTribute({...newTribute, message: e.target.value})}
                  className="w-full bg-black/50 border border-[var(--gold)]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                  placeholder="Share your thoughts, memories, or appreciation for Zubeen Garg..."
                />
              </div>
              
              <div>
                <label className="block text-[var(--gold)] font-medium mb-2">
                  Message in Assamese (Optional)
                  <span className="text-sm text-gray-400 ml-2 assamese-text">অসমীয়া বাৰ্তা (ঐচ্ছিক)</span>
                </label>
                <textarea
                  rows={3}
                  value={newTribute.messageAssamese}
                  onChange={(e) => setNewTribute({...newTribute, messageAssamese: e.target.value})}
                  className="w-full bg-black/50 border border-[var(--gold)]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors resize-none assamese-text"
                  placeholder="অসমীয়াত আপোনাৰ বাৰ্তা লিখক..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitLoading}
                  className={`btn-primary flex-1 ${submitLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {submitLoading ? 'Submitting...' : 'Submit Tribute'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="btn-secondary flex-1"
                  disabled={submitLoading}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">{totalTributes}</div>
            <div className="text-[var(--gold)] font-medium">Total Tributes</div>
            <div className="text-white/70 text-sm assamese-text">মুঠ শ্ৰদ্ধাঞ্জলি</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-gradient mb-2">♾️</div>
            <div className="text-[var(--gold)] font-medium">Infinite Love</div>
            <div className="text-white/70 text-sm assamese-text">অসীম মৰম</div>
          </div>
        </div>

        {/* Tribute Messages */}
        <div className="space-y-6">
          {tributes.map((tribute) => (
            <div key={tribute._id} className="glass-effect rounded-xl p-6 fade-in-up">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center text-white font-bold">
                    {tribute.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{tribute.name}</h3>
                    <p className="text-[var(--gold)] text-sm">{tribute.location}</p>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{formatDate(tribute.createdAt)}</div>
              </div>

              {/* Message */}
              <div className="mb-4">
                <p className="text-gray-300 leading-relaxed mb-3">{tribute.message}</p>
                {tribute.messageAssamese && (
                  <p className="text-[var(--gold)]/80 leading-relaxed assamese-text italic">
                    {tribute.messageAssamese}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button 
              onClick={() => fetchTributes(page + 1)}
              disabled={loading}
              className={`btn-secondary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Loading...' : `Load More Tributes ${tributes.length > 0 ? `(+${Math.min(10, totalTributes - tributes.length)})` : ''}`}
            </button>
          </div>
        )}

        {/* Quote Section */}
        <section className="mt-20">
          <div className="glass-effect rounded-xl p-8 text-center">
            <div className="text-4xl text-[var(--gold)] mb-4">🎵</div>
            <blockquote className="text-lg text-white italic mb-4">
              &quot;The love and support from fans like you gives me the strength to continue creating music that touches hearts&quot;
            </blockquote>
            <p className="text-[var(--gold)] assamese-text">
              &quot;আপোনালোকৰ দৰে অনুৰাগীৰ মৰম আৰু সমৰ্থনে মোক হৃদয় স্পৰ্শী সংগীত সৃষ্টি কৰি থকাৰ শক্তি দিয়ে&quot;
            </p>
            <div className="text-[var(--gold)]/60 mt-2">- Zubeen Garg</div>
          </div>
        </section>
      </div>
    </div>
  );
}