import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';
import { Container, SentMessages,  InputMessage} from './styles';

import IMessage  from './Interfaces/Message';

interface Props {
  socket: SocketIOClient.Socket;
}

const MessageBox: React.FC<Props> = ({socket}) => {

  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const username = localStorage.getItem('username');


  useEffect(() => {
    if(socket){
        socket.on('message', (data: IMessage) => {
            setMessages([...messages, data])
        });
    }
    
  }, [messages])

  function handlerInputChanger(event: ChangeEvent<HTMLTextAreaElement>){
    setInputMessage(event.target.value);
  }

  function handlerSubmit(event: FormEvent){
    event.preventDefault();
    if(inputMessage.length > 0 && socket){
      socket.emit('sendMessage', inputMessage, () => setInputMessage(''));
    }
  }

  return (
    <Container>

      <SentMessages>
        {messages.map(msg => (
          <p key={Math.random()}  className={username === msg.user ? 'messageSend' : ''} ><strong>{msg.user}: </strong>{msg.text}</p>
        ))}
      </SentMessages>

      <InputMessage> 
        <form onSubmit={handlerSubmit}>
          <textarea value={inputMessage} onChange={handlerInputChanger}></textarea>
          <button type="submit">Enviar</button>
        </form>
      </InputMessage>
      
    </Container>
  );
}

export default MessageBox;