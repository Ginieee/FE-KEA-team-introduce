import React from 'react';
import ChatImage from './ChatImage';
import ChatItem from './ChatItem';

const ChatJinyoung = () => {
  return (
    <>
      <ChatImage src="img/img_jinyoung_1.png" delay={0} />
      <ChatItem
        text="달디달고 달디달고 달디단 밤양갱도 gang이다"
        color="jinyoung"
        delay={1}
      />
      <ChatItem text="안녕하세요, 오진영입니다." color="jinyoung" delay={2} />
      <ChatItem
        text="다들 개발하며 지치고 힘들 땐"
        color="jinyoung"
        delay={3}
      />
      <ChatItem
        text="비비의 밤양갱 한 곡 어떠신가요?"
        color="jinyoung"
        delay={4}
      />
      <ChatItem
        text="아 참, 이메일은 ojy09291@naver.com"
        color="jinyoung"
        delay={5}
      />
      <ChatItem
        text="깃허브 닉네임은 OJOJIN 이에요"
        color="jinyoung"
        delay={6}
      />
    </>
  );
};

export default ChatJinyoung;
