import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Logo src="/img/logotype-athos.png" />
    <S.NavWrapper>
      <S.NavItem href="#">HOME</S.NavItem>
      <S.NavItem href="#about">ABOUT</S.NavItem>
      <S.NavItem href="#bands">BANDS</S.NavItem>
      <S.NavItem href="#contact">CONTACT</S.NavItem>
    </S.NavWrapper>
  </S.Wrapper>
)

export default Header
