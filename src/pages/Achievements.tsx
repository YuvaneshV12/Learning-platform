import { useState } from 'react';
import { Achievement } from '../types';
import { Trophy, Star, Award } from 'lucide-react';
import ContactBar from '../components/ContactBar';

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Fast Learner',
    description: 'Complete 5 courses in under 30 days',
    icon: 'rocket',
    earnedDate: '2024-02-15'
  },
  // Add more achievements
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Your Achievements</h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600">Celebrate your learning milestones</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">{achievements.length}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Total Achievements</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">7</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Current Streak</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">#42</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Global Ranking</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">12</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-600">Certificates Earned</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{achievement.title}</h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-2 sm:mb-3">{achievement.description}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">Earned on {achievement.earnedDate}</p>
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