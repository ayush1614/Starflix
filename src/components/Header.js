import React from 'react'
import styled from 'styled-components';

function Header() {

    return (
        <Nav>
            <Logo src='/images/logo.svg' />
            <NavMenu >
                <a href='/'>
                    <img src="/images/icons/home-icon.svg" alt="home-icon" />
                    <span>HOME</span>
                </a>

                <a href="/">
                    <img src="/images/icons/search-icon.svg" alt="search-icon" />
                    <span>SEARCH</span>
                </a>

                <a href="/">
                    <img src="/images/icons/watchlist-icon.svg" alt="watchlist-icon" />
                    <span>WATCHLIST</span>
                </a>
            </NavMenu>
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
`

const Logo = styled.img`
    width:80px ; 
`

const NavMenu = styled.div`
    display :flex ;

    a{
        display: flex ;
        text-decoration: none ; 
        color:white;
        align-items: center ;
        padding: 0 12px ;

        img{
            height: 20px ;
        }

        span{
            font-size: 13px ;
            letter-spacing: 1.42px
        }
    }
`