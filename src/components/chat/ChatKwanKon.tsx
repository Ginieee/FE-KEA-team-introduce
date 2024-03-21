import React from 'react';
import ChatImage from './ChatImage';
import ChatItem from './ChatItem';

const ChatKwanKon = () => {
  return (
    <>
      <ChatImage src="img/img_kwankon_1.png" delay={0} />
      <ChatItem text="안녕하세요, 류관곤입니다 :)" color="kwankon" delay={1} />
      <ChatItem
        text="개발하고 지친 저의 모습입니다."
        color="kwankon"
        delay={2}
      />
      <ChatItem
        text="KEA도 중요하지만 잠도 중요해요."
        color="kwankon"
        delay={3}
      />
      <ChatItem text="비타 500 한잔해" color="kwankon" delay={4} />
      <ChatImage src="img/img_kwankon_2.jpg" delay={5} />
      <ChatItem
        text={`✉️ E-mail: rhks33rhs@gmail.com\n🖥 Git: https://github.com/RyuKwanKon`}
        color="kwankon"
        delay={6}
      />
    </>
  );
};

export default ChatKwanKon;
