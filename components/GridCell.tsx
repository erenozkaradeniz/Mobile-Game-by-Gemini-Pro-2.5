
import React from 'react';

interface GridCellProps {
  id: number;
  isTapped: boolean;
  onTap: (id: number) => void;
  baseColor: string;
  tappedColor: string;
}

const GridCellComponent: React.FC<GridCellProps> = ({ id, isTapped, onTap, baseColor, tappedColor }) => {
  return (
    <div
      onClick={() => onTap(id)}
      className={`rounded-sm transition-colors duration-75 ${isTapped ? tappedColor : baseColor}`}
    />
  );
};

export const GridCell = React.memo(GridCellComponent);
