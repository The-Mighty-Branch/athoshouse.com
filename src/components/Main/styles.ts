import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100%;
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
  flex-direction: column;
  align-items: center;
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
  font-size: 1.5rem;
  font-weight: 400;
  color: yellow;
  word-wrap: break-word;
  width: 40rem;
  text-decoration: underline;
  margin-bottom: 2rem;
  text-align: center;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(50rem, 100%);
  border: 10px solid yellow;
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  padding: 5rem;
`
