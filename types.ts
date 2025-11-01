
export type GameScreenState = 'menu' | 'matchmaking' | 'countdown' | 'game' | 'results' | 'settings' | 'leaderboard';

export enum Player {
  Player1 = 'player1',
  Player2 = 'player2'
}

export interface CellState {
  id: number;
  tapped: boolean;
}
