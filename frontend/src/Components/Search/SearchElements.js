import styled from 'styled-components';


export const SearchControl = styled.div`
    position: relative;
    border-radius:7px ;
    background-color: #a5f5f5;
    /* backgroundColor: fade(theme.palette.common.white, 0.15), */
    &:hover{
        background-color: #a7a7f7;;
    };
    margin-right: 20px;
    margin-left: 10px;
    padding-right:20px;
    padding-left:30px;
    line-height:2;
    width: 150px;
`

export const SearchIconControl = styled.div`
    display:flex;
 
    align-items:center;
    outline: none;
    border: none;
    position: absolute;
    height: 100%;
    top:-0%;
    left:0%;
    padding-left:4px
    
`

