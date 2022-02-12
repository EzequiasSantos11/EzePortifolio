import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .button{
        width: 40%;
        height: 50px;
    }
`;

export const Background = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.8;
    img{
        height: 100%;
        width: 100%;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    width: 60%;
    background: rgba( 0, 0, 0, 0.6);
    padding: 30px;
    border-radius: 20px;
    h1{
        font-size: 52px;
        font-weight: 700;
    }
    p{
        font-size: 24px;
        font-weight: 300;
        width: 80%;
        margin: 40px 0;
        margin-top: 20px;
    }
`;