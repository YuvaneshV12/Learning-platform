import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Award, CheckCircle, Code, Terminal, FileCode, GitBranch, Rocket } from 'lucide-react';
import ContactBar from '../components/ContactBar';
import { Project } from '../types';

// This would typically come from an API or database
const projects: Project[] = [
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

// Project development steps
const projectSteps = {
  '1': [
    {
      id: '1-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new directory for your portfolio project',
        'Set up the basic HTML structure with proper meta tags',
        'Create CSS and JavaScript files and link them to your HTML',
        'Set up a Git repository for version control'
      ]
    },
    {
      id: '1-2',
      title: 'HTML Structure',
      description: 'Build the HTML structure for your portfolio',
      steps: [
        'Create a responsive navigation bar',
        'Design the hero section with your introduction',
        'Add sections for About, Skills, Projects, and Contact',
        'Include a footer with social media links'
      ]
    },
    {
      id: '1-3',
      title: 'CSS Styling',
      description: 'Style your portfolio with CSS',
      steps: [
        'Implement a responsive design using media queries',
        'Create a consistent color scheme and typography',
        'Style the navigation, sections, and components',
        'Add animations and transitions for better user experience'
      ]
    },
    {
      id: '1-4',
      title: 'JavaScript Functionality',
      description: 'Add interactive features with JavaScript',
      steps: [
        'Implement smooth scrolling for navigation links',
        'Create a dark/light mode toggle',
        'Add form validation for the contact section',
        'Implement a project filter system'
      ]
    },
    {
      id: '1-5',
      title: 'Testing and Deployment',
      description: 'Test your portfolio and deploy it online',
      steps: [
        'Test your portfolio across different devices and browsers',
        'Optimize images and code for better performance',
        'Deploy your portfolio to a hosting service like GitHub Pages or Netlify',
        'Set up a custom domain if desired'
      ]
    }
  ],
  '2': [
    {
      id: '2-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new React application using Create React App',
        'Set up a Node.js backend with Express',
        'Configure MongoDB database connection',
        'Set up Git repository and project structure'
      ]
    },
    {
      id: '2-2',
      title: 'Backend Development',
      description: 'Build the backend API for the e-commerce platform',
      steps: [
        'Create user authentication with JWT',
        'Implement product management API endpoints',
        'Develop shopping cart functionality',
        'Create order processing and payment integration'
      ]
    },
    {
      id: '2-3',
      title: 'Frontend Development',
      description: 'Build the frontend UI for the e-commerce platform',
      steps: [
        'Create responsive layouts for product listings',
        'Implement product detail pages',
        'Develop shopping cart and checkout flow',
        'Create user account management pages'
      ]
    },
    {
      id: '2-4',
      title: 'Integration and Testing',
      description: 'Integrate frontend and backend, and test the application',
      steps: [
        'Connect frontend components to backend API',
        'Implement error handling and loading states',
        'Test the complete user flow from browsing to checkout',
        'Perform security testing and fix vulnerabilities'
      ]
    },
    {
      id: '2-5',
      title: 'Deployment',
      description: 'Deploy the e-commerce platform to production',
      steps: [
        'Set up CI/CD pipeline for automated deployment',
        'Configure production environment variables',
        'Deploy backend to a cloud service like Heroku or AWS',
        'Deploy frontend to a static hosting service like Netlify or Vercel'
      ]
    }
  ],
  '3': [
    {
      id: '3-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new directory for your weather app',
        'Set up the basic HTML structure',
        'Create CSS and JavaScript files',
        'Sign up for an OpenWeather API key'
      ]
    },
    {
      id: '3-2',
      title: 'API Integration',
      description: 'Integrate the OpenWeather API into your application',
      steps: [
        'Create functions to fetch weather data from the API',
        'Implement error handling for API requests',
        'Parse and format the weather data for display',
        'Add loading states while data is being fetched'
      ]
    },
    {
      id: '3-3',
      title: 'UI Development',
      description: 'Build the user interface for the weather app',
      steps: [
        'Design a clean and intuitive weather display',
        'Create responsive layouts for different screen sizes',
        'Add weather icons and visual indicators',
        'Implement a search feature for different locations'
      ]
    },
    {
      id: '3-4',
      title: 'Additional Features',
      description: 'Add extra features to enhance the weather app',
      steps: [
        'Implement a 5-day forecast display',
        'Add unit conversion (Celsius/Fahrenheit)',
        'Create a geolocation feature to get local weather',
        'Add a favorites feature to save locations'
      ]
    },
    {
      id: '3-5',
      title: 'Testing and Deployment',
      description: 'Test your weather app and deploy it online',
      steps: [
        'Test the app across different devices and browsers',
        'Optimize performance and fix any bugs',
        'Deploy the app to a hosting service like GitHub Pages',
        'Document the project and share it on your portfolio'
      ]
    }
  ],
  '4': [
    {
      id: '4-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new React application with TypeScript',
        'Set up Firebase project and configure authentication',
        'Install necessary dependencies (Firebase, React DnD, etc.)',
        'Set up Git repository and project structure'
      ]
    },
    {
      id: '4-2',
      title: 'Authentication and User Management',
      description: 'Implement user authentication and profile management',
      steps: [
        'Create sign-up and login forms with Firebase authentication',
        'Implement user profile management',
        'Set up protected routes for authenticated users',
        'Create user settings and preferences'
      ]
    },
    {
      id: '4-3',
      title: 'Task Management Features',
      description: 'Build the core task management functionality',
      steps: [
        'Create task data model and Firebase collections',
        'Implement CRUD operations for tasks',
        'Add task categorization and priority levels',
        'Create task filtering and search functionality'
      ]
    },
    {
      id: '4-4',
      title: 'Drag-and-Drop Implementation',
      description: 'Implement drag-and-drop functionality for task organization',
      steps: [
        'Set up React DnD for drag-and-drop functionality',
        'Create draggable task components',
        'Implement drop zones for different task statuses',
        'Add visual feedback during drag operations'
      ]
    },
    {
      id: '4-5',
      title: 'Advanced Features and Polish',
      description: 'Add advanced features and polish the application',
      steps: [
        'Implement task deadlines and reminders',
        'Add task sharing and collaboration features',
        'Create data visualization for task progress',
        'Optimize performance and add responsive design'
      ]
    },
    {
      id: '4-6',
      title: 'Testing and Deployment',
      description: 'Test the application and deploy it to production',
      steps: [
        'Write unit and integration tests',
        'Perform user acceptance testing',
        'Deploy to Firebase Hosting',
        'Set up continuous integration and deployment'
      ]
    }
  ],
  '5': [
    {
      id: '5-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new Node.js project with Express',
        'Set up MongoDB database connection',
        'Install Socket.io for real-time communication',
        'Create the basic project structure'
      ]
    },
    {
      id: '5-2',
      title: 'Backend Development',
      description: 'Build the backend API and WebSocket server',
      steps: [
        'Implement user authentication with JWT',
        'Create API endpoints for user management',
        'Set up Socket.io server for real-time messaging',
        'Implement message storage in MongoDB'
      ]
    },
    {
      id: '5-3',
      title: 'Frontend Development',
      description: 'Build the frontend UI for the chat application',
      steps: [
        'Create a responsive chat interface',
        'Implement user authentication forms',
        'Set up Socket.io client for real-time communication',
        'Add user list and chat room functionality'
      ]
    },
    {
      id: '5-4',
      title: 'Chat Features Implementation',
      description: 'Implement core chat features',
      steps: [
        'Add private messaging functionality',
        'Implement group chat rooms',
        'Add file sharing capabilities',
        'Create message history and search'
      ]
    },
    {
      id: '5-5',
      title: 'Advanced Features',
      description: 'Add advanced features to enhance the chat experience',
      steps: [
        'Implement message encryption for security',
        'Add typing indicators and read receipts',
        'Create user presence detection',
        'Implement message reactions and emoji support'
      ]
    },
    {
      id: '5-6',
      title: 'Testing and Deployment',
      description: 'Test the application and deploy it to production',
      steps: [
        'Write unit and integration tests',
        'Perform load testing for WebSocket connections',
        'Deploy backend to a cloud service like Heroku or AWS',
        'Deploy frontend to a static hosting service'
      ]
    }
  ],
  '6': [
    {
      id: '6-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new React application',
        'Install TensorFlow.js and required dependencies',
        'Set up a Python backend with Flask for model training',
        'Configure the development environment'
      ]
    },
    {
      id: '6-2',
      title: 'Model Development',
      description: 'Develop and train the image recognition model',
      steps: [
        'Collect and preprocess training data',
        'Train a pre-trained model on custom dataset',
        'Convert the model to TensorFlow.js format',
        'Optimize the model for web deployment'
      ]
    },
    {
      id: '6-3',
      title: 'Frontend Development',
      description: 'Build the frontend UI for the image recognition app',
      steps: [
        'Create a responsive camera interface',
        'Implement image upload functionality',
        'Add image preview and editing features',
        'Design the results display interface'
      ]
    },
    {
      id: '6-4',
      title: 'TensorFlow.js Integration',
      description: 'Integrate TensorFlow.js with the frontend',
      steps: [
        'Load the TensorFlow.js model in the browser',
        'Implement image preprocessing for model input',
        'Create functions to run inference on images',
        'Process and display model predictions'
      ]
    },
    {
      id: '6-5',
      title: 'Advanced Features',
      description: 'Add advanced features to enhance the app',
      steps: [
        'Implement real-time object detection with webcam',
        'Add object tracking across video frames',
        'Create a gallery of recognized objects',
        'Implement object classification with confidence scores'
      ]
    },
    {
      id: '6-6',
      title: 'Testing and Deployment',
      description: 'Test the application and deploy it to production',
      steps: [
        'Test model accuracy across different devices',
        'Optimize performance for mobile devices',
        'Deploy the application to a hosting service',
        'Document the project and share it on your portfolio'
      ]
    }
  ],
  '7': [
    {
      id: '7-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new React application',
        'Set up Firebase project and configure Firestore',
        'Install Chart.js and other visualization libraries',
        'Set up Git repository and project structure'
      ]
    },
    {
      id: '7-2',
      title: 'Data Integration',
      description: 'Integrate social media APIs and data sources',
      steps: [
        'Set up API connections to social media platforms',
        'Create data fetching and caching mechanisms',
        'Implement real-time data updates with Firebase',
        'Design the data model for analytics'
      ]
    },
    {
      id: '7-3',
      title: 'Dashboard Layout',
      description: 'Build the dashboard layout and navigation',
      steps: [
        'Create a responsive dashboard layout',
        'Implement navigation between different sections',
        'Design card components for metrics display',
        'Add filtering and date range selection'
      ]
    },
    {
      id: '7-4',
      title: 'Data Visualization',
      description: 'Implement data visualization components',
      steps: [
        'Create line charts for trend analysis',
        'Implement bar charts for comparison data',
        'Add pie charts for distribution data',
        'Create heat maps for engagement patterns'
      ]
    },
    {
      id: '7-5',
      title: 'Advanced Analytics',
      description: 'Add advanced analytics features',
      steps: [
        'Implement sentiment analysis for social media posts',
        'Create audience demographics visualization',
        'Add competitor analysis features',
        'Implement predictive analytics for engagement'
      ]
    },
    {
      id: '7-6',
      title: 'Testing and Deployment',
      description: 'Test the application and deploy it to production',
      steps: [
        'Test data accuracy and visualization correctness',
        'Optimize performance for large datasets',
        'Deploy to Firebase Hosting',
        'Set up continuous monitoring and updates'
      ]
    }
  ],
  '8': [
    {
      id: '8-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new Python project with FastAPI',
        'Set up a React frontend application',
        'Install OpenAI API client and dependencies',
        'Configure environment variables for API keys'
      ]
    },
    {
      id: '8-2',
      title: 'Backend Development',
      description: 'Build the backend API for the chatbot',
      steps: [
        'Create API endpoints for chat interactions',
        'Implement OpenAI API integration',
        'Set up conversation history storage',
        'Add user authentication and session management'
      ]
    },
    {
      id: '8-3',
      title: 'Frontend Development',
      description: 'Build the frontend UI for the chatbot',
      steps: [
        'Create a responsive chat interface',
        'Implement message history display',
        'Add typing indicators and loading states',
        'Design user settings and preferences'
      ]
    },
    {
      id: '8-4',
      title: 'Chatbot Features',
      description: 'Implement core chatbot features',
      steps: [
        'Add conversation context management',
        'Implement message formatting and rendering',
        'Create error handling and fallback responses',
        'Add conversation export functionality'
      ]
    },
    {
      id: '8-5',
      title: 'Advanced Features',
      description: 'Add advanced features to enhance the chatbot',
      steps: [
        'Implement conversation branching and decision trees',
        'Add image generation capabilities',
        'Create conversation templates for common scenarios',
        'Implement conversation analytics and insights'
      ]
    },
    {
      id: '8-6',
      title: 'Testing and Deployment',
      description: 'Test the application and deploy it to production',
      steps: [
        'Test conversation flow and response quality',
        'Optimize API usage and costs',
        'Deploy backend to a cloud service',
        'Deploy frontend to a static hosting service'
      ]
    }
  ],
  '9': [
    {
      id: '9-1',
      title: 'Project Setup',
      description: 'Set up the project structure and create necessary files',
      steps: [
        'Create a new React application',
        'Install Web3.js and Ethereum libraries',
        'Set up a local Ethereum test network',
        'Configure the development environment'
      ]
    },
    {
      id: '9-2',
      title: 'Smart Contract Development',
      description: 'Develop the smart contracts for the wallet',
      steps: [
        'Create a wallet smart contract with Solidity',
        'Implement transaction functionality',
        'Add token support and balance tracking',
        'Test smart contracts on a local network'
      ]
    },
    {
      id: '9-3',
      title: 'Web3 Integration',
      description: 'Integrate Web3.js with the frontend',
      steps: [
        'Set up Web3 provider connection',
        'Implement wallet creation and import',
        'Add transaction signing and sending',
        'Create balance checking and token support'
      ]
    },
    {
      id: '9-4',
      title: 'Frontend Development',
      description: 'Build the frontend UI for the wallet',
      steps: [
        'Create a responsive dashboard layout',
        'Implement transaction history display',
        'Add wallet settings and security features',
        'Design token management interface'
      ]
    },
    {
      id: '9-5',
      title: 'Advanced Features',
      description: 'Add advanced features to enhance the wallet',
      steps: [
        'Implement multi-signature wallet support',
        'Add DeFi integration for token swapping',
        'Create transaction scheduling and recurring payments',
        'Implement hardware wallet integration'
      ]
    },
    {
      id: '9-6',
      title: 'Testing and Deployment',
      description: 'Test the application and deploy it to production',
      steps: [
        'Perform security audits of smart contracts',
        'Test on multiple Ethereum networks',
        'Deploy smart contracts to mainnet',
        'Deploy frontend to a static hosting service'
      ]
    }
  ]
};

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [steps, setSteps] = useState<any[]>([]);

  useEffect(() => {
    // Find the project by ID
    const foundProject = projects.find(p => p.id === projectId);
    if (foundProject) {
      setProject(foundProject);
      // Get the development steps for this project
      const projectStepsData = projectSteps[projectId as keyof typeof projectSteps] || [];
      setSteps(projectStepsData);
    } else {
      // If project not found, redirect to home page
      navigate('/');
    }
  }, [projectId, navigate]);

  if (!project) {
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
          {/* Back button */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-indigo-600 hover:text-indigo-800 mb-4 transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </button>
          
          {/* Project header */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-48 sm:h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 sm:p-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{project.title}</h1>
                  <div className="flex items-center mt-2 space-x-4">
                    <span className="flex items-center text-white/80 text-xs sm:text-sm">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {project.category}
                    </span>
                    <span className="flex items-center text-white/80 text-xs sm:text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.duration}
                    </span>
                    <span className="flex items-center text-white/80 text-xs sm:text-sm">
                      <Award className="h-4 w-4 mr-1" />
                      {project.level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Project description */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Project Description</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {project.description}
                </p>
              </div>
              
              {/* Development steps */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Development Steps</h2>
                <div className="space-y-6">
                  {steps.length > 0 ? (
                    steps.map((step) => (
                      <div key={step.id} className="border-l-4 border-indigo-500 pl-4">
                        <h3 className="text-md sm:text-lg font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                        <ul className="space-y-2">
                          {step.steps.map((subStep: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{subStep}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No development steps available for this project.</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Project info */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Project Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Category</p>
                      <p className="text-sm font-medium text-gray-900">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-medium text-gray-900">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Level</p>
                      <p className="text-sm font-medium text-gray-900">{project.level}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Technologies */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
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