import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ContactBar from '../components/ContactBar';

export default function CourseVideo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState<string>('');

  useEffect(() => {
    // Get the video URL from the query parameters
    const params = new URLSearchParams(location.search);
    const url = params.get('url');
    
    if (url) {
      setVideoUrl(decodeURIComponent(url));
    } else {
      // If no URL is provided, redirect back to courses
      navigate('/courses');
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button 
            onClick={() => navigate('/courses')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">Back to Courses</span>
          </button>
          
          {/* Video container */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              {videoUrl && (
                <iframe
                  src={videoUrl}
                  title="Course Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-lg"
                ></iframe>
              )}
            </div>
          </div>
          
          {/* Course information */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Course Content</h1>
            <p className="text-sm sm:text-base text-gray-600">
              This video contains the course content. You can watch it at your own pace and return to it whenever you need to.
            </p>
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  );
} 