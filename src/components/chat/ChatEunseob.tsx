import React from 'react';
import ChatImage from './ChatImage';
import ChatItem from './ChatItem';

const ChatEunseob = () => {
  return (
    <>
      <ChatImage src="img/img_eunseob_1.png" delay={0} />
      <ChatItem text="안녕하세요 이은섭입니다." color="eunseob" delay={1} />
      <ChatItem
        text="저는 다이어트 8952일차 개발자입니다."
        color="eunseob"
        delay={2}
      />
      <ChatItem
        text="개발에 지치셨나요? 인생이 힘드신가요?"
        color="eunseob"
        delay={3}
      />
      <ChatItem text="그래도 킵고잉~" color="eunseob" delay={4} />
      <ChatItem
        text={`✉️ E-mail: dldmstjq99@gmail.com\n🖥 Git: https://github.com/MinchoGreenT`}
        color="eunseob"
        delay={5}
      />
    </>
  );
};

export default ChatEunseob;
