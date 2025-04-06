import { useState } from 'react';
import { Progress } from '../types';
import { TrendingUp, Clock } from 'lucide-react';
import ContactBar from '../components/ContactBar';

const userProgress: Progress[] = [
  {
    courseId: '1',
    courseName: 'Web Development Fundamentals',
    progress: 65,
    lastAccessed: '2024-03-10'
  },
  // Add more progress data
];

export default function ProgressPage() {
  // Calculate overall progress as the average of all course progress
  const overallProgress = userProgress.length > 0 
    ? Math.round(userProgress.reduce((sum, course) => sum + course.progress, 0) / userProgress.length) 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Your Learning Progress</h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">Track your progress and achievements</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Overall Progress</h2>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex-1">
                <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${overallProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900">{overallProgress}%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {userProgress.map((progress) => (
              <div key={progress.courseId} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{progress.courseName}</h3>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium text-indigo-600">{progress.progress}%</span>
                </div>
                <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden mb-2 sm:mb-3">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${progress.progress}%` }}
                  ></div>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">Last accessed: {progress.lastAccessed}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  );
}