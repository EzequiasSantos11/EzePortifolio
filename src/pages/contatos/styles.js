import styled from "styled-components";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h4{
    font-size: 2.5rem;
    margin-bottom: 3.7rem;
  }
  `;

export const SotialMidea = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 50%;
    height: 350px;
    padding: 80px 20px;
    border-radius: 20px;
    background: rgba( 0, 0, 0, 0.4);
    position: relative;
    p{
        font-size: 1.5rem;
        position: absolute;
        top: 20px;
        left: 50px;
        width: 100%;
    }
    .oneMidea{
        display: flex;
        align-items: center;
        width: 90%;
        height: 60px;
        background: rgba( 0, 0, 0, 0.3);
        border-radius: 10px;
        padding-left: 20px;
        cursor: pointer;
        color: white;
        margin: 0 20px;
        font-weight: 700;
        &:hover{
            transform: scale(1.1);
            transition: all .4s ease;
        }
        .iconSotial{
            margin-right: 25px;
        }
    }
`;

export const WhatsIcon = styled(WhatsAppIcon)`
    fill: green;
`;

export const FaceIcon = styled(FacebookIcon)`
    fill: blue;
`;

export const InstaIcon = styled(InstagramIcon)`
    fill: brown;
`;

export const GitIcon = styled(GitHubIcon)`
    fill: #000;
    background: white;
    border-radius: 50%;
`;
