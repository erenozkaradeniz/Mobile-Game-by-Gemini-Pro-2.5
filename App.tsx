
import React, { useState, useEffect } from 'react';
import { GameScreenState, Player } from './types';
import { MainMenu } from './components/MainMenu';
import { GameScreen } from './components/GameScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';

const MatchmakingScreen: React.FC<{ onMatchFound: () => void }> = ({ onMatchFound }) => {
  useEffect(() => {
    const timer = setTimeout(onMatchFound, 2500);
    return () => clearTimeout(timer);
  }, [onMatchFound]);

  return (
    <div className="flex flex-col h-full w-full items-center justify-center p-8">
      <div className="w-16 h-16 border-4 border-t-cyan-400 border-gray-700 rounded-full animate-spin mb-6"></div>
      <h2 className="text-2xl font-bold text-white">Rakip Aranıyor...</h2>
    </div>
  );
};

const CountdownScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [count, onFinish]);

  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div key={count} className="text-9xl font-black text-white animate-ping-pong">
        {count > 0 ? count : 'GO!'}
      </div>
      <style>{`
        @keyframes ping-pong {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-ping-pong {
          animation: ping-pong 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

function App() {
  const [screen, setScreen] = useState<GameScreenState>('menu');
  const [winner, setWinner] = useState<Player | null>(null);
  
  // For this local two-player game, we'll arbitrarily assign player 1 as the "local" player.
  const localPlayer = Player.Player1;

  const handleNavigate = (newScreen: GameScreenState) => {
    setScreen(newScreen);
  };

  const handleGameEnd = (winningPlayer: Player) => {
    setWinner(winningPlayer);
    setScreen('results');
  };

  const handlePlayAgain = () => {
    setWinner(null);
    setScreen('countdown');
  };

  const handleFindNewMatch = () => {
    setWinner(null);
    setScreen('menu');
  };

  const renderScreen = () => {
    switch (screen) {
      case 'menu':
        return <MainMenu onNavigate={handleNavigate} />;
      case 'matchmaking':
        return <MatchmakingScreen onMatchFound={() => setScreen('countdown')} />;
      case 'countdown':
        return <CountdownScreen onFinish={() => setScreen('game')} />;
      case 'game':
        return <GameScreen onGameEnd={handleGameEnd} />;
      case 'results':
        return <ResultsScreen winner={winner} localPlayer={localPlayer} onPlayAgain={handlePlayAgain} onFindNewMatch={handleFindNewMatch} />;
      case 'settings':
        return <SettingsScreen onNavigate={handleNavigate} />;
      case 'leaderboard':
        return <LeaderboardScreen onNavigate={handleNavigate} />;
      default:
        return <MainMenu onNavigate={handleNavigate} />;
    }
  };

  return (
    <main className="h-screen w-screen max-w-md mx-auto bg-gray-900 overflow-hidden">
        <div className="h-full w-full relative">
            {renderScreen()}
        </div>
    </main>
  );
}

export default App;
