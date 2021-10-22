import fonts from "../../common/fonts";
import {Text, useGLTF} from "@react-three/drei";
import {useEffect, useRef, useState} from "react";
import {TimelineMax,gsap} from 'gsap'

import {useStore} from "../../state/common";

export const Button = ({onC,highlighted,text,position,textOffset,large})=> {
    const [active,setActive] = useState(false)
    const {equalBtnClicked} = useStore(state=>state.event)
    const {playButtonSound} = useStore(state=>state.sound)
    const { nodes } = useGLTF('/scene.glb')
    const button = useRef()
    useEffect(()=> {
        if (!equalBtnClicked)
        {
            gsap.to(button.current.position,{
                x:position[0],
                y:position[1],
                z:position[2],
                duration:2
            })
        }
    },[equalBtnClicked])
    useEffect(() => void (document.body.style.cursor = active ? 'pointer' : 'auto'), [active])
    const onClickHandler = ()=> {
        if (equalBtnClicked) return;
        playButtonSound()
        if (onC) onC()
        const t1 = new TimelineMax()
        t1.to(button.current.position,{
            z:0.3,
            duration:0.4
        }).to(button.current.position,{
            z:0,
            duration:0.4
        })
        t1.to(button.current.position,{
            x:Math.random()*3 * (Math.random() < 0.5 ? -1 : 1),
            y:Math.random()*3 * (Math.random() < 0.5 ? -1 : 1),
            duration:2
        })

    }


    return <group  ref={button} position={position}>
        <Text
            rotation={[-Math.PI, 0, -Math.PI]}
            position={[-1.6+textOffset[0],-3.2+textOffset[1],-0.32+textOffset[2]]}
            scale={[0.10,0.10,0.10]}
            letterSpacing={0}
            fontSize={4}
            maxWidth={0}
            textAlign={'center'}
            text={text}
            font={fonts["Popins"]}
            anchorX="middle"
            anchorY="middle"
        >
            <color attach="color" args={["black"]} />
        </Text>
        <mesh onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)} onClick={onClickHandler}
            castShadow
            receiveShadow
            geometry={!large?  nodes.SmallBtn005.geometry: nodes.LagreBtn.geometry}
            rotation={!large?[Math.PI / 2, 0, 0]:[0,0,0]}
              position={!large?[0,0,0]:[-2.8,-2.6,0.2]}
        >
            <meshStandardMaterial  color={highlighted?"#cfcc20":"#ffffff"} attach={"material"}/>
        </mesh>
    </group>
}