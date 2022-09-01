import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToshow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider/slider-badging.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider/slider-badag.jpg" alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider;

const Carousel = styled(Slider)`
    margin-top: -30px ;
    ul li button{
        &:before{
            font-size: 10px ;
            color: rgb(150,158,171) ; 
        }
    }

    li.slick-active button::before{
        color:white ;
    }

    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1 ; 
    }
`

const Wrap = styled.div`
    cursor: pointer ; 

    img{
        height: 100% ; 
        width: 100% ;
        border: 3px solid  transparent;
        border-radius: 10px;
        box-shadow : rgb(0 0 0 /69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
        transition-duration: 400ms;

        &:hover{
            border: 3px solid white ; 
        }
    }
`