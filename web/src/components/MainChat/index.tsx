import React, {useState, useEffect} from 'react';

import {Grid} from './styles';

import UserList from '../UserList';
import MessageBox from '../MessageBox';
import UserInfo from '../UserInfo';

import io from 'socket.io-client';
import configIo from '../../config/SocketApi.json'

import NewUserModal from '../Modal/NewUser';

const ENDPOINT = process.env.URLAPI || configIo.ENDPOINT;

const MainChat: React.FC = () => {
    let registeredUsername = localStorage.getItem('username');

    const [socket] = useState<SocketIOClient.Socket>(io(ENDPOINT));

    const [username, setUsername] = useState<string>(registeredUsername ? registeredUsername : '');
    const [usernameInputModal, setUsernameInputModal] = useState<string>('');
    const [modalNewUsernameActive, setModalNewUsernameActive] = useState<boolean>(registeredUsername ? false : true)


    useEffect(() => {
        if(username.length > 0){
            socket.emit('join', {username}, () => {

            });
        }
    }, [username]);
    
    


    function handleSaveUsernameModal(){
        if(usernameInputModal.length > 2){
            setUsername(usernameInputModal);
            localStorage.setItem('username', usernameInputModal);
            setModalNewUsernameActive(false);
            return;
        }
        alert('Username deve ter no mínimo 3 carateres');
    }

    

    return (
        <Grid>
            <NewUserModal isOpen={modalNewUsernameActive} setUsernameInput={setUsernameInputModal} Closed={handleSaveUsernameModal}/>
            <UserList socket={socket} />
            <UserInfo user={username.toString()}/>
            <MessageBox socket={socket}/>
        </ Grid>
    );
};

export default MainChat;