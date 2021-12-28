import styled from "styled-components";

export const SkillsCard = styled.div`
margin-top: 50px;
margin-left: 400px;
h1,h2{
    color: #173B6C;
    font-size: 50px;
}
h2{
    padding-left: 400px;
}
hr{
    width: 100px;
    height: 3px;
    background-color: #149DDD;
    margin-right: 1100px;
}
`

export const DisplayFlex = styled.div`
display: flex;
justify-content: space-evenly;
`

export const Text = styled.div`
margin: 20px 0;
background-color: #040B14;
padding: 10px;
border-radius: 20px;
text-align: center;
    transition-duration: .5s;
    &:hover{
        background-color: white;
        b{
        color: #0C9DDD;}
    }
b{
    color: white;
    font-size: 30px;
    transition-duration: .5s;
}
`