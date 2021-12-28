import styled from "styled-components";

export const ResumeCard = styled.div`
margin-top: 50px;
margin-left: 400px;
h1{
    color: #173B6C;
    font-size: 50px;
}
hr{
    width: 100px;
    height: 3px;
    background-color: #149DDD;
    margin-right: 1100px;
}
`

export const Texts = styled.div`
display: flex;
.BorderRadius{
    width: 10px;
    height: 10px;
    border: 3px solid #149ddd;
    border-radius: 50%;
    margin: 0;
    margin-right: 20px;
}
hr{
    width: 2px;
    height: 220px;
    margin: 0;
    margin-left: 7px;
}
h4{
    padding-left: 20px;
    font-size: 20px;
}
b{
    background-color: #173B6C;
    color: white;
    padding: 0 10px;
    margin-left: 20px;
    transition-duration: .5s;
    &:hover{
        color: #149ddd;
        background-color: white;
    }
}
p,small, a{
    margin-left: 20px;
}
small, a{
    font-weight: bold;
}
a{
 &:hover{
     
    color: #173B6C;
 }
}
`