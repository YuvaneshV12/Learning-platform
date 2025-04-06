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
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Your Learning Progress</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Overall Progress</h2>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded-full">
                  <div 
                    className="h-4 bg-indigo-600 rounded-full"
                    style={{ width: '65%' }}
                  ></div>
                </div>
              </div>
              <span className="text-lg font-semibold">65%</span>
            </div>
          </div>

          <div className="grid gap-6">
            {userProgress.map(course => (
              <div key={course.courseId} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{course.courseName}</h3>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Last accessed: {new Date(course.lastAccessed).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded-full">
                      <div 
                        className="h-4 bg-indigo-600 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-lg font-semibold">{course.progress}%</span>
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