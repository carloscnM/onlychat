import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MGB;
    display: flex;
    flex-direction: column;

    border-radius: 10px;
    margin-left: 6%;
    margin-right: 6%;

    background-color: var(--boxColor);
`;

export const SentMessages = styled.div`
    height: 80%;
    border: 1px solid var(--primary);
    margin: 2%;
    border-radius: 5px;
    padding: 2%;

    background-color: var(--primary);


    p{
        color: white;
    }

    .messageSend {
        text-align: right;
        opacity: 0.5;
    }
`;

export const InputMessage = styled.div`
    height: 20%;
    border: 1px solid var(--primary);
    margin: 2%;
    border-radius: 5px;

    background-color: var(--primary);

    form{
        display: flex;
        flex-direction: row;
        height: 100%;
        padding: 5px
    }

    textarea{
        width:80%;
        background-color: #4D5058;
        border-radius: 5px 0px 0px 5px;
        font-size: 18px;
        padding: 5px;
        color: white;

        overflow-y: scroll;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    button{
        width: 20%;
        border-radius: 0px 5px 5px 0px;
        background-color: #818899;
        opacity: 0.7;
        color: white;
        font-size: 30px;
    }

    button:hover{
        opacity: 1.0;
    }

`;