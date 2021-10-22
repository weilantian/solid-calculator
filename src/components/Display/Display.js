import {Text, useGLTF} from "@react-three/drei";
import fonts from "../../common/fonts";
import {useEffect, useRef, useState} from "react";
import {extend} from "@react-three/fiber";
import { Leva, useControls, button } from 'leva'
import {useStore} from "../../state/common";
import {gsap} from 'gsap'
export const Display = ({geometry,material,text})=> {
    // configure font geometry
    const {equalBtnClicked} = useStore(state=>state.event)
    const { nodes, materials } = useGLTF('/scene.glb')
    const display = useRef(null)
    useEffect(()=> {
        if (!equalBtnClicked) {
            gsap.to(display.current.rotation,({
                x:0,
                z:0,
                duration:2
            }))
        } else {
            gsap.to(display.current.rotation,({
            x:0.8,
            z:13,
            duration:2
        }))

        }

    },[equalBtnClicked])
    return <group ref={display} position={[0.59, 6.72, -0.85]}>
        <Text
            rotation={[-Math.PI, 0, -Math.PI]}
            position={[-2.4,-0.68,-0.6]}
            scale={[0.14,0.14,0.14]}
            color={"#31E39F"}
            letterSpacing={0}
            fontSize={6}
            maxWidth={0}
            textAlign={'end'}
            text={text}
            font={fonts["Popins"]}
            anchorX="right"
            anchorY="middle"
        >
        </Text>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Display.geometry}
            material={materials.Display}

        />
    </group>
}