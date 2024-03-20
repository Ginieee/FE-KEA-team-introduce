import React from 'react';
import { ReactComponent as Logo } from '../assets/logo_original.svg';

const Header = ({
  opacity,
  setPage,
}: {
  opacity: boolean;
  setPage: (page: number) => void;
}) => {
  return (
    <div
      className={`w-full flex items-center justify-between fixed px-20 phone:hidden transition-opacity duration-1000 ${
        opacity ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Logo className="w-[10%] h-auto py-4" />
      <div className="flex items-center justify-end gap-x-7 text-[#999999]">
        <div
          className="cursor-pointer hover:text-white"
          onClick={() => setPage(0)}
        >
          About
        </div>
        <div
          className="cursor-pointer hover:text-white"
          onClick={() => setPage(1)}
        >
          Photo
        </div>
        <div
          className="cursor-pointer hover:text-white"
          onClick={() => setPage(2)}
        >
          Members
        </div>
        <div
          className="cursor-pointer hover:text-white"
          onClick={() => setPage(3)}
        >
          Project
        </div>
        <div
          className="cursor-pointer hover:text-white"
          onClick={() => setPage(4)}
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Header;
