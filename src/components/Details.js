import React from 'react'
import styled from 'styled-components';

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="background" />
            </Background>

            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="image_title" />
            </ImageTitle>

            <Controls>
                <PlayButton>
                    <img src="/images/icons/play-icon-black.png" alt="black_play_button" />
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src="/images/icons/play-icon-white.png" alt="white-play-button" />
                    <span>TRAILER</span>
                </TrailerButton>

                <WatchlistButton>
                    <span>+</span>
                </WatchlistButton>

                <WatchPartyButton>
                    <img src="/images/icons/group-icon.png" alt="group-watch" />
                </WatchPartyButton>

            </Controls>

            <Subtitle>
                2018 &#8226; 7 min &#8226; English &#8226; Family , Fantasy , Kids , Animation 
            </Subtitle>
            <Description>
            An ageing Chinese mom gets another chance at motherhood when one of her dumplings springs to life as a lively, giggly dumpling boy.
            </Description>
        </Container>
    )
}

export default Details;

const Container = styled.div`
    min-height: calc(100vh-70px) ;
    padding: 0 calc(3.5vw + 5px) ;
    position: relative ;
`
const Background = styled.div`
    position: fixed ; 
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8 ;

    img{
        height: 100% ; 
        width: 100% ;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh ;
    width: 35vh ;
    img{
        height: 100% ;
        width: 100% ; 
        object-fit: contain;
    }
`
const Controls = styled.div`
    display:flex ; 
    align-items: center;
`
const PlayButton = styled.button`
    display: flex ;
    align-items:center ;
    font-size: 15px;
    padding: 0px 24px ;
    letter-spacing: 1.8px ;
    border-radius: 4px;
    border: none ;
    margin-right: 22px ;
    height: 56px ;
    background: rgb(249,249,249);
    cursor: pointer;
    transition: 500ms;

    &:hover{
        background: rgb(198,198,198)
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3) ;
    color: rgb(249,249,249) ; 
    border: 1px solid rgb(249,249,249) ; 
    
`
const WatchlistButton = styled.button`
    width: 44px;
    height: 44px;
    background: rgba(0,0,0,0.6);
    border-radius: 50% ; 
    border: 2px solid white ;
    display: flex;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    margin-right: 16px;

    span{
        font-size: 30px;
        color: white ; 
    }

    transition: 250ms;
    &:hover{
        background: rgb(198,198,198)
    }
`
const WatchPartyButton = styled(WatchlistButton)`
    background: rgb(0,0,0) ;
`

const Subtitle = styled.div`

`
const Description = styled.div`

`

