import React, { useEffect, useRef, useState } from 'react';
import StartPage from '../components/StartPage';
import PhotoPage from '../components/PhotoPage';
import MemberPage from '../components/MemberPage';
import ProjectPage from '../components/ProjectPage';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainPage = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const upperContainer = useRef<HTMLDivElement>(null);
  const lastContainer = useRef<HTMLDivElement>(null);
  const memberPageContainer = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(0);
  const [isHeader, setIsHeader] = useState<boolean>(true);

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();

    if (e.deltaY <= 0) {
      setIsHeader(true);
    } else {
      setIsHeader(false);
    }

    if (page === 2) {
      console.log('page2 스크롤', e.deltaY);
      if (scrollContainer.current && e.deltaY !== 0) {
        const moveY = e.deltaY < 100 ? 100 : e.deltaY;
        scrollContainer.current.scrollTo({
          left: 0,
          top: moveY + scrollContainer.current.scrollTop,
          behavior: 'smooth',
        });
      }

      if (
        e.deltaY > 0 &&
        lastContainer.current &&
        lastContainer.current.getBoundingClientRect().bottom <
          window.innerHeight
      ) {
        setPage(3);
      }

      if (
        e.deltaY < 0 &&
        upperContainer.current &&
        upperContainer.current.getBoundingClientRect().bottom >= 0
      ) {
        setPage(1);
      }
    } else {
      if (e.deltaY > 0) {
        setPage((prev: number) => (prev === 4 ? prev : prev + 1));
      } else {
        console.log('막 스크롤');
        setPage((prev: number) => (prev === 0 ? prev : prev - 1));
      }
    }
  };

  useEffect(() => {
    if (!scrollContainer.current) return;

    console.log('page', page);
    if (page === 3 && memberPageContainer.current) {
      console.log('scroll to memberPageContainer Bottom');
      scrollContainer.current.scrollTo({
        left: 0,
        top: window.innerHeight * 2 + memberPageContainer.current.clientHeight,
        behavior: 'smooth',
      });
    } else {
      console.log('scroll to page', page);
      scrollContainer.current.scrollTo({
        left: 0,
        top: window.innerHeight * page,
        behavior: 'smooth',
      });
    }
  }, [page]);

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('wheel', wheelHandler, { passive: false });
    }, 1000);

    window.addEventListener('touchstart', () => {
      console.log('touchstart');
    });

    return () => {
      clearInterval(timer);
      window.removeEventListener('wheel', wheelHandler);
    };
  }, [page]);

  return (
    <div
      ref={scrollContainer}
      className="outer flex h-screen w-full flex-col items-center justify-start overflow-y-auto relative"
    >
      <Header opacity={isHeader} setPage={setPage} />
      <StartPage />
      <PhotoPage upperContainer={upperContainer} />
      <MemberPage
        lastContainer={lastContainer}
        memberPageContainer={memberPageContainer}
      />
      <ProjectPage />
      <Footer />
    </div>
  );
};

export default MainPage;
