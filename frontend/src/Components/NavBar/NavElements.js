import styled from 'styled-components';
import {NavLink as  Link } from 'react-router-dom'

export const Nav = styled.div`
    background-color:#f4f4f4;
    padding:0.5rem calc((100vw - 1300px)/2);
    height:72px;
    display:flex;
    width:100vw;
    justify-content:space-between;
    align-items:center;
    box-sizing:border-box;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
    margin-bottom: 2px;
`

export const NavMenu = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    outline: none;
    border: none;
`

export const NavLink = styled(Link)`
    color:black;
    //background-color:green;
    margin:0 20px;
    padding:4px;
    text-decoration: none;
    &:hover{
        color:#008BDC;
        transition:all 0.3s ease-in-out;
        /* box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%); */
    }

`
export const NavBtn = styled.div`
    width:100vm;
    display:flex;
    justify-content:center;
    outline: none;

`

export const NavBtnlink = styled.button`
    border: 2px solid #008BDC;
    background-color:#f4f4f4;
    border-radius:2px;
    color:#008BDC;
    box-sizing: border-box;
    outline: none;
    font-weight:400;
    font-size:20px;
    padding:2px 17px;
    text-decoration: none;
    transition:all 0.3s ease-in-out;
    &:hover{
        background-color:#008BDC;
        color:white;
        transition:all 0.3s ease-in-out;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 15%);
    }

`