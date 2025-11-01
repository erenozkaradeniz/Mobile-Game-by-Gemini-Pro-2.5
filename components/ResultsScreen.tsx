
import React, { useState, useEffect } from 'react';
import { Player } from '../types';
import { PLAYER1_COLOR, PLAYER2_COLOR } from '../constants';

interface ResultsScreenProps {
  winner: Player | null;
  localPlayer: Player;
  onPlayAgain: () => void;
  onFindNewMatch: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ winner, localPlayer, onPlayAgain, onFindNewMatch }) => {
  const isWinner = winner === localPlayer;
  const [showAd, setShowAd] = useState(false);
  const [adClosed, setAdClosed] = useState(isWinner); // Winners don't see ads

  useEffect(() => {
    if (!isWinner) {
      const timer = setTimeout(() => {
        setShowAd(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isWinner]);

  const handleCloseAd = () => {
    setShowAd(false);
    setAdClosed(true);
  };

  const winnerColor = winner === Player.Player1 ? PLAYER1_COLOR.replace('bg-', 'text-') : PLAYER2_COLOR.replace('bg-', 'text-');

  if (showAd) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4">
        <div className="absolute top-4 right-4 text-xs text-gray-500">Reklam</div>
        <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-400">Oyun İçi Reklam</p>
        </div>
        <button
          onClick={handleCloseAd}
          className="bg-gray-700 text-white font-bold py-2 px-6 rounded-lg"
        >
          Kapat
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full items-center justify-center p-8 text-center">
      {isWinner ? (
        <h1 className={`text-6xl font-black ${winnerColor}`}>Kazandın!</h1>
      ) : (
        <h1 className="text-6xl font-black text-gray-500">Kaybettin!</h1>
      )}

      <div className={`mt-12 w-full max-w-xs space-y-4 ${!adClosed ? 'opacity-25 pointer-events-none' : ''}`}>
        <button
          onClick={onPlayAgain}
          disabled={!adClosed}
          className="w-full bg-gray-200 text-gray-900 font-bold text-xl py-3 rounded-lg transition-transform hover:scale-105"
        >
          Tekrar Oyna
        </button>
        <button
          onClick={onFindNewMatch}
          disabled={!adClosed}
          className="w-full bg-gray-700 text-white font-bold text-xl py-3 rounded-lg transition-transform hover:scale-105"
        >
          Başkasıyla Oyna
        </button>
      </div>
      {!adClosed && <p className="mt-4 text-sm text-gray-500 animate-pulse">Reklam yükleniyor...</p>}
    </div>
  );
};
