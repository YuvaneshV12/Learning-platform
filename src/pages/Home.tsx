import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import { Course, Certificate, Project } from '../types';
import { Mail, Phone, MapPin } from 'lucide-react';

const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: '2',
    title: 'Python Programming',
    description: 'Master Python programming from scratch',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    category: 'Programming',
    videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
    duration: '8 weeks',
    level: 'Intermediate'
  },
  {
    id: '3',
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis and visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    category: 'Data Science',
    videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30',
    duration: '10 weeks',
    level: 'Intermediate'
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Build iOS and Android apps with React Native',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
    category: 'Mobile Development',
    videoUrl: 'https://www.youtube.com/embed/0k5L2U_2YlM',
    duration: '12 weeks',
    level: 'Advanced'
  },
  {
    id: '5',
    title: 'Cloud Computing',
    description: 'Master AWS and cloud infrastructure',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
    category: 'Cloud',
    videoUrl: 'https://www.youtube.com/embed/3hLmDS179AE',
    duration: '8 weeks',
    level: 'Intermediate'
  },
  {
    id: '6',
    title: 'UI/UX Design',
    description: 'Learn modern design principles and tools',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    category: 'Design',
    videoUrl: 'https://www.youtube.com/embed/c9Wg6CbOVlI',
    duration: '6 weeks',
    level: 'Beginner'
  },
  {
    id: '7',
    title: 'Machine Learning',
    description: 'Introduction to AI and machine learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    category: 'AI',
    videoUrl: 'https://www.youtube.com/embed/R9OHn5ZF4Uo',
    duration: '12 weeks',
    level: 'Advanced'
  },
  {
    id: '8',
    title: 'Blockchain Development',
    description: 'Learn to build decentralized applications with Ethereum and Solidity',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    category: 'Blockchain',
    videoUrl: 'https://www.youtube.com/embed/gyMwXuJrbpw',
    duration: '10 weeks',
    level: 'Advanced'
  },
  {
    id: '9',
    title: 'DevOps Engineering',
    description: 'Master CI/CD, containerization, and infrastructure as code',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000',
    category: 'DevOps',
    videoUrl: 'https://www.youtube.com/embed/7CqJlxBYj-M',
    duration: '12 weeks',
    level: 'Advanced'
  }
];

const popularCertificates: Certificate[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    description: 'Cloud architecture and design certification',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Cloud Computing',
    duration: '3 months',
    level: 'Advanced'
  },
  {
    id: '2',
    title: 'Google Data Analytics',
    description: 'Professional data analysis certification',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Data Science',
    duration: '6 months',
    level: 'Intermediate'
  },
  {
    id: '3',
    title: 'Meta Front-End Developer',
    description: 'Web development certification',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    duration: '7 months',
    level: 'Intermediate'
  },
  {
    id: '4',
    title: 'IBM Data Science',
    description: 'Professional data science certification',
    image: 'https://images.unsplash.com/photo-1663895064411-fff0ab8a9797?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Data Science',
    duration: '8 months',
    level: 'Advanced'
  },
  {
    id: '5',
    title: 'CISCO Networking',
    description: 'Network infrastructure certification',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
    category: 'Networking',
    duration: '6 months',
    level: 'Intermediate'
  },
  {
    id: '6',
    title: 'Microsoft Azure Developer',
    description: 'Cloud development certification',
    image: 'https://images.unsplash.com/photo-1613068687893-5e85b4638b56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Cloud Computing',
    duration: '4 months',
    level: 'Advanced'
  },
  {
    id: '7',
    title: 'SAP Business Intelligence',
    description: 'Business analytics certification',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    category: 'Business Analytics',
    duration: '5 months',
    level: 'Intermediate'
  },
  {
    id: '8',
    title: 'Oracle Database Administration',
    description: 'Professional database management certification',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Database',
    duration: '6 months',
    level: 'Advanced'
  },
  {
    id: '9',
    title: 'Google Cloud Professional',
    description: 'Cloud architecture and development certification',
    image: 'https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Cloud Computing',
    duration: '5 months',
    level: 'Advanced'
  }
];

const guidedProjects: Project[] = [
  {
    id: '1',
    title: 'Build a Portfolio Website',
    description: 'Create a responsive portfolio using HTML, CSS, and JavaScript',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    duration: '2 weeks',
    level: 'Beginner',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: '2',
    title: 'E-commerce Platform',
    description: 'Develop a full-stack e-commerce website with React and Node.js',
    image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Web Development',
    duration: '4 weeks',
    level: 'Intermediate',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: '3',
    title: 'Weather App',
    description: 'Build a weather application using OpenWeather API',
    image: 'https://images.unsplash.com/photo-1613068687893-5e85b4638b56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Web Development',
    duration: '1 week',
    level: 'Beginner',
    technologies: ['JavaScript', 'API Integration']
  },
  {
    id: '4',
    title: 'Task Management System',
    description: 'Create a task management app with drag-and-drop functionality',
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Web Development',
    duration: '3 weeks',
    level: 'Intermediate',
    technologies: ['React', 'TypeScript', 'Firebase']
  },
  {
    id: '5',
    title: 'Chat Application',
    description: 'Build a real-time chat app using WebSocket',
    image: 'https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Web Development',
    duration: '2 weeks',
    level: 'Intermediate',
    technologies: ['Node.js', 'Socket.io', 'MongoDB']
  },
  {
    id: '6',
    title: 'Image Recognition App',
    description: 'Create an app that recognizes objects using TensorFlow.js',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    category: 'Machine Learning',
    duration: '3 weeks',
    level: 'Advanced',
    technologies: ['Python', 'TensorFlow.js', 'React']
  },
  {
    id: '7',
    title: 'Social Media Dashboard',
    description: 'Build a dashboard with real-time analytics',
    image: 'https://images.unsplash.com/photo-1643503640904-75c1a2093570?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Web Development',
    duration: '2 weeks',
    level: 'Intermediate',
    technologies: ['React', 'Chart.js', 'Firebase']
  },
  {
    id: '8',
    title: 'AI Chatbot Development',
    description: 'Create an intelligent chatbot using OpenAI API and Python',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    category: 'Artificial Intelligence',
    duration: '3 weeks',
    level: 'Advanced',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React']
  },
  {
    id: '9',
    title: 'Blockchain Wallet App',
    description: 'Build a cryptocurrency wallet with transaction history',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    category: 'Blockchain',
    duration: '4 weeks',
    level: 'Advanced',
    technologies: ['React', 'Web3.js', 'Solidity', 'Node.js']
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 py-6 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Learn New Skills Online with Top Educators
            </h1>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-indigo-100 max-w-3xl mx-auto">
              Access thousands of courses from expert instructors worldwide. Start learning today and advance your career.
            </p>
            <div className="mt-4 sm:mt-6 md:mt-8">
              <a
                href="#featured-courses"
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-xs sm:text-sm md:text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div id="featured-courses" className="py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">Discover our most popular courses</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {featuredCourses.map((course) => (
              <div key={course.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Certificates */}
      <div className="bg-white py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center md:text-left">Most Popular Certificates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {popularCertificates.map(certificate => (
              <CourseCard key={certificate.id} course={certificate} />
            ))}
          </div>
        </div>
      </div>

      {/* Guided Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-center md:text-left">Guided Projects for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {guidedProjects.map(project => (
            <CourseCard key={project.id} course={project} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <footer className="bg-gray-800 text-white py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Contact Us</h3>
              <div className="space-y-1 sm:space-y-2">
                <p className="flex items-center justify-center md:justify-start text-xs sm:text-sm md:text-base">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
                  contact@learnhub.com
                </p>
                <p className="flex items-center justify-center md:justify-start text-xs sm:text-sm md:text-base">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center justify-center md:justify-start text-xs sm:text-sm md:text-base">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-2" />
                  123 Learning Street, Education City
                </p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Quick Links</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="/about" className="hover:text-indigo-400 text-xs sm:text-sm md:text-base">About Us</a></li>
                <li><a href="/careers" className="hover:text-indigo-400 text-xs sm:text-sm md:text-base">Careers</a></li>
                <li><a href="/blog" className="hover:text-indigo-400 text-xs sm:text-sm md:text-base">Blog</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">Follow Us</h3>
              <div className="flex space-x-3 sm:space-x-4 justify-center md:justify-start">
                {/* Add social media icons/links here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}