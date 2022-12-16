import styled from "styled-components";
import { fadeIn } from '../../Styles/animation'

export const List = styled.section`
  display: flex;
  position: relative;
  z-index: 1;
  overflow: auto;
  width: 100%;
  height: 130px;
  ::-webkit-scrollbar {
    display: none;
  }
  &.fixed{
    border-radius: 1000px;
    box-shadow: 0 0 20px rgba(0,0,0,.40);
    position: sticky;
    top: -36px;
    right: 0;
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    transform: scale(.5);
    z-index: 13;
    backdrop-filter: blur(30px);
  }
`
export const Item = styled.article`
  padding: 0 8px;
`
