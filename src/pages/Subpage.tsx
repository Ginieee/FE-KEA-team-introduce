import React, { useEffect } from 'react';

const Subpage = () => {
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          const scrollValue = document.documentElement.scrollTop;
          console.log(scrollValue);
        }, 500);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center overflow-y-auto">
      <div className="w-full bg-eojin h-screen shrink-0">01</div>
      <div className="w-full bg-jiyoung h-screen shrink-0">01</div>
      <div className="w-full bg-jinyoung h-screen shrink-0">01</div>
    </div>
  );
};

export default Subpage;
