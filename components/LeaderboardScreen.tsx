
import React from 'react';
import { GameScreenState } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';

interface LeaderboardScreenProps {
  onNavigate: (screen: GameScreenState) => void;
}

const worldData = [
  { rank: 1, name: 'Zephyr', score: 98760 },
  { rank: 2, name: 'Nexus', score: 95430 },
  { rank: 3, name: 'Vortex', score: 92100 },
  { rank: 4, name: 'user_42', score: 88760 },
  { rank: 5, name: 'GamerX', score: 85430 },
  { rank: 6, name: 'ProPlayer', score: 82100 },
];

const countryData = [
  { rank: 1, name: 'Eren', score: 78900 },
  { rank: 2, name: 'Ayşe', score: 75670 },
  { rank: 3, name: 'Ahmet', score: 72340 },
  { rank: 4, name: 'Zeynep', score: 69010 },
  { rank: 5, name: 'Mehmet', score: 65680 },
  { rank: 6, name: 'Fatma', score: 62350 },
];

const LeaderboardList: React.FC<{ title: string; data: typeof worldData; playerRank: number; playerName: string; playerScore: number; }> = ({ title, data, playerRank, playerName, playerScore }) => (
  <div className="w-1/2 flex-shrink-0">
    <h2 className="text-xl font-bold text-center mb-4 text-cyan-400">{title}</h2>
    <div className="bg-gray-900 rounded-lg p-1">
      <div className="text-xs text-gray-500 flex justify-between px-2 py-1">
        <span>Sıra</span>
        <span>Kullanıcı</span>
        <span>Puan</span>
      </div>
      <ul className="space-y-1">
        {data.map(p => (
          <li key={p.rank} className="flex justify-between items-center p-2 rounded bg-gray-800 text-sm">
            <span className="font-semibold w-6 text-center">{p.rank}</span>
            <span className="flex-1 truncate px-2">{p.name}</span>
            <span className="font-mono text-cyan-400">{p.score}</span>
          </li>
        ))}
        <li className="text-center text-gray-600">...</li>
        <li className="flex justify-between items-center p-2 rounded bg-cyan-900/50 ring-1 ring-cyan-500 text-sm">
          <span className="font-semibold w-6 text-center">{playerRank}</span>
          <span className="flex-1 truncate px-2 font-bold">{playerName}</span>
          <span className="font-mono text-cyan-300">{playerScore}</span>
        </li>
      </ul>
    </div>
  </div>
);


export const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full w-full flex flex-col p-4 bg-gray-800">
      <header className="flex items-center mb-4 flex-shrink-0">
        <button onClick={() => onNavigate('menu')} className="p-2 -ml-2 text-gray-300 hover:text-white">
          <ChevronLeftIcon className="w-7 h-7" />
        </button>
        <h1 className="text-2xl font-bold ml-2">Sıralamalar</h1>
      </header>
      <div className="flex-grow overflow-y-auto flex space-x-4">
        <LeaderboardList title="Dünya Sıralaması" data={worldData} playerRank={1337} playerName="Sen" playerScore={42069} />
        <LeaderboardList title="Türkiye Sıralaması" data={countryData} playerRank={123} playerName="Sen" playerScore={42069} />
      </div>
    </div>
  );
};
