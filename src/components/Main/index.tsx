/* eslint-disable react/no-unescaped-entities */
import * as S from './styles'

const Main = () => (
  <>
    <S.Wrapper id="about">
      <S.TextWrapper>
        <div style={{ paddingRight: 20 }}>
          <S.Description>
            Rave was the word that came up in the late 1980s to describe the
            illegal gathering of the techno and acid house subculture. In the
            1980s description, a wave of psychedelic dance music and other
            electronic music, most notably acid house, emerged from parties of
            acid house discovered in the 1980s in the Chicago area of the United
            States.
          </S.Description>
          <br />
          <S.Description>
            In the late 1980s, the word "rave" was adopted to describe a
            subculture that emerged from the acid house movement. Electro and
            techno are two genres that have largely psychedelic children and are
            considered to be the first forms of music genres of electronic dance
            using the term "rave music" in relation to its modern terminological
            use.
          </S.Description>
          <br />
          <S.Description>
            In this scenario, we know Athos, a nightclub very well frequented by
            vampires, and usually known for the event "O Abate", where humans
            are attracted to satisfy the desire of the regulars.
          </S.Description>
        </div>
        <S.Illustration src="/img/vampire-food.jpg" alt="The Atmus people" />
      </S.TextWrapper>
    </S.Wrapper>
    <S.Wrapper></S.Wrapper>
    <S.Wrapper id="bands">
      <div>
        <S.Title>Most playable Songs</S.Title>
        <S.Description>
          The most playable Atmos's night club songs selected by Mitrus Vladmar.
        </S.Description>
        <S.Frame
          src="https://open.spotify.com/embed/playlist/6qxWVMhJlGMrTOyImT30vo"
          frameBorder="0"
          allowTransparency
          allow="encrypted-media"
        />
      </div>
    </S.Wrapper>
    <S.Wrapper>
      <S.Illustration src="/img/vampire-cover.png" alt="The Atmus people" />
    </S.Wrapper>
    <S.Background>
      <S.Description>
        The scenario will be set in the late 80's, seeking to bring the birth of
        music houses, discos or raves. in a world dominated by horrifying
        creatures, vampiric sects, demons, evil spirits, all living among normal
        humans. Although, neither everyone can live under the mask of the normal
        world, there are those who are on the front lines to bring order to a
        world of chaos, or will it be what not?
      </S.Description>
    </S.Background>
    <S.Footer>
      <S.Description>
        Based on Vampire: The Masquerade Roleplay game.
      </S.Description>
    </S.Footer>
  </>
)

export default Main
