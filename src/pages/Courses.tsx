import { useState } from 'react';
import { Course } from '../types';
import { Search, Filter, Eye } from 'lucide-react';
import ContactBar from '../components/ContactBar';
import { useNavigate } from 'react-router-dom';

const courses: Course[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern, responsive websites. Perfect for beginners starting their web development journey.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: '2',
    title: 'Python Programming Mastery',
    description: 'Master Python programming from the ground up. Explore algorithms, data structures, and key tips for writing clean and effective code for better problem solving.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    category: 'Programming',
    videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
    duration: '8 weeks',
    level: 'Intermediate'
  },
  {
    id: '3',
    title: 'React.js Advanced Concepts Mastery',
    description: 'Deep dive into React.js advanced features including hooks, context, performance optimization, and state management techniques for scalability.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    videoUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8',
    duration: '10 weeks',
    level: 'Advanced'
  },
  {
    id: '4',
    title: 'Core Of Data Science Essentials',
    description: 'Introduction to data science using Python. Learn pandas, numpy, and matplotlib for data analysis and visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    category: 'Data Science',
    videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30',
    duration: '12 weeks',
    level: 'Intermediate'
  },
  {
    id: '5',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native. Create beautiful, native apps for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
    category: 'Mobile Development',
    videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc',
    duration: '8 weeks',
    level: 'Intermediate'
  },
  {
    id: '6',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning algorithms and techniques. Learn supervised and unsupervised learning with practical examples.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=1000',
    category: 'Data Science',
    videoUrl: 'https://www.youtube.com/embed/JcI5Vnw0b2c',
    duration: '14 weeks',
    level: 'Advanced'
  },
  {
    id: '7',
    title: 'UI/UX Design Principles',
    description: 'Learn the fundamentals of user interface and user experience design. Master design thinking and prototyping.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    category: 'Design',
    videoUrl: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: '8',
    title: 'Node.js Development',
    description: 'Build scalable backend applications with Node.js. Learn Express.js, MongoDB, and RESTful API design.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    videoUrl: 'https://www.youtube.com/embed/Oe421EPjeBE',
    duration: '10 weeks',
    level: 'Intermediate'
  },
  {
    id: '9',
    title: 'Cloud Computing with AWS',
    description: 'Master Amazon Web Services (AWS) cloud platform. Learn to deploy and scale applications in the cloud.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    category: 'Cloud Computing',
    videoUrl: 'https://www.youtube.com/embed/k1RI5locZE4',
    duration: '12 weeks',
    level: 'Advanced'
  },
  {
    id: '10',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn the basics of cybersecurity, including network security, cryptography, and ethical hacking principles.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    category: 'Security',
    videoUrl: 'https://www.youtube.com/embed/qiQR5rTSshw',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    id: '11',
    title: 'Advanced Machine Learning',
    description: 'Deep dive into neural networks, deep learning, and advanced ML algorithms. Learn to build and deploy ML models in production.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    category: 'Data Science',
    videoUrl: 'https://www.youtube.com/embed/GwIo3gDZCVQ',
    duration: '16 weeks',
    level: 'Advanced'
  },
  {
    id: '12',
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development. Build complete web applications using modern frameworks and best practices.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    videoUrl: 'https://www.youtube.com/embed/nu_pCVPKzTk',
    duration: '14 weeks',
    level: 'Advanced'
  }
];

const categories = [
  'Web Development',
  'Programming',
  'Data Science',
  'Mobile Development',
  'Design',
  'Cloud Computing',
  'Security'
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || course.category === selectedCategory)
  );

  const handleViewCourse = (courseId: string) => {
    // Navigate to the course details page
    navigate(`/course-details/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Available Courses</h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">Explore our wide range of courses and start learning today</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8 space-y-3 sm:space-y-0">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-7 sm:pl-9 pr-3 sm:pr-4 py-1.5 sm:py-2 text-xs sm:text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Filter className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
              <select
                className="border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200">
                <img src={course.image} alt={course.title} className="w-full h-36 sm:h-40 md:h-48 object-cover" />
                <div className="p-3 sm:p-4 md:p-6">
                  <div className="flex justify-between items-start mb-2 sm:mb-3 md:mb-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 line-clamp-2">{course.title}</h3>
                    <span className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full ml-2">
                      {course.level}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">{course.description}</p>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 mb-3 sm:mb-4">
                    <button 
                      onClick={() => handleViewCourse(course.id)}
                      className="flex-1 flex items-center justify-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      <span className="text-xs sm:text-sm font-medium">View Course</span>
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2 sm:mt-3 md:mt-4">
                    <span className="text-[10px] sm:text-xs md:text-sm text-gray-500">{course.duration}</span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-indigo-600">{course.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  );
}