import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle, PlayCircle } from 'lucide-react';
import ContactBar from '../components/ContactBar';
import { Course } from '../types';

// This would typically come from an API or database
const courses: Course[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern, responsive websites. Perfect for beginners starting their web development journey.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg',
    duration: '6 weeks',
    level: 'Beginner',
    testUrl: 'https://www.quizlet.com/123456/web-development-fundamentals',
    modules: [
      {
        id: '1-1',
        title: 'Introduction to HTML',
        description: 'Learn the basics of HTML structure and elements',
        duration: '1 week',
        completed: false
      },
      {
        id: '1-2',
        title: 'CSS Styling',
        description: 'Master CSS for styling web pages',
        duration: '1 week',
        completed: false
      },
      {
        id: '1-3',
        title: 'JavaScript Basics',
        description: 'Introduction to JavaScript programming',
        duration: '1 week',
        completed: false
      },
      {
        id: '1-4',
        title: 'Responsive Design',
        description: 'Create websites that work on all devices',
        duration: '1 week',
        completed: false
      },
      {
        id: '1-5',
        title: 'Web Development Best Practices',
        description: 'Learn industry standards and best practices',
        duration: '1 week',
        completed: false
      },
      {
        id: '1-6',
        title: 'Final Project',
        description: 'Build a complete website from scratch',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '2',
    title: 'Python Programming Mastery',
    description: 'Master Python programming from the ground up. Explore algorithms, data structures, and key tips for writing clean and effective code for better problem solving.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    category: 'Programming',
    videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw',
    duration: '8 weeks',
    level: 'Intermediate',
    testUrl: 'https://www.quizlet.com/234567/python-programming-mastery',
    modules: [
      {
        id: '2-1',
        title: 'Python Basics',
        description: 'Introduction to Python syntax and data types',
        duration: '1 week',
        completed: false
      },
      {
        id: '2-2',
        title: 'Control Structures',
        description: 'Learn loops, conditionals, and program flow',
        duration: '1 week',
        completed: false
      },
      {
        id: '2-3',
        title: 'Functions and Modules',
        description: 'Master function creation and module usage',
        duration: '1 week',
        completed: false
      },
      {
        id: '2-4',
        title: 'Object-Oriented Programming',
        description: 'Learn classes, objects, and inheritance',
        duration: '1 week',
        completed: false
      },
      {
        id: '2-5',
        title: 'Data Structures',
        description: 'Explore lists, dictionaries, sets, and tuples',
        duration: '1 week',
        completed: false
      },
      {
        id: '2-6',
        title: 'File Handling',
        description: 'Work with files and data persistence',
        duration: '1 week',
        completed: false
      },
      {
        id: '2-7',
        title: 'Error Handling',
        description: 'Learn exception handling and debugging',
        duration: '1 week',
        completed: false
      },
      {
        id: '2-8',
        title: 'Final Project',
        description: 'Build a complete Python application',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '3',
    title: 'React.js Advanced Concepts Mastery',
    description: 'Deep dive into React.js advanced features including hooks, context, performance optimization, and state management techniques for scalability.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    videoUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8',
    duration: '10 weeks',
    level: 'Advanced',
    testUrl: 'https://www.quizlet.com/345678/react-advanced-concepts',
    modules: [
      {
        id: '3-1',
        title: 'React Hooks Deep Dive',
        description: 'Master useState, useEffect, useContext, and custom hooks',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-2',
        title: 'State Management',
        description: 'Learn Redux, Context API, and other state management solutions',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-3',
        title: 'Performance Optimization',
        description: 'Techniques to optimize React application performance',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-4',
        title: 'Advanced Component Patterns',
        description: 'Learn higher-order components, render props, and compound components',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-5',
        title: 'Testing React Applications',
        description: 'Unit testing, integration testing, and testing best practices',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-6',
        title: 'Server-Side Rendering',
        description: 'Implement SSR with Next.js and other frameworks',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-7',
        title: 'React Native Introduction',
        description: 'Cross-platform mobile development with React Native',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-8',
        title: 'Advanced Routing',
        description: 'Complex routing scenarios and navigation patterns',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-9',
        title: 'Authentication and Authorization',
        description: 'Implement secure authentication in React applications',
        duration: '1 week',
        completed: false
      },
      {
        id: '3-10',
        title: 'Final Project',
        description: 'Build a production-ready React application',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '4',
    title: 'Core Of Data Science Essentials',
    description: 'Introduction to data science using Python. Learn pandas, numpy, and matplotlib for data analysis and visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    category: 'Data Science',
    videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30',
    duration: '12 weeks',
    level: 'Intermediate',
    testUrl: 'https://www.quizlet.com/456789/data-science-essentials',
    modules: [
      {
        id: '4-1',
        title: 'Introduction to Data Science',
        description: 'Overview of data science field and applications',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-2',
        title: 'Python for Data Science',
        description: 'Essential Python libraries and tools for data analysis',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-3',
        title: 'Data Wrangling with Pandas',
        description: 'Clean, transform, and analyze data with Pandas',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-4',
        title: 'Numerical Computing with NumPy',
        description: 'Perform numerical operations and calculations',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-5',
        title: 'Data Visualization',
        description: 'Create compelling visualizations with Matplotlib and Seaborn',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-6',
        title: 'Statistical Analysis',
        description: 'Apply statistical methods to analyze data',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-7',
        title: 'Machine Learning Basics',
        description: 'Introduction to supervised and unsupervised learning',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-8',
        title: 'Data Mining Techniques',
        description: 'Extract patterns and insights from large datasets',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-9',
        title: 'Big Data Fundamentals',
        description: 'Introduction to big data technologies and processing',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-10',
        title: 'Data Science Ethics',
        description: 'Ethical considerations in data science and AI',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-11',
        title: 'Data Science Project Management',
        description: 'Best practices for managing data science projects',
        duration: '1 week',
        completed: false
      },
      {
        id: '4-12',
        title: 'Final Project',
        description: 'Complete a data science project from start to finish',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '5',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native. Create beautiful, native apps for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
    category: 'Mobile Development',
    videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc',
    duration: '8 weeks',
    level: 'Intermediate',
    testUrl: 'https://www.quizlet.com/567890/react-native-development',
    modules: [
      {
        id: '5-1',
        title: 'Introduction to React Native',
        description: 'Overview of React Native and mobile development',
        duration: '1 week',
        completed: false
      },
      {
        id: '5-2',
        title: 'React Native Components',
        description: 'Core components and their usage in mobile apps',
        duration: '1 week',
        completed: false
      },
      {
        id: '5-3',
        title: 'Navigation in React Native',
        description: 'Implement navigation between screens',
        duration: '1 week',
        completed: false
      },
      {
        id: '5-4',
        title: 'State Management',
        description: 'Manage application state in React Native',
        duration: '1 week',
        completed: false
      },
      {
        id: '5-5',
        title: 'Working with APIs',
        description: 'Connect your app to backend services',
        duration: '1 week',
        completed: false
      },
      {
        id: '5-6',
        title: 'Native Device Features',
        description: 'Access camera, location, and other device features',
        duration: '1 week',
        completed: false
      },
      {
        id: '5-7',
        title: 'UI/UX for Mobile',
        description: 'Design principles for mobile applications',
        duration: '1 week',
        completed: false
      },
      {
        id: '5-8',
        title: 'Final Project',
        description: 'Build a complete mobile application',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '6',
    title: 'Machine Learning Fundamentals',
    description: 'Introduction to machine learning algorithms and techniques. Learn supervised and unsupervised learning with practical examples.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80&w=1000',
    category: 'Data Science',
    videoUrl: 'https://www.youtube.com/embed/JcI5Vnw0b2c',
    duration: '14 weeks',
    level: 'Advanced',
    testUrl: 'https://www.quizlet.com/678901/machine-learning-fundamentals',
    modules: [
      {
        id: '6-1',
        title: 'Introduction to Machine Learning',
        description: 'Overview of machine learning concepts and applications',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-2',
        title: 'Supervised Learning: Regression',
        description: 'Linear regression, polynomial regression, and other regression techniques',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-3',
        title: 'Supervised Learning: Classification',
        description: 'Logistic regression, decision trees, and other classification algorithms',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-4',
        title: 'Unsupervised Learning',
        description: 'Clustering algorithms and dimensionality reduction',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-5',
        title: 'Neural Networks',
        description: 'Introduction to artificial neural networks',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-6',
        title: 'Deep Learning',
        description: 'Convolutional neural networks and recurrent neural networks',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-7',
        title: 'Natural Language Processing',
        description: 'Text processing and language models',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-8',
        title: 'Computer Vision',
        description: 'Image recognition and computer vision techniques',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-9',
        title: 'Reinforcement Learning',
        description: 'Introduction to reinforcement learning algorithms',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-10',
        title: 'Model Evaluation and Selection',
        description: 'Techniques for evaluating and selecting the best models',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-11',
        title: 'Feature Engineering',
        description: 'Techniques for creating and selecting features',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-12',
        title: 'Model Deployment',
        description: 'Deploying machine learning models to production',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-13',
        title: 'Ethics in Machine Learning',
        description: 'Ethical considerations in AI and machine learning',
        duration: '1 week',
        completed: false
      },
      {
        id: '6-14',
        title: 'Final Project',
        description: 'Build and deploy a complete machine learning solution',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '7',
    title: 'UI/UX Design Principles',
    description: 'Learn the fundamentals of user interface and user experience design. Master design thinking and prototyping.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
    category: 'Design',
    videoUrl: 'https://www.youtube.com/embed/c9Wg6Cb_YlU',
    duration: '6 weeks',
    level: 'Beginner',
    testUrl: 'https://www.quizlet.com/789012/ui-ux-design-principles',
    modules: [
      {
        id: '7-1',
        title: 'Introduction to UI/UX Design',
        description: 'Overview of UI/UX design principles and importance',
        duration: '1 week',
        completed: false
      },
      {
        id: '7-2',
        title: 'User Research',
        description: 'Conducting user research and creating user personas',
        duration: '1 week',
        completed: false
      },
      {
        id: '7-3',
        title: 'Information Architecture',
        description: 'Organizing content and creating site maps',
        duration: '1 week',
        completed: false
      },
      {
        id: '7-4',
        title: 'Wireframing and Prototyping',
        description: 'Creating wireframes and interactive prototypes',
        duration: '1 week',
        completed: false
      },
      {
        id: '7-5',
        title: 'Visual Design Principles',
        description: 'Color theory, typography, and layout design',
        duration: '1 week',
        completed: false
      },
      {
        id: '7-6',
        title: 'Final Project',
        description: 'Design a complete UI/UX solution for a product',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '8',
    title: 'Node.js Development',
    description: 'Build scalable backend applications with Node.js. Learn Express.js, MongoDB, and RESTful API design.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1000',
    category: 'Web Development',
    videoUrl: 'https://www.youtube.com/embed/Oe421EPjeBE',
    duration: '10 weeks',
    level: 'Intermediate',
    testUrl: 'https://www.quizlet.com/890123/nodejs-development',
    modules: [
      {
        id: '8-1',
        title: 'Introduction to Node.js',
        description: 'Overview of Node.js and its ecosystem',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-2',
        title: 'Asynchronous Programming',
        description: 'Callbacks, promises, and async/await',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-3',
        title: 'Express.js Framework',
        description: 'Building web applications with Express.js',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-4',
        title: 'RESTful API Design',
        description: 'Designing and implementing RESTful APIs',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-5',
        title: 'Database Integration',
        description: 'Working with MongoDB and other databases',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-6',
        title: 'Authentication and Authorization',
        description: 'Implementing user authentication and authorization',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-7',
        title: 'Testing Node.js Applications',
        description: 'Unit testing and integration testing',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-8',
        title: 'Deployment and DevOps',
        description: 'Deploying Node.js applications to production',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-9',
        title: 'Performance Optimization',
        description: 'Optimizing Node.js applications for performance',
        duration: '1 week',
        completed: false
      },
      {
        id: '8-10',
        title: 'Final Project',
        description: 'Build a complete Node.js backend application',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '9',
    title: 'Cloud Computing with AWS',
    description: 'Master cloud computing concepts and AWS services. Learn to deploy and manage applications in the cloud.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
    category: 'Cloud Computing',
    videoUrl: 'https://www.youtube.com/embed/3hLkNSYxY3U',
    duration: '12 weeks',
    level: 'Advanced',
    testUrl: 'https://www.quizlet.com/901234/aws-cloud-computing',
    modules: [
      {
        id: '9-1',
        title: 'Introduction to Cloud Computing',
        description: 'Overview of cloud computing and AWS services',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-2',
        title: 'AWS Core Services',
        description: 'EC2, S3, and other fundamental AWS services',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-3',
        title: 'Networking in AWS',
        description: 'VPC, subnets, and network security',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-4',
        title: 'Database Services',
        description: 'RDS, DynamoDB, and other database options',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-5',
        title: 'Serverless Computing',
        description: 'Lambda, API Gateway, and serverless architecture',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-6',
        title: 'Security and Compliance',
        description: 'IAM, security groups, and compliance standards',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-7',
        title: 'Monitoring and Logging',
        description: 'CloudWatch, CloudTrail, and monitoring tools',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-8',
        title: 'Auto Scaling and Load Balancing',
        description: 'Managing application scalability in AWS',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-9',
        title: 'DevOps with AWS',
        description: 'CI/CD pipelines and infrastructure as code',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-10',
        title: 'Cost Optimization',
        description: 'Managing and optimizing AWS costs',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-11',
        title: 'High Availability and Disaster Recovery',
        description: 'Designing for high availability and DR',
        duration: '1 week',
        completed: false
      },
      {
        id: '9-12',
        title: 'Final Project',
        description: 'Deploy a complete application to AWS',
        duration: '1 week',
        completed: false
      }
    ]
  },
  {
    id: '10',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn essential cybersecurity concepts and practices. Master network security and ethical hacking.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    category: 'Security',
    videoUrl: 'https://www.youtube.com/embed/bPVaOlJ6ln0',
    duration: '8 weeks',
    level: 'Intermediate',
    testUrl: 'https://www.quizlet.com/912345/cybersecurity-fundamentals',
    modules: [
      {
        id: '10-1',
        title: 'Introduction to Cybersecurity',
        description: 'Overview of cybersecurity concepts and threats',
        duration: '1 week',
        completed: false
      },
      {
        id: '10-2',
        title: 'Network Security',
        description: 'Network protocols, firewalls, and security measures',
        duration: '1 week',
        completed: false
      },
      {
        id: '10-3',
        title: 'Cryptography',
        description: 'Encryption, hashing, and cryptographic protocols',
        duration: '1 week',
        completed: false
      },
      {
        id: '10-4',
        title: 'Web Security',
        description: 'Common web vulnerabilities and protection methods',
        duration: '1 week',
        completed: false
      },
      {
        id: '10-5',
        title: 'Malware Analysis',
        description: 'Understanding and analyzing different types of malware',
        duration: '1 week',
        completed: false
      },
      {
        id: '10-6',
        title: 'Ethical Hacking',
        description: 'Penetration testing and vulnerability assessment',
        duration: '1 week',
        completed: false
      },
      {
        id: '10-7',
        title: 'Incident Response',
        description: 'Handling security incidents and breaches',
        duration: '1 week',
        completed: false
      },
      {
        id: '10-8',
        title: 'Final Project',
        description: 'Conduct a security audit and penetration test',
        duration: '1 week',
        completed: false
      }
    ]
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

export default function CourseDetails() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    // Find the course by ID
    const foundCourse = courses.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      // If course not found, redirect to courses page
      navigate('/courses');
    }
  }, [courseId, navigate]);

  const handleTakeTest = () => {
    // Redirect to the course-specific quiz platform
    if (course?.testUrl) {
      window.open(course.testUrl, '_blank');
    } else {
      // Fallback to a generic quiz platform if no specific URL is provided
      window.open('https://www.quizlet.com', '_blank');
    }
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/courses')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">Back to Courses</span>
          </button>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="relative">
              <img src={course.image} alt={course.title} className="w-full h-48 sm:h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 sm:p-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{course.title}</h1>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="flex items-center text-white/80 text-xs sm:text-sm">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {course.category}
                    </span>
                    <span className="flex items-center text-white/80 text-xs sm:text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center text-white/80 text-xs sm:text-sm">
                      <Award className="h-4 w-4 mr-1" />
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={course.videoUrl}
                    title={course.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[50vh] sm:h-[60vh] rounded-lg"
                  ></iframe>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Course Description</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {course.description}
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Course Modules</h2>
                <div className="space-y-3">
                  {course.modules ? (
                    course.modules.map((module) => (
                      <div key={module.id} className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                          <PlayCircle className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-sm sm:text-base font-medium text-gray-900">{module.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-500">{module.description}</p>
                          <p className="text-xs text-indigo-600 mt-1">{module.duration}</p>
                        </div>
                        <div className="flex-shrink-0">
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No modules available for this course.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Assessment</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Test your knowledge with our comprehensive quiz for {course.title}.
                </p>
                <button 
                  onClick={handleTakeTest}
                  className="w-full flex items-center justify-center bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  <span className="font-medium">Take Test</span>
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Course Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Category</p>
                      <p className="text-sm font-medium text-gray-900">{course.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-medium text-gray-900">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Level</p>
                      <p className="text-sm font-medium text-gray-900">{course.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  );
}