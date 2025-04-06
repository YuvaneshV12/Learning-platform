import { Clock, BookOpen } from 'lucide-react';
import { Course, Certificate, Project } from '../types';

interface CourseCardProps {
  course: Course | Certificate | Project;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-28 sm:h-36 md:h-40 lg:h-48 object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-2 sm:p-3 md:p-4">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 line-clamp-2 transition-colors duration-300 hover:text-indigo-600">{course.title}</h3>
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3">{course.description}</p>
        <div className="mt-1.5 sm:mt-2 md:mt-3 lg:mt-4 flex items-center justify-between">
          <span className="flex items-center text-[10px] sm:text-xs md:text-sm text-gray-500 transition-colors duration-300 hover:text-indigo-600">
            <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 mr-0.5 sm:mr-1" />
            {course.duration}
          </span>
          <span className="flex items-center text-[10px] sm:text-xs md:text-sm text-gray-500 transition-colors duration-300 hover:text-indigo-600">
            <BookOpen className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 mr-0.5 sm:mr-1" />
            {course.level}
          </span>
        </div>
        {'technologies' in course && (
          <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-0.5 sm:gap-1 md:gap-2">
            {course.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-1 sm:px-1.5 md:px-2 py-0.5 text-[8px] sm:text-[10px] md:text-xs bg-indigo-100 text-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-200 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}