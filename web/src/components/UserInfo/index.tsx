import React from 'react';


import { Container } from './styles';


interface Props {
    user: string;
}

const UserInfo: React.FC<Props> = (user) => {
  return (
    <Container>
        <h1>{user.user}</h1>
    </Container>
  );
}

export default UserInfo;