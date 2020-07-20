import React, {ChangeEvent} from 'react';
import Modal from 'react-modal';



import './styles.css';

interface Props {
    isOpen: boolean;
    setUsernameInput: (string:string) => void;
    Closed: () => void;
}

const NewUserModal: React.FC<Props> = ({isOpen, setUsernameInput, Closed}) => {

    function handlerInputChanger(event: ChangeEvent<HTMLInputElement>){
      setUsernameInput(event.target.value);
    }

    return (
        
        <Modal
          isOpen={isOpen}
          onRequestClose={Closed}
          contentLabel="Example Modal"
          className="contentModal"
        >
          <div>
            <input type="text" placeholder="username" onChange={handlerInputChanger}/>
            <button onClick={Closed}>Salvar</button> 
          </div>   
        </Modal>
      
    );
}


export default NewUserModal;