import styled from 'styled-components';

import imgHero from 'assets/images/app/hero/hero2.png';

const BannerSectionWrapper = styled.section`
    padding: 190px 0 120px 0;
    margin: 00px 0 0 0;
    background: url(${imgHero}) no-repeat;
    background-size: 50%;
    background-position: center right 15px;
    .video {
        float:right;
        
    }
    $animation-speed: .3s;
$animation-function: ease-out;
$backdrop-color: rgba(0, 0, 0, .5);

@keyframes modal-video {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes modal-video-inner {
	from {
		transform: translate(0, 100px);
	}

	to {
		transform: translate(0, 0);
	}
}

.modal-video {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: $backdrop-color;
	z-index: 1000000;
	cursor: pointer;
	opacity: 1;
	animation-timing-function: $animation-function;
	animation-duration: $animation-speed;
	animation-name: modal-video;
	-webkit-transition: opacity $animation-speed $animation-function;
	-moz-transition: opacity $animation-speed $animation-function;
	-ms-transition: opacity $animation-speed $animation-function;
	-o-transition: opacity $animation-speed $animation-function;
	transition: opacity $animation-speed $animation-function;
}

.modal-video-effect-exit {
	opacity: 0;

	& .modal-video-movie-wrap {
		-webkit-transform: translate(0, 100px);
		-moz-transform: translate(0, 100px);
		-ms-transform: translate(0, 100px);
		-o-transform: translate(0, 100px);
		transform: translate(0, 100px);
	}
}

.modal-video-body {
	max-width: 960px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0 10px;
    display: flex;
    justify-content: center;
	box-sizing: border-box;
}

.modal-video-inner {
	display: flex;
    justify-content: center;
    align-items: center;
	width: 100%;
	height: 100%;

    @media (orientation: landscape) {
        padding: 10px 60px;
        box-sizing: border-box;
    }
}

.modal-video-movie-wrap {
	width: 100%;
	height: 0;
	position: relative;
	padding-bottom: 56.25%;
	background-color: #333;
	animation-timing-function: $animation-function;
	animation-duration: $animation-speed;
	animation-name: modal-video-inner;
	-webkit-transform: translate(0, 0);
	-moz-transform: translate(0, 0);
	-ms-transform: translate(0, 0);
	-o-transform: translate(0, 0);
	transform: translate(0, 0);
	-webkit-transition: -webkit-transform $animation-speed $animation-function;
	-moz-transition: -moz-transform $animation-speed $animation-function;
	-ms-transition: -ms-transform $animation-speed $animation-function;
	-o-transition: -o-transform $animation-speed $animation-function;
	transition: transform $animation-speed $animation-function;

	& iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}

.modal-video-close-btn {
	position: absolute;
	z-index: 2;
	top: -45px;
	right: 0px;
	display: inline-block;
	width: 35px;
	height: 35px;
	overflow: hidden;
	border: none;
	background: transparent;

    @media (orientation: landscape) {
        top: 0;
        right: -45px;
    }

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}

	&:before,
	&:after {
		content: '';
		position: absolute;
		height: 2px;
		width: 100%;
		top: 50%;
		left: 0;
		margin-top: -1px;
		background: #fff;
		border-radius: 5px;
		margin-top: -6px;
	}
}



    p{
        font-size: 16px;
        font-weight: 300; 
        margin: 0 0 40px 0;
    }
    h4{
        margin-bottom: 8px;
        font-size: 18px;
        color: ${props => props.theme.secondaryColor};
        text-transform: uppercase;
    }
    .section-title{
        h1{
            font-weight: 300;
            font-size: 60px;
            line-height: 75px;
            margin: 0 0 38px 0; 
            span{
                font-weight: 600;
            }
        }
        
    }
    .banner-btn.one{
        
        color: #fff;
        &:hover{
            background: #EEE6FA;
            color: #8A57DE;
        }
    }
    .banner-btn.two{
        background: #FFEBEC;
        color: #FB7B81;
        &:hover{
            background: #FB7B81;
            color: #fff;
        }
    }
    .banner-btn+.banner-btn{
        margin-left: 30px;
    }
    
    @media only screen and (max-width: 912px) {
        margin: 30px 0 0 0;
        background-size: 57%;
        padding: 120px 0 60px 0;
        .section-title{
            h1{
                font-size: 32px;
                line-height: 42px;
                margin: 0 0 25px 0;
            }
            h4{
                font-size: 16px;
            }
        }
        p{ 
            margin: 0 0 30px 0;
        }
        .banner-btn{
            min-width: 140px;
        }
        .banner-btn+.banner-btn{
            margin-left: 17px;
        }
     }
     @media only screen and (max-width: 760px) {
        padding: 130px 0 60px 0;
     }
     @media only screen and (max-width: 568px) {
        background: none;
        .banner-btn{
            min-width: 160px;
        }
     }
     @media only screen and (max-width: 480px) {
        padding: 120px 0 100px 0;
        .section-title{
            h1{
                font-size: 35px;
                line-height: 50px;
            }
        }
         .vintage-box{
             &:before{
                 content: none;
             }
         }
     }
     @media only screen and (max-width: 380px) {
       
        .section-title{
            h1{
                font-size: 30px;
                line-height: 46px;
                margin: 0 0 30px 0;
            }
            h4{
                font-size: 15px;
            }
        }
        .banner-btn{
            font-size: 14px;
            min-width: 127px;
            padding: 14px 12px; 
        }
        .banner-btn+.banner-btn{
            margin-left: 15px;
        }
     }
     @media only screen and (max-width: 330px) {
        .section-title{
            h1{
                font-size: 23px;
                line-height: 35px;
            }
        }
     }
     
`

export default BannerSectionWrapper;