import React, {useState, useEffect} from 'react';

import IUser from './Interfaces/IUser';

import { Container } from './styles';
import { serialize } from 'v8';


interface Props {
  socket: SocketIOClient.Socket;
}

const UserList: React.FC<Props> = ({socket}) => {
  
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    socket.on('newUser', (user: IUser) => {
      setUsers([...users, user]);
    });

    socket.on('users', (users: IUser[]) =>{
      setUsers(users);
    })

    socket.on('exited', (users: IUser[]) =>{
      setUsers(users);
    })

  },[users])

  return (
    <Container>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

    </Container>
  );
}

export default UserList;