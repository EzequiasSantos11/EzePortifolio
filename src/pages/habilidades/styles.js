import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 3rem;
    background: #020203;
    position: relative;
    .title{
        position: absolute;
        top: 6rem;
        font-size: 28px;

    }
`;
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    height: 50%;
    width: 90%;
    max-width: 980px;
    margin: 0 auto;
    grid-gap: 40px;
`;
export const Card = styled.div`
    display: flex;
    height: 100%;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    h2{
        position: absolute;
        top: 1.5rem;
    }
    img{
        height: 100%;
        width: 100%;
    }
    .text{
        position: absolute;
        text-align: center;
        margin-top: -40px;
        width: 80%;
       
    }    
    .button{
        position: absolute;
        bottom: 15%;
        height: 35px;
        width: 60%;
    }
`;