
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Player } from '../types';
import { GridCell } from './GridCell';
import { TOTAL_CELLS, PLAYER1_COLOR, PLAYER2_COLOR, NEUTRAL_COLOR, TAPPED_COLOR, LOCKED_OVERLAY_COLOR } from '../constants';

interface PlayerGridProps {
  player: Player;
  onWin: (player: Player) => void;
  isLocked: boolean;
  onProgressUpdate: (progress: number) => void;
}

export const PlayerGrid: React.FC<PlayerGridProps> = ({ player, onWin, isLocked, onProgressUpdate }) => {
  const [tappedCells, setTappedCells] = useState<Set<number>>(new Set());

  const playerColor = useMemo(() => (player === Player.Player1 ? PLAYER1_COLOR : PLAYER2_COLOR), [player]);
  
  useEffect(() => {
    onProgressUpdate(tappedCells.size);
    if (tappedCells.size === TOTAL_CELLS) {
      onWin(player);
    }
  }, [tappedCells.size, onWin, player, onProgressUpdate]);

  const handleTap = useCallback((id: number) => {
    if (isLocked || tappedCells.has(id)) return;
    setTappedCells(prev => new Set(prev).add(id));
  }, [isLocked, tappedCells]);

  const cells = useMemo(() => {
    return Array.from({ length: TOTAL_CELLS }, (_, i) => (
      <GridCell
        key={i}
        id={i}
        isTapped={tappedCells.has(i)}
        onTap={handleTap}
        tappedColor={TAPPED_COLOR}
        baseColor={NEUTRAL_COLOR}
      />
    ));
  }, [handleTap, tappedCells]);

  return (
    <div className="w-1/2 h-full relative">
        <div className="grid grid-cols-9 gap-1 w-full h-full">
            {cells}
        </div>
        {isLocked && (
            <div className={`absolute inset-0 ${LOCKED_OVERLAY_COLOR} flex items-center justify-center rounded-lg`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white/50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 0 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            </div>
        )}
    </div>
  );
};
