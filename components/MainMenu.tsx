
import React from 'react';
import { GameScreenState } from '../types';
import { TrophyIcon } from './icons/TrophyIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { Cog6ToothIcon } from './icons/Cog6ToothIcon';

interface MainMenuProps {
  onNavigate: (screen: GameScreenState) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center p-8 bg-gray-900">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white tracking-tighter">Hızlı Kare</h1>
        <h1 className="text-5xl font-black text-cyan-400 tracking-tighter -mt-2">KAPMACA</h1>
      </div>

      <div className="w-full max-w-xs">
        <button
          onClick={() => onNavigate('matchmaking')}
          className="w-full bg-cyan-400 text-gray-900 font-bold text-2xl py-4 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Oyna
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6">
        <button onClick={() => onNavigate('leaderboard')} className="p-3 bg-gray-800 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
          <TrophyIcon className="w-7 h-7" />
        </button>
        <button onClick={() => {}} className="p-3 bg-gray-800 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors opacity-50 cursor-not-allowed" title="Yakında">
          <UserGroupIcon className="w-7 h-7" />
        </button>
        <button onClick={() => onNavigate('settings')} className="p-3 bg-gray-800 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
          <Cog6ToothIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
