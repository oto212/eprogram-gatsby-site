import styled from 'styled-components';


const ClientsSectionWrapper =  styled.div`
    padding: 80px 0 0px 0;
    .slick-arrow{
        display: none !important;
    }
    h2{
        margin-bottom: 60px;
        text-align: center;
    }
    @media only screen and (max-width: 912px){
        padding: 0 0 80px 0;
    }
    @media only screen and (max-width: 400px){
        img{
            margin: 0 auto;
        }
    }
`

export default ClientsSectionWrapper;