'use client';

import { useState, useEffect } from 'react';

interface Song {
  id: string;
  title: string;
  titleAssamese?: string;
  album?: string;
  year?: number;
  language?: 'Assamese' | 'Hindi' | 'Bengali' | 'Bihu' | 'Movie';
  duration?: string;
  youtubeId: string;
  thumbnail: string;
  description?: string;
  channelTitle: string;
  publishedAt: string;
}

interface YouTubeSearchResponse {
  items: {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
      channelTitle: string;
      publishedAt: string;
    };
  }[];
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

// YouTube API configuration
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

if (!API_KEY) {
  throw new Error('Missing YouTube API key. Please set NEXT_PUBLIC_API_KEY in your .env file.');
}
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// Function to fetch songs from YouTube API with pagination
const fetchZubeenGargSongs = async (
  searchTerm: string = '', 
  maxResults: number = 20,
  pageToken?: string
): Promise<{ songs: Song[]; nextPageToken?: string; totalResults?: number }> => {
  try {
    const query = searchTerm ? `Zubeen Garg ${searchTerm}` : 'Zubeen Garg';
    let url = `${BASE_URL}?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${API_KEY}`;
    
    if (pageToken) {
      url += `&pageToken=${pageToken}`;
    }
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data from YouTube API');
    }
    
    const data: YouTubeSearchResponse = await response.json();
    
    const songs = data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      titleAssamese: getAssameseTitle(item.snippet.title),
      youtubeId: item.id.videoId,
      thumbnail: item.snippet.thumbnails.high.url,
      description: item.snippet.description,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      year: new Date(item.snippet.publishedAt).getFullYear(),
      language: detectLanguage(item.snippet.title, item.snippet.description)
    }));

    return {
      songs,
      nextPageToken: data.nextPageToken,
      totalResults: data.pageInfo.totalResults
    };
  } catch (error) {
    console.error('Error fetching songs:', error);
    return { songs: [] };
  }
};

// Helper function to detect language based on title and description
const detectLanguage = (title: string, description: string = ''): 'Assamese' | 'Hindi' | 'Bengali' | 'Bihu' | 'Movie' => {
  const lowerTitle = title.toLowerCase();
  const lowerDesc = description.toLowerCase();
  const combined = `${lowerTitle} ${lowerDesc}`;
  
  // Bihu songs
  if (combined.includes('bihu') || combined.includes('বিহু') || combined.includes('বহাগ') || 
      combined.includes('rongali') || combined.includes('bohag') || combined.includes('husori')) {
    return 'Bihu';
  }
  
  // Movie songs
  if (combined.includes('movie') || combined.includes('film') || combined.includes('cinema') ||
      combined.includes('kokaideu') || combined.includes('mission china') || combined.includes('priyar priyo') ||
      combined.includes('hiya diya niya') || combined.includes('local kung fu') || combined.includes('ramdhenu')) {
    return 'Movie';
  }
  
  // Hindi songs
  if (combined.includes('hindi') || combined.includes('bollywood') || combined.includes('husn hai suhana') ||
      combined.includes('coolie no 1') || combined.includes('हिंदी') || combined.includes('बॉलीवुड')) {
    return 'Hindi';
  }
  
  // Bengali songs
  if (combined.includes('bengali') || combined.includes('bangla') || combined.includes('বাংলা') ||
      combined.includes('kolkata') || combined.includes('pokhi') || combined.includes('bengali album')) {
    return 'Bengali';
  }
  
  // Default to Assamese for Zubeen Garg (since most of his songs are Assamese)
  return 'Assamese';
};

// Helper function to generate Assamese title (simplified)
const getAssameseTitle = (englishTitle: string): string => {
  const commonTranslations: { [key: string]: string } = {
    'ya ali': 'ইয়া আলী',
    'mayabini': 'মায়াবিনী',
    'gupute gupute': 'গুপুতে গুপুতে',
    'ronga nodi': 'ৰঙা নদী',
    'bihu': 'বিহু',
    'husori': 'হুচৰি',
    'rongali': 'ৰঙালী',
    'song': 'গান',
    'music': 'সংগীত'
  };
  
  let assameseTitle = englishTitle.toLowerCase();
  Object.entries(commonTranslations).forEach(([eng, assamese]) => {
    assameseTitle = assameseTitle.replace(new RegExp(eng, 'gi'), assamese);
  });
  
  return assameseTitle !== englishTitle.toLowerCase() ? assameseTitle : ''; // Return empty if no translation found
};

const SongCard = ({ song, onPlay }: { song: Song; onPlay: (song: Song) => void }) => {
  const thumbnailUrl = song.thumbnail;
  
  return (
    <div className="song-card glass-effect rounded-xl p-4 group cursor-pointer" onClick={() => onPlay(song)}>
      <div className="relative mb-4">
        {/* YouTube Thumbnail */}
        <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-800">
          <img 
            src={thumbnailUrl}
            alt={song.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          {/* Fallback gradient background */}
          <div 
            className="w-full h-full bg-gradient-to-br from-red-900 to-gray-900 flex items-center justify-center text-4xl text-white font-bold"
            style={{ display: 'none' }}
          >
            {song.title.charAt(0)}
          </div>
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>

        {/* Language Badge */}
        {song.language && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {song.language}
          </div>
        )}

        {/* Channel Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
          {song.channelTitle}
        </div>
      </div>
      
      <div>
        <h3 className="text-white font-semibold mb-1 truncate" title={song.title}>
          {song.title.length > 50 ? `${song.title.substring(0, 47)}...` : song.title}
        </h3>
        {song.titleAssamese && (
          <p className="text-yellow-400 text-sm mb-2 assamese-text truncate">{song.titleAssamese}</p>
        )}
        <div className="flex justify-between items-center text-gray-400 text-sm">
          <span className="truncate">{song.year || 'N/A'}</span>
          <span className="text-xs">{new Date(song.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default function SongsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [totalResults, setTotalResults] = useState<number>(0);
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>('');
  const [loadingMore, setLoadingMore] = useState(false);

  // Load songs on component mount
  useEffect(() => {
    loadSongs();
  }, []);

  const loadSongs = async (searchTerm?: string, pageToken?: string, append: boolean = false) => {
    if (!append) {
      setLoading(true);
      setSongs([]);
    } else {
      setLoadingMore(true);
    }
    
    try {
      const result = await fetchZubeenGargSongs(searchTerm || '', 20, pageToken);
      
      if (append) {
        setSongs(prev => [...prev, ...result.songs]);
      } else {
        setSongs(result.songs);
        setCurrentSearchTerm(searchTerm || '');
      }
      
      setNextPageToken(result.nextPageToken);
      setTotalResults(result.totalResults || 0);
    } catch (error) {
      console.error('Error loading songs:', error);
      setSongs([]);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleSearch = async () => {
    await loadSongs(searchQuery.trim());
  };

  const handleLoadMore = () => {
    if (nextPageToken && !loadingMore) {
      loadSongs(currentSearchTerm, nextPageToken, true);
    }
  };

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredSongs = songs;

  const handlePlaySong = (song: Song) => {
    setCurrentSong(song);
    setIsPlayerOpen(true);
  };

  const closePlayer = () => {
    setIsPlayerOpen(false);
    setCurrentSong(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Songs Collection
          </h1>
          <p className="text-xl text-[var(--gold)] assamese-text">
            গানৰ ভঁৰাল
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search any Zubeen Garg songs... | যিকোনো গান বিচাৰক..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                className="w-full bg-black/50 border border-[var(--gold)]/30 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--gold)] transition-colors"
              />
              <svg 
                width="20" 
                height="20" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Searching
                </>
              ) : (
                <>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                  Search
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Search Suggestions */}
        <div className="mb-8">
          <p className="text-gray-400 text-sm mb-3">Quick search suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Ya Ali', 
              'Mayabini', 
              'Bihu songs', 
              'Hindi songs', 
              'Movie songs', 
              'Assamese songs',
              'kokaideu bindaas',
              'mission china',
              'latest songs',
              'love songs'
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setSearchQuery(suggestion);
                  loadSongs(suggestion);
                }}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs rounded-full transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <div className="glass-effect rounded-lg p-4 inline-block">
            <span className="text-[var(--gold)]">{filteredSongs.length}</span>
            <span className="text-white ml-2">songs loaded</span>
            <span className="text-gray-400 ml-2 assamese-text">গান লোড হৈছে</span>
            {totalResults > 0 && (
              <span className="text-gray-400 ml-2">
                • {totalResults} total available
              </span>
            )}
          </div>
        </div>

        {/* Songs Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="glass-effect rounded-xl p-4 animate-pulse">
                <div className="w-full aspect-square bg-gray-700 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-3 bg-gray-600 rounded mb-2"></div>
                <div className="h-3 bg-gray-600 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredSongs.map((song) => (
              <SongCard key={song.id} song={song} onPlay={handlePlaySong} />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredSongs.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4 text-[var(--gold)]/50">🎵</div>
            <h3 className="text-2xl font-bold text-white mb-2">No songs found</h3>
            <p className="text-gray-400 assamese-text mb-4">কোনো গান পোৱা নগ&apos;ল</p>
            <p className="text-gray-400 mb-4">Try searching for specific song names, albums, or themes</p>
            <button
              onClick={() => {
                setSearchQuery('');
                loadSongs('');
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Load Default Songs
            </button>
          </div>
        )}

        {/* YouTube Player Modal */}
        {isPlayerOpen && currentSong && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-white">{currentSong.title}</h3>
                  <p className="text-yellow-400 assamese-text">{currentSong.titleAssamese}</p>
                </div>
                <button
                  onClick={closePlayer}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
              
              {/* YouTube Player */}
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentSong.youtubeId}?autoplay=1`}
                  title={currentSong.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Song Info */}
              <div className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Album:</span>
                    <p className="text-white">{currentSong.album}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Year:</span>
                    <p className="text-white">{currentSong.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Language:</span>
                    <p className="text-white">{currentSong.language}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <p className="text-white">{currentSong.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {nextPageToken && !loading && (
          <div className="text-center mt-12 mb-20">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="bg-[var(--gold)] hover:bg-yellow-500 disabled:opacity-50 text-black px-8 py-4 rounded-lg transition-colors flex items-center gap-3 font-semibold mx-auto text-lg"
            >
              {loadingMore ? (
                <>
                  <div className="w-5 h-5 border-3 border-black border-t-transparent rounded-full animate-spin"></div>
                  Loading More Songs...
                </>
              ) : (
                <>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  Load More Songs
                  <span className="text-sm bg-black/20 px-2 py-1 rounded-full">
                    +20 more
                  </span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Popular Playlists Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gradient mb-8">Popular Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Best of Zubeen</h3>
              <p className="text-[var(--gold)] text-sm">Top hits across all languages</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏮</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Bihu Special</h3>
              <p className="text-[var(--gold)] text-sm">Traditional Bihu songs</p>
            </div>
            
            <div className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-r from-[var(--gold)] to-[var(--maroon)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Movie Soundtracks</h3>
              <p className="text-[var(--gold)] text-sm">Songs from films</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}