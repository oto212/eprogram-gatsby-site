import styled from 'styled-components';

const ContactWrapper = styled.div`
    
    padding: 100px 0 200px 0;
    overflow: hidden;
    align-items: center;
    form{
        text-align: center;
        text-align: center;
        background: #fbfbfb;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px;
        border-radius: 10px;
        background: #3B389E;
        box-shadow: 0 0 15px ${props => props.theme.primaryColor};
    }
    input{
        display: block;
        color: ${props => props.theme.white};
        padding: 15px;
        width: 80%;
        height: 60px;
        font-size: 16px;
        border-radius: 5px;
        margin: 0 auto 0px auto;
        box-shadow: none;
        border: 1px solid transparent;
        background: rgb(63 69 171);
        transition: 450ms all;
        &:hover,&:focus{
            border-color: #42469a;
        }
    }
    button{
        transition: 450ms all;
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.white};
        font-size: 16px;
        height: 58px;
        &:hover{
            opacity: .7;
        }
    }
    .section-title{
        h2{
            margin-bottom: 55px;
        }
    }
    @media only screen and (max-width: 912px) {
        padding: 0px 0 80px 0;
        form{
            padding: 50px;
            input{
                width: 70%;
            }
        }

    }
    @media only screen and (max-width: 568px) {
        form{
            padding: 30px;
            display: block;
            input{
                width: 100%;
                margin-bottom: 30px;
            }
        }
    }
    @media only screen and (max-width: 480px) {
        form{
            padding: 30px 15px;
            input{
                width: 100%;
            }
        }
    }
    
`

export default ContactWrapper;