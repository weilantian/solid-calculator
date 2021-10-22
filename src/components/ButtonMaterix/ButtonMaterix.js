import Button from "../Button";
import {usePlane} from "@react-three/cannon";
import {useStore} from "../../state/common";

export const ButtonMaterix = ({send,state})=> {
    const {setEqualBtnClicked} = useStore(state=>state.event)
    return <group position={[3.38, 7.8, -1.08]}>
        <group>
            <Button onC={()=>send({type:"AC_INPUT"})} text={"AC"} textOffset={[0.1,0,0]} position={[0,0,0]}/>
            <Button  text={"+/-"} textOffset={[-0.00,0,0]} position={[-1.1,0,0]}/>
            <Button text={"%"} textOffset={[-0.04,0,0]} position={[-1.1*2,0,0]}/>
            <Button highlighted={true} text={"/"} textOffset={[-0.04,0,0]} position={[-1.1*3,0,0]}/>

        </group>
        <group position={[0,-1.2,0]}>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:7})} text={"7"} textOffset={[0,0,0]} position={[0,0,0]}/>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:8})} text={"8"} textOffset={[-0.00,0,0]} position={[-1.1,0,0]}/>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:9})}text={"9"} textOffset={[-0,0,0]} position={[-1.1*2,0,0]}/>
            <Button onC={()=>send({type:"SYMBOL_INPUT",symbol:"multiply"})} highlighted={true} text={"X"} textOffset={[-0.04,0,0]} position={[-1.1*3,0,0]}/>
        </group>
        <group position={[0,-1.2*2,0]}>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:4})} text={"4"} textOffset={[0,0,0]} position={[0,0,0]}/>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:5})} text={"5"} textOffset={[-0.00,0,0]} position={[-1.1,0,0]}/>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:6})} text={"6"} textOffset={[-0,0,0]} position={[-1.1*2,0,0]}/>
            <Button onC={()=>send({type:"SYMBOL_INPUT",symbol:"minus"})} highlighted={true} text={"-"} textOffset={[-0.04,0,0]} position={[-1.1*3,0,0]}/>
        </group>
        <group position={[0,-1.2*3,0]}>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:1})} text={"1"} textOffset={[0,0,0]} position={[0,0,0]}/>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:2})} text={"2"} textOffset={[-0.00,0,0]} position={[-1.1,0,0]}/>
            <Button onC={()=>send({type:"NUMBER_INPUT",number:3})} text={"3"} textOffset={[-0,0,0]} position={[-1.1*2,0,0]}/>
            <Button onC={()=>send({type:"SYMBOL_INPUT",symbol:"plus"})} highlighted={true} text={"+"} textOffset={[-0.04,0,0]} position={[-1.1*3,0,0]}/>
        </group>
        <group position={[0,-1.2*4,0]}>
            <Button  onC={()=>send({type:"NUMBER_INPUT",number:0})} large text={"0"} textOffset={[-0.04,0,0]} position={[0,0,0]}/>
            <Button onC={()=>send({type:"INPUT_DECIMAL"})} text={"."} textOffset={[-0,0,0]} position={[-1.1*2,0,0]}/>
            <Button onC={()=>{
                send({type:"EQUAL_INPUT"})
                setEqualBtnClicked(true)
            }} highlighted={true} text={"="} textOffset={[-0.04,0,0]} position={[-1.1*3,0,0]}/>
        </group>

    </group>
}