import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
`;
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    padding: 10px;
    border-radius: 5px;
    background: rgba( 255, 255, 255, 0.4);
`;