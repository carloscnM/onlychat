const users = [];

const addUser = ({id, name}) => {
    let user = {id, name};
    users.push(user);
    return user;
}

const removeUser = (id) => {
    let index = users.findIndex(user => user.id == id);

    if(index != -1){
        return users.splice(index, 1)[0];
    }
} 


const getUser = (id) => users.find(user => user.id == id);

const getAllUsers = () => users;

module.exports = {addUser, getUser, getAllUsers, removeUser};