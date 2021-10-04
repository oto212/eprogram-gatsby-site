import styled from 'styled-components';
import FooterBG from 'assets/images/crypto/footer-bg.png';

const FotterWrapper = styled.footer`
  padding-top: 250px;
  padding-bottom: 45px;
  background: url(${FooterBG});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .section__particle{
      position: absolute;
      &.one{
          left: 0;
          top: 20%;
          width: 270px;
      }
  }
  ul{
    padding: 0;
    list-style: none;
    margin: 0;
    li a {
      color: ${props => props.theme.white};

      &:hover{
          color: ${props => props.theme.primaryColor};
      }
    }
  }
  p{
    font-size: 18px;
    line-height: 38px;
    color: ${props => props.theme.white};
  }
  a{
    transition: 450ms all;
    color: ${props => props.theme.white};
    &:hover {
      color: ${props => props.theme.headingColor};
    }
  }
  .footer-logo {
    margin-bottom: 15px;
    display: block;
  }
  .footer-widgets {
    &.first {
      margin-top: -10px;
    }
  }
  .footer-widgets {
    .widget-title {
      color: ${props => props.theme.white};
      font-size: 24px;
      margin-bottom: 35px;
    }
    .info {
      font-size: 18px;
      line-height: 38px;
      margin-bottom: 32px;
      li {
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
          color: ${props => props.theme.white};
        }
      }
    }
    .social{
      li {
        display: inline-block;
        a {
          display: block;
          height: 60px;
          width: 60px;
          line-height: 60px;
          border-radius: 8px;
          border: 1px solid ${props => props.theme.textColor};
          text-align: center;
          transition: 450ms all;
          &:hover {
            color: ${props => props.theme.white};
            border-color: ${props => props.theme.primaryColor};
            background: ${props => props.theme.primaryColor};
          }
        }
      }
      li + li {
        margin-left: 30px;
      }
    }
    .widget-catagory {
      li {
        a {
          font-size: 18px;
          line-height: 22px;
        }
      }
      li + li {
        margin-top: 15px;
      }
    }
  }
  .footer-bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    margin-top: 100px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    .footer-menu{
      order: 2;
      li {
        display: inline-block;
        font-size: 18px;
      }
      li + li{
        margin-left: 40px;
      }
    }
    p{
      order: 1;
      margin: 0;
    }
  }
  @media only screen and (max-width: 1600px) {
    .section__particle{
      &.one{
          display: none;
      }
    } 
  }
  @media only screen and (max-width: 1280px) { 
    .footer-widgets {
      .social {
        li + li {
          margin-left: 15px;
        }
      }
    }
  }
  @media only screen and (max-width: 912px) {
    background-position: -200px; 
    .footer-widgets {
      margin-bottom: 70px;
    }
    .footer-bottom {
      display: block;
      margin-top: 30px;
     .footer-menu {
        margin-bottom: 40px;
      }
      .footer-menu,
      .copyright-text {
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 568px) {
    background-position: 10%;
    text-align: center;
    .footer-widgets {
      .info {
        li {
          justify-content: center;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .footer-bottom {
      .footer-menu {
        li {
          display: block;
        }
        li + li {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    }
  }
`;

export default FotterWrapper;
