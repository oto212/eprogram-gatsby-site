import styled from 'styled-components'; 

const BuyCoinWrapper = styled.div`
    padding: 20px 0 20px 0;
    position: relative;
    overflow: hidden; 
    .section__particle{
        position: absolute;
        &.one{
            right: 9%;
            top: 19%;
            height: 34px;
            width: 40px;
            transform: rotate(-45deg);
        }
        &.two{
            width: 150px;
            top: auto;
            bottom: 80px;
            left: -22px;
        }
    }
   
    .about-thumb{
        width: 100%;
        display: inline-block;
    }
    .about-text.text-one{
        font-weight: 300;
        margin-bottom: 28px;
    }
    
    .about-text.text-two{
        color: ${props => props.theme.headingColor};
        font-weight: 400;
        margin-bottom: 80px;
    }
    .section-title{
        h2{
            margin-bottom: 38px;
        }
    }


/** */
.coin__promotion__item {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background: #281e5f; */
    /* padding: 15px; */
    border-radius: 5px;
    font-weight: 600;
}

.coin__promotion__item img {
    width: 40px;
    height: 40px;
    margin-right: 20px;
}

.coin__header {
    display: flex;
    align-items: center;
}

.coin__promotion__item + .coin__promotion__item {
    margin-top: 15px;
}

.coin__promotion__item {}

.coin__promotion__item:hover {
}

.coin__promotion {
    margin-bottom: 50px;
}

.promotion__offer {
    color: #D5697D;
}
/** */











    @media only screen and (max-width: 1400px) {
        .about-thumb{
            transform: translateX(0px);
        }
        .section__particle{
            &.one{
                top: 9%;
            }
            &.two{
                bottom: -92px;
                left: -38px;
            }
        }
     }
     @media only screen and (max-width: 1024px) {
        .section__particle{
            &.one {
                top: 0%;
            }
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 100px 0 60px 0;
        .section-title h2{
            margin-bottom: 20px;
        }
        .about-text.text-two{
            margin-bottom: 30px;
        }
    }
    @media only screen and (max-width: 760px) {
        padding: 60px 0 60px 0; 
    }
    @media only screen and (max-width: 568px) {
         .section-title,
        .about-content-wrap{
            text-align: center;
        }
        .section-title{
            img{
                display: none;
            }
            h4{
                width: 100%;
            }
        }

        .col-wrapper{
            flex-direction: column-reverse;
        }
        
     }
    @media only screen and (max-width: 480px) {
        padding: 40px 0 60px 0;
    }

`
export default BuyCoinWrapper;