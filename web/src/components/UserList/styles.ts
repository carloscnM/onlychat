import styled from 'styled-components';

export const Container = styled.div`
    grid-area: UL;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 10px;
    padding: 20px 0px;
    margin-left: 12%;
    margin-right: 12%;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    background-color: var(--boxColor);

    h1{
        margin-bottom: 8px;
    }

    ul{
        text-align: center;
        list-style-type: none;
    }

    li{
        background-color:var(--text); 
        border-radius: 5px;
        padding: 2px;
        margin-bottom: 5px;
        opacity: 0.3;
    }

    li:hover{
        opacity: 0.8;
    };
`;

