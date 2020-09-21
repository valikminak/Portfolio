import styled from 'styled-components'


export const SkillsStyled = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width: 100vw;
  height: 100vh;
  font-family: Tokyo , sans-serif;
  transition: all .3s;
  padding-right:${({ isShowSidebar })=>isShowSidebar?"0":"161px"};
  opacity:0;
  animation: animAppear 1.5s forwards;
  .skills{
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr;
    grid-row-gap:20px;
    grid-column-gap:80px;
    margin-top:30px;
    width:700px;
    height:400px;
    
    
  }
  @keyframes animAppear {
    to{
    opacity:1;
    }
    }
  `
