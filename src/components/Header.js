import React from 'react'
import styled from 'styled-components';

function Header() {

    return (
        <Nav>
            <Logo src='/images/logo.svg' />
            <NavMenu >
             {/* eslint-disable  */}
                <a>
                    <img src="/images/icons/home-icon.svg" alt="home-icon" />
                    <span>HOME</span>
                </a>

                <a>
                    <img src="/images/icons/search-icon.svg" alt="search-icon" />
                    <span>SEARCH</span>
                </a>

                <a>
                    <img src="/images/icons/watchlist-icon.svg" alt="watchlist-icon" />
                    <span>WATCHLIST</span>
                </a>

                <a>
                    <img src="/images/icons/original-icon.svg" alt="original-icon" />
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <img src="/images/icons/movie-icon.svg" alt="movie-icon" />
                    <span>MOVIES</span>
                </a>

                <a>
                    <img src="/images/icons/series-icon.svg" alt="series-icon" />
                    <span>SERIES</span>
                </a>
            </NavMenu>

            <UserImage src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/30-512.png" alt='user-icon' />
        </Nav>
    )
}

export default Header;

// creating a custom div with javascript 
const Nav = styled.nav`
    height:70px ; 
    background: #090b13 ; 
    display: flex ;
    align-items: center;
    padding: 0 36px ;
    overflow: hidden ;
`

const Logo = styled.img`
    width:80px ; 
`

const NavMenu = styled.div`
    display :flex ;
    flex: 1;
    margin: 20px ;
    align-items: center ;

    a{
        display: flex ;
        align-items: center ;
        padding: 0 12px ;
        cursor:pointer ;
        img{
            margin: 8px ;
            height: 20px ;
        }

        span{
            font-family: "Roboto","HelveticaNeue-Light",sans-serif;
            font-size: 13px ;
            letter-spacing: 1.42px;
            position: relative ;

            &:after{
                content: "" ; 
                height: 2px ; 
                background: white ;
                position: absolute ;
                left:0 ;
                right: 0 ;
                bottom: -6px ;
                opacity: 0 ;
                transform: scaleX(0) ; 
            }
        }
        
        &:hover{
            span:after{
                transition: transform 0.25s ease-out;
                transform-origin : center ; 
                transform: scaleX(1) ; 
                opacity: 1 ; 
            }
        }
    }
`
const UserImage = styled.img`
    width: 48px ; 
    height: 48px ;
    border-radius: 50% ; 
    cursor: pointer ; 
`