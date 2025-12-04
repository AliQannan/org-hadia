import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  // Target date: Jan 1, 2025
  const targetDate = new Date('2025-01-01T00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-6 h-6 animate-pulse" />
        <h3 className="text-xl font-bold">ينتهي التسجيل خلال</h3>
      </div>
      <div className="grid grid-cols-4 gap-4 text-center" dir="ltr">
        <div className="bg-white/20 rounded-lg p-2">
          <span className="block text-3xl font-bold">{timeLeft.days}</span>
          <span className="text-xs">يوم</span>
        </div>
        <div className="bg-white/20 rounded-lg p-2">
          <span className="block text-3xl font-bold">{timeLeft.hours}</span>
          <span className="text-xs">ساعة</span>
        </div>
        <div className="bg-white/20 rounded-lg p-2">
          <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
          <span className="text-xs">دقيقة</span>
        </div>
        <div className="bg-white/20 rounded-lg p-2">
          <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
          <span className="text-xs">ثانية</span>
        </div>
      </div>
      <p className="text-center mt-4 text-sm bg-red-900/50 py-1 px-3 rounded-full inline-block w-full">
        الفترة: 8/12 - 1/1/2025
      </p>
    </div>
  );
};

export default CountdownTimer;