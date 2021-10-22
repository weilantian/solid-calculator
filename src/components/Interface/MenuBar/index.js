import styled from 'styled-components'
import {useStore} from "../../../state/common";
import AboutModal from "../AboutModal";
import {useState} from "react";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: end;
`

const Bar = styled.div`
  display: flex;
  padding: 1em;
`

const NavButton = styled.button`
  &:not(:nth-child(1)) {
    margin-left:0.8em;
  }
  cursor: pointer;
  border: 1px solid #727272;
  color: white;
  background-color:#1A1A1E;
  padding: 0.8em 1em;
  border-radius: 0.3em;
  font-size:14px;
  transition: background-color 0.1s;
  &:hover {
    background-color: #424452;
  }
`

const MenuBar = () => {
    const [modalActive,setModalActive] = useState(false)
    const {soundOn,toggleSound} = useStore(state=>state.sound)
    return (
        <>
            <AboutModal onDismiss={()=>setModalActive(false)} visible={modalActive}/>
            <Wrapper>
            <Bar>
                <NavButton onClick={()=>setModalActive(true)}>About</NavButton>
                <NavButton onClick={()=> toggleSound()}>Sound {soundOn? "ON" : "OFF"}</NavButton>
            </Bar>
        </Wrapper>
        </>

    )
}

export default MenuBar