import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #000;
  color: #fff;
  padding: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`

export const TextWrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: red;
  text-decoration: underline;
`

export const Description = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: #fff;
  word-wrap: break-word;
  /* width: 80rem; */
  margin-bottom: 2rem;
  text-align: start;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`

export const Illustration = styled.img`
  margin-top: 3rem;
  margin-bottom: 2rem;
  width: min(50rem, 100%);
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #000;
  padding: 5rem;
`

export const Frame = styled.iframe`
  width: 600px;
  height: 380px;

  @media (max-width: 800px) {
    width: 350px;
  }
`

export const Footer = styled.footer`
  height: 50px;
  background-color: darkred;
  padding: 10px;
`
