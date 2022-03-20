import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 8rem;
  background: #020203;
  position: relative;
  .title{
    position: absolute;
    top: 6rem;
    font-size: 20px;
  }
  .wrapper{
    display: flex;
    height: 80%;
    width: 90%;
    max-width: 980px;
    margin: 0 auto;
    object-fit: cover;
    z-index: 1;
    border-radius: 30px;
    .destaque{
      display: flex;
      overflow: hidden;
      height: 100%;
      width: 60%;
      background: rgba( 55, 55, 55, 0.3);
      margin-right: 10px;
      border-radius: 20px;
      img{
        height: 70%;
        width: 100%;
      }
      &:hover{
        transform: scale(1.04);
        cursor: pointer;
        transition: all 0.3s ease;
      }
    }
    .projetos{
      display: grid;
      height: 100%;
      width: 90%;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 10px;
      .projeto{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background: rgba( 55, 55, 55, 0.3);
        border-radius: 10px;
        overflow: hidden;
        object-fit: cover;
        a, img{
          height: 100%;
          width: 100%;
        }
        &:hover{
          transform: scale(1.05);
          cursor: pointer;
          transition: all 0.3s ease;
        }
      }
    }
  }
`;