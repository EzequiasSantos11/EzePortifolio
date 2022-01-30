import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 3.5rem;
    background: linear-gradient(to top, #000 50%,  #800080 90%);
`;
export const Wrapper = styled.div`
    display: flex;
    height: 80%;
    width: 80%;
    background: rgba( #121212, #121212, #121212, 0.4);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 20px;
    position: relative;
    .imagem-foto{
        display: flex;
        background: #800080;
        margin-right: 30px;
        padding: 0 20px;
        border-bottom-left-radius: 30%;
        border-bottom-right-radius: 30%;
        img{
            display: flex;
            height: 80%;
            border-radius: 50%;
        }
    }
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin: 30px;
    h2{
        font-size: 52px;
        font-weight: 700;
        padding: 0 30px;

    }
    p{
        font-size: 24px;
        font-weight: 300;
        margin: 20px 0;
        padding: 0 30px;
    }
`;