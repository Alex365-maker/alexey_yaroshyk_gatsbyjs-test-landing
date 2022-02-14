import styled from "styled-components";

export const WeWorkWithWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 1000px;
    background: lightblue;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 242px;
    `;
  
    export const WeWorkWithConteiner = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(6, minmax(100px, 1fr));
    grid-gap: 25px;
    padding: 25px;
    background: white;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
    will-change: width, height;
  `;

  export const WeWorkWithButton = styled.button`
  position: absolute;
  margin-top: 20px;
width: 100%;
height: 100%;
font-family: Ubuntu;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 120%;
background: lightblue;
border-color: lightblue;
  `;