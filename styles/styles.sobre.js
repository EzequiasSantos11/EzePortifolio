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
    .imagem-foto{
        display: flex;
        justify-content: center;
        margin-right: 3.5rem;
        position: relative;
        width: 60%;
        .seeMore{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            bottom: 7rem;
            h3{
                font-size: 24px;
            }
        }
        img{
            display: flex;
            height: 100%;
            width: 100%;
        }
    }
    .button{
        display: flex;
        flex-direction: column;
        height: 50px;
        width: 70%;
        position: absolute;
        bottom: 3rem;
        z-index: 2;
        button{
            border: 2px solid rgba(255, 255, 255, 0.6);
            &:hover{
                opacity: .8;
            }
            transition: all .3s ease;
        }

    }
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin: 30px;
    margin-bottom: 60px;
    position: relative;
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