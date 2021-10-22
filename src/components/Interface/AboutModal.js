import styled from 'styled-components'

const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 2;

  position: fixed;
`

const ModalBody = styled.div`
  border: 2px solid white;
  color: white;
  background-color: #1A1A1E;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width:64%;
  height:30em;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`
const TitleBar = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: end;
  text-align: center;
  padding: 0 2em 0.4em;
  position: relative;
  height: 2em;
  align-items:center;

  & span {
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
`

const Content = styled.div`
    padding: 0 2em;
  flex:1;
  overflow-y: scroll;
 &::-webkit-scrollbar {
   width: 0.5em;
 }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
`

const CloseBtn = styled.button`
    border: none;
  background: transparent;
  color:white;
  font-size:1em;
  cursor:pointer;
`



const Bottom = styled.div`
  text-align: center;
  margin-bottom: 2em;
`

const Link = styled.a`
    color:white;
`


const AboutModal = ({visible, onDismiss}) => {

    return (<>{visible && <div>
            <ModalBody>
                <TitleBar>
                    <span>About</span>
                    <CloseBtn onClick={()=>onDismiss()}>[X] Close</CloseBtn>
                </TitleBar>
                <Content>
                   <h3>About this work</h3>
                    <p>"The calculator that is built to be solid"</p>
                    <p>This project is made to communicate the beauty of the glitch by build up a rocket solid calculator interface.
                        Please do recommend this calculator to a friend who busy finding a solid calculator that won't break apart in the middle of a math test.
                    </p>
                    <h3>Software</h3>
                    <p>The emerge of this calculator can't happened without these open source projects</p>
                    <ul>
                        <li>Three.js</li>
                        <li>React</li>
                        <li>react-three-fiber</li>
                        <li>Blender</li>
                    </ul>
                    <h3>Credit</h3>
                    <p>
                        <li>SFX: <Link target="_blank" href="https://www.kenney.nl/">@Kenney</Link></li>
                    </p>
                    <h3>Notice</h3>
                    <p>This project works best with Chrome Browser</p>
                </Content>
                <Bottom>Design and Code with ❤️ by @Lantianwei</Bottom>
            </ModalBody>
        <ModalOverlay onClick={()=>onDismiss()}/>
    </div>}</>)

}

export default AboutModal