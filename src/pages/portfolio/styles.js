import styled from "styled-components";

export const PortfolioCard = styled.div`
margin-top: 50px;
/* margin-left: 400px; */
h1{
    color: #173B6C;
    font-size: 50px;
    padding-left: 20px;
}
hr{
    width: 100px;
    height: 3px;
    background-color: #149DDD;
    margin-right: 1100px;
    margin-left: 20px;
}
h2{
    color: #173B6C;
    font-size: 40px;
    padding-left: 400px;
}
`

export const DisplayFlex = styled.div`
display: flex;
justify-content: space-evenly;
img{
    width: 300px;
    transition-duration: 1s;
    &:hover{
    opacity: 0.5;}
}
`