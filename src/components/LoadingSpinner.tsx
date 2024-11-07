import { useEffect, useState } from 'react';

function LoadingSpinner() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="text-6xl animate-bounce mb-4">🎵</div>
      <div className="text-2xl font-bold relative w-32 text-center text-gray-900 dark:text-white">
        Loading
        <span className="absolute">
          {'.'.repeat(dots)}
        </span>
      </div>
      <div className="mt-8">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-zinc-700 border-t-green-500 animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner; 