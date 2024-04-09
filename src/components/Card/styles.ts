import styled from "styled-components";


export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 30rem;
  max-width: 96%;
  height: auto;
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.1);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    > img {
      width: 13rem;
      height: 13rem;
      border-radius: 50%;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      
      border: 3px solid #fff;
    }

    > h1 {
      color: #fff;
      font-size: 1.4rem;
      font-weight: 600;
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;

    margin-top: 1.5rem;

    > a {
      display: flex;
      justify-content:  center;
      align-items: center;
      gap: 1rem;

      width: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;

      border: 3px solid #fff;


      text-decoration: none;
      color: #fff;
      font-size: 1.4rem;
      font-weight: 700;

      > svg {
        font-size: 2rem;
      }
    }
  }
`;