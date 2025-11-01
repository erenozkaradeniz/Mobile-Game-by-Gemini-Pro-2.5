
import React, { useState, useEffect, useCallback } from 'react';
import { Player } from '../types';
import { PlayerGrid } from './PlayerGrid';
import {
  PLAYER1_NAME,
  PLAYER2_NAME,
  PLAYER1_COLOR,
  PLAYER2_COLOR,
  TOTAL_CELLS
} from '../constants';

interface GameScreenProps {
  onGameEnd: (winner: Player) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ onGameEnd }) => {
  const [winner, setWinner] = useState<Player | null>(null);
  const [player1Progress, setPlayer1Progress] = useState(0);
  const [player2Progress, setPlayer2Progress] = useState(0);

  const handleWin = useCallback((winningPlayer: Player) => {
    setWinner(winningPlayer);
  }, []);
  
  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => {
        onGameEnd(winner);
      }, 500); // A small delay to show the locked screen
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [winner, onGameEnd]);

  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-900 touch-action-none">
      <div className="w-full flex justify-between p-4 pt-6">
          <div className="text-center">
              <div className={`font-bold text-lg ${PLAYER1_COLOR.replace('bg-', 'text-')}`}>{PLAYER1_NAME}</div>
              <div className="text-sm text-gray-400">{player1Progress} / {TOTAL_CELLS}</div>
          </div>
          <div className="text-center">
              <div className={`font-bold text-lg ${PLAYER2_COLOR.replace('bg-', 'text-')}`}>{PLAYER2_NAME}</div>
              <div className="text-sm text-gray-400">{player2Progress} / {TOTAL_CELLS}</div>
          </div>
      </div>

      <div className="w-full flex-grow flex p-2 space-x-2">
        <PlayerGrid
          player={Player.Player1}
          onWin={handleWin}
          isLocked={winner === Player.Player2}
          onProgressUpdate={setPlayer1Progress}
        />
        <PlayerGrid
          player={Player.Player2}
          onWin={handleWin}
          isLocked={winner === Player.Player1}
          onProgressUpdate={setPlayer2Progress}
        />
      </div>
    </div>
  );
};
