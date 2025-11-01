
import React from 'react';
import { GameScreenState } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';

interface SettingsScreenProps {
  onNavigate: (screen: GameScreenState) => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="h-full w-full flex flex-col p-4 bg-gray-800">
      <header className="flex items-center mb-8">
        <button onClick={() => onNavigate('menu')} className="p-2 -ml-2 text-gray-300 hover:text-white">
          <ChevronLeftIcon className="w-7 h-7" />
        </button>
        <h1 className="text-2xl font-bold ml-2">Ayarlar</h1>
      </header>
      <div className="space-y-6">
        <div className="bg-gray-900 p-4 rounded-lg">
          <h2 className="font-bold text-lg mb-3 text-cyan-400">Renk Seçimi</h2>
          <p className="text-sm text-gray-400 mb-4">Karelerin başlangıç rengini belirler.</p>
          <div className="flex space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-700 ring-2 ring-cyan-400 cursor-pointer"></div>
            <div className="w-12 h-12 rounded-full bg-slate-700 cursor-pointer opacity-50"></div>
            <div className="w-12 h-12 rounded-full bg-zinc-700 cursor-pointer opacity-50"></div>
          </div>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
          <div>
            <h2 className="font-bold text-lg text-cyan-400">Bildirimler</h2>
            <p className="text-sm text-gray-400">Arkadaşlık istekleri ve davetler için.</p>
          </div>
          <div className="relative inline-block w-12 h-7 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:bg-cyan-400"/>
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-7 rounded-full bg-gray-600 cursor-pointer"></label>
          </div>
          <style>{`.toggle-checkbox:checked { right: 0; border-color: white; } .toggle-checkbox:checked + .toggle-label { background-color: #22d3ee; }`}</style>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <button className="w-full text-left text-rose-500 font-bold hover:text-rose-400">
            Hesabı Sil
          </button>
        </div>
      </div>
    </div>
  );
};
