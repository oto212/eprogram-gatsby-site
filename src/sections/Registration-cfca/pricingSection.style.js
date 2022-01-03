import styled from 'styled-components';

const PricingSectionWrapper = styled.section`
    padding: 90px 0 108px 0;
    overflow: hidden;
    position: relative;
    .section__particle{
        position: absolute;
        &.one{
            width: 190px;
            left: -5%;
            bottom: 0px;
        }
        &.two{
            width: 144px;
            top: 27%;
            right: -4%;
        }
    }
    .domain-search-block{
        .search-box{
            position: relative;
            width: 90%;
            margin-right:auto;
            margin-left:auto;
        }
        input{
            height: 70px;
            margin-bottom:10px
            border:none;
            background: #fff;
            width: 100%;
            padding: 20px 30px;
            font-size: 18px;
            border-radius: 50px;
            box-shadow: rgba(206, 206, 206, 0.78) 0px 1px 23px -8px;
        }
        .src-btn{
            position: absolute;
            top: 0;
            right: -1px;
            width: 126px;
            min-width: auto;
            height: 80px;
            line-height: 80px;
            border-radius: 50px;
            background: ${props => props.theme.primaryColor};
            color: #fff;
            svg{
                font-size: 30px;
                color: #fff;
            }
        }
        .domain-extention-block{
         
            margin-top: 20px;
            text-align: center;
            span{
                cursor: pointer;
                height: 60px;
                width: 80px;
                display: inline-block;
                border-radius: 8px;
                box-shadow:  rgba(206, 206, 206, 0.78) 0px 1px 23px -8px;
                font-size: 15px;
                text-align: center;
                line-height: 60px;
            }
            span+span{
                margin-left: 20px;
            }
            .com{
                color: #E7A8CA;
                box-shadow:  rgba(231, 168, 202, 0.78) 0px 1px 23px -8px;
            }
            .org{
                color: #A29BFE;
                box-shadow:  rgba(162, 155, 254, 0.78) 0px 1px 23px -8px;
            }
            .net{
                color: #0984E3;
                box-shadow:  rgba(9, 132, 227, 0.78) 0px 1px 23px -8px;
            }
            .dev{
                color: #AD62AA;
                box-shadow:  rgba(173, 98, 170, 0.78) 0px 1px 23px -8px;
            }
            .xyz{
                color: #413C69;
                box-shadow:  rgba(65, 60, 105, 0.78) 0px 1px 23px -8px;
            }
        }
    }
    .pricing-block{
        padding: 60px 60px 55px 60px;
        border: 1px solid ${props => props.theme.primaryLightColor};
        box-shadow: 0 0 40px ${props => props.theme.shadowColor};
        border-radius: 5px;
        position: relative;
        text-align: center;
        transition: all 0.3s ease-in;
        &:hover{
            border-color: ${props => props.theme.primaryColor};
            .thumb-block{
                border-color: ${props => props.theme.primaryColor};
            }
            .pricing-btn{
                opacity: 1;
            }
        }
    }
    .thumb-block{
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(112,112,112,0.3);
        transition: all 0.3s ease-in;
    }
    .price-block{
        text-align: center;
        padding: 40px 0 23px 0;
        h3{
            font-size: 36px;
            font-weight: 600;
            margin: 0 0 10px 0; 
        }
        p{
            font-size: 18px;
            margin-bottom: 0;
        }
    }
    .price-block ~ p{
        margin-top: 0;
        margin-bottom: 22px;
        text-align: center;
    }
    .details-block{
        text-align: left;
        span{
            color: ${props => props.theme.headingColor};
            font-weight: 300;
            display: flex;
            align-items: center;
            svg{
                fill: ${props => props.theme.textColor};
                margin-right: 20px;
            }
        }
        .off{
            svg{
                fill: ${props => props.theme.secondaryColor};
            }
        }
        span+span{
            margin-top: 2px;
        }
    }
    .pricing-btn{
        font-size: 15px;
        color: #fff;
        padding: 15px 20px;
        margin: 0 auto;
        position: absolute;
        text-align: center;
        bottom: -23px;
        left: 0;
        right: 0;
        opacity: 0;
        transition: all 0.3s ease-in;
        background: rgb(251,123,129);
        background: -moz-linear-gradient(left,  rgba(251,123,129,1) 0%, rgba(254,191,179,1) 100%);
        background: -webkit-linear-gradient(left,  rgba(251,123,129,1) 0%,rgba(254,191,179,1) 100%);
        background: linear-gradient(to right,  rgba(251,123,129,1) 0%,rgba(254,191,179,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fb7b81', endColorstr='#febfb3',GradientType=1 );

    }
    @media only screen and (max-width: 1280px) {
        padding: 90px 0 210px 0;
        
        .pricing-block{
            padding: 40px 15px 35px 15px;
        }
        .section__particle{
            &.one{
                bottom: 0px;
            }
            &.two{
                display: none;
            }
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 50px 0 35px 0;
        .section__particle{
            &.one {
                bottom: -122px;
            }
        }
        .pricing-block{
            margin-bottom: 40px;
            padding: 40px 30px 35px 30px;
        }
    }
    @media only screen and (max-width: 480px) {
        .pricing-block{
            margin: 0 15px 40px 15px;
            padding: 40px 15px 35px 15px;
        }
    }
    
    
`

export default PricingSectionWrapper;