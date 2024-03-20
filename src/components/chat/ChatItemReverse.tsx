import React, { useEffect, useRef, useState } from 'react';

const ChatItemReverse = ({ text, delay }: { text: string; delay: number }) => {
  const element = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const obserberCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('ChatItem isIntersecting');
          setIsIntersecting(true);
        }
      });
    };

    const observer = new IntersectionObserver(obserberCallback, {
      threshold: 0.7,
    });

    if (element.current) {
      observer.observe(element.current);
    }
  }, []);
  return (
    <div
      ref={element}
      className={`shrink-0 w-full flex items-center justify-start transition-opacity duration-1000 ${
        isIntersecting ? 'opacity-100' : 'opacity-0'
      } ${
        delay === 0
          ? 'delay-0'
          : delay === 1
          ? 'delay-100'
          : delay === 2
          ? 'delay-200'
          : delay === 3
          ? 'delay-300'
          : delay === 4
          ? 'delay-400'
          : delay === 5
          ? 'delay-500'
          : delay === 6
          ? 'delay-600'
          : delay === 7
          ? 'delay-700'
          : 'delay-[800ms]'
      }`}
    >
      <div
        className={`shrink-0 rounded-[70px] px-8 py-3 text-2xl bg-red-100 bg-[#01CF4A]`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatItemReverse;
