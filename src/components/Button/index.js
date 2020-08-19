import styled from 'styled-components';
// import {Link} from 'react-router-dom'

// const Button = styled(Link)` para usar o link aqui dentro
const A = styled.button`
    color: var(--white);
    background-color: var(--black);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    margin: 10px;
    margin-left: 0px;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

const B = styled.button`
    color: var(--white);
    background-color: var(--primary);
    border: none;
    cursor: pointer;
    padding: 8px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 2px;
    text-decoration: none;
    margin: 10px;
    margin-left: 0px;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

const C = styled.button`
    color: var(--white);
    background-color: #666666;
    border: none;
    cursor: pointer;
    padding: 8px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 2px;
    text-decoration: none;
    margin: 10px;
    margin-left: 0px;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default {
  A,
  B,
  C,
};
