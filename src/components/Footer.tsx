import React from 'react';
import { ReactComponent as Logo } from '../assets/logo_original.svg';
import { ReactComponent as Insta } from '../assets/icon_instagram.svg';
import { ReactComponent as Email } from '../assets/icon_email.svg';
import { ReactComponent as Github } from '../assets/icon_github.svg';
import { ReactComponent as Discord } from '../assets/icon_discord.svg';

const Footer = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center bg-footer gap-y-4 shrink-0">
      <Logo className="w-full max-w-[200px] h-auto" />
      <div className="flex items-center justify-center gap-x-20 py-4">
        <Insta />
        <Email />
        <Github />
        <Discord />
      </div>
      <div className="text-xl mt-4">ⓒ Bootstrap, 2024 All rights reserved</div>
    </div>
  );
};

export default Footer;
