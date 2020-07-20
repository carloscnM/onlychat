const app = require('express')();
const http = require('http').createServer(app);

const port = process.env.PORT || 8080;

const io = require('socket.io')(http);

const {addUser, getUser, getAllUsers, removeUser} = require('./users.js');


const MainRoom = 'MainRoom';

app.get('/', (req, res) => {
  res.send(`Servidor Socket Io em funcionamento`);
});



io.on('connection', (socket) => {

    socket.on('join', ({username}, callback) => {
      const user = addUser({ id: socket.id, name: username})

      socket.emit('message', {user: 'Room', text: `${user.name}, bem vindo ao chat livre`});
      socket.broadcast.to(MainRoom).emit('message', {user: 'Room', text: `${user.name}, se juntou`})


      socket.join(MainRoom);
      socket.broadcast.to(MainRoom).emit('newUser', user);

      let users = getAllUsers();
      socket.emit('users', users);
      
      callback();
    });
    
    socket.on('sendMessage', (message, callback) => {
      let user = getUser(socket.id);

      io.to(MainRoom).emit('message', {user: user.name, text: message})

      callback();
    });


    socket.on('disconnect', () => {
        removeUser(socket.id);
        let currentUsers = getAllUsers();
        socket.broadcast.to(MainRoom).emit('exited', currentUsers);
    });  

});



http.listen(port, () => {
  console.log('✅ listening on *:8080');
});