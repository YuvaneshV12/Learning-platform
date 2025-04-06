import { Clock, BookOpen } from 'lucide-react';
import { Course, Certificate, Project } from '../types';

interface CourseCardProps {
  course: Course | Certificate | Project;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </span>
          <span className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-1" />
            {course.level}
          </span>
        </div>
        {'technologies' in course && (
          <div className="mt-2 flex flex-wrap gap-2">
            {course.technologies.map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}