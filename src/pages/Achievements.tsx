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
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Your Achievements</h1>
            <p className="text-gray-600">Track your learning milestones and celebrate your success!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map(achievement => (
              <div key={achievement.id} className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Trophy className="h-8 w-8 text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-center mb-4">{achievement.description}</p>
                {achievement.earnedDate && (
                  <div className="text-sm text-gray-500 text-center">
                    Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Achievement Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                  <Trophy className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold">Total Achievements</h3>
                <p className="text-3xl font-bold text-indigo-600 mt-2">12</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                  <Star className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold">Current Streak</h3>
                <p className="text-3xl font-bold text-indigo-600 mt-2">7 days</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 p-4 rounded-full inline-block mb-4">
                  <Award className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold">Ranking</h3>
                <p className="text-3xl font-bold text-indigo-600 mt-2">Top 10%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  );
}