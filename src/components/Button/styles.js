import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    height: 50px;
    width: 40%;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 400;
    background: linear-gradient(268.07deg, #630092 5.79%, #9700DE 86.84%);
    outline: none;
    border: none;
    color: var(--color-primary);
    cursor: pointer;
    border-radius: 8px;
    &:hover{
        opacity: .9;       
        transition: all ease .4s;
    }
`;