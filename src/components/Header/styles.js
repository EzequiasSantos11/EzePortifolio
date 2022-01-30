import styled from "styled-components";

export const Container = styled.div`
    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 75px;
        width: 100%;
        background: #141414;
        position: fixed;
        z-index: 999;
        nav, ul{
            display: flex;
            li{
                font-size: 16px;
                line-height: 20px;
                font-weight: 500;
                margin: 0 15px;
                cursor: pointer;
            }
        }
    }

`;