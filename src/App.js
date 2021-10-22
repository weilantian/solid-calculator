import {Canvas, useFrame, useThree} from '@react-three/fiber'
import './App.css';
import {OrbitControls, PerspectiveCamera, useGLTF} from "@react-three/drei";
import {useRef, Suspense, useEffect} from "react";
import {caseMaterial} from "./materials";

import Display from "./components/Display";
import ButtonMaterix from "./components/ButtonMaterix";
import calculateMachine from "./state/calculateMachine";
import {useMachine} from "@xstate/react";
import {gsap} from "gsap";
import {useStore} from "./state/common";
useGLTF.preload('/scene.glb')
const Calculator = (props)=> {
    const [state,send] = useMachine(calculateMachine,{ devTools: true })
    const group = useRef(null)
    const calculatorBody = useRef(null)
    const { nodes, materials } = useGLTF('/scene.glb')
    const {equalBtnClicked} = useStore(state=>state.event)
    useEffect(()=> {
        if (equalBtnClicked) {
            gsap.to(calculatorBody.current.rotation,{
                duration:1,
                y:Math.PI*2
            })
        } else {
            gsap.to(calculatorBody.current.rotation,{
                duration:2,
                y:0
            })
        }
    },[equalBtnClicked])
    return  <group ref={group} {...props} dispose={null}>
    <group ref={calculatorBody} position={[0, 1.69, 0]} rotation={[-Math.PI,0, -Math.PI]}>
        <mesh castShadow receiveShadow geometry={nodes.Body.geometry} material={materials.Body} />
        <Display  text={state.context.currentDisplay}/>
        <ButtonMaterix state={state} send={send}/>
    </group>
        <directionalLight intensity={1} decay={2} position={[4.07, 10, 8.22]} />
        <PerspectiveCamera makeDefault position={[0, 5.24, 13.14]} />
        {/*<OrbitControls/>*/}
    </group>
}


function App() {


  return (
    <div className="App">
      <Canvas>
          <Suspense fallback={null}>
              <Calculator/>
              <color attach="background" args={"#2d245b"} />
          </Suspense>

      </Canvas>
    </div>
  );
}

export default App;
