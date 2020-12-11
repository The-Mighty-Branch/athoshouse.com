import styled from 'styled-components'

export const Wrapper = styled.div`
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkred;
`

export const Logo = styled.img`
  width: 35rem;
  margin-bottom: 2rem;
`

export const NavWrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  text-align: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export const NavItem = styled.a`
  color: #fff;
  width: 30rem;
  font-size: 2rem;
  text-decoration: none;
  font-weight: bolder;
  padding: 1rem;
  margin-right: 1rem;

  :hover {
    color: yellow;
    text-decoration: underline;
  }
`
