import create from 'zustand'
import { devtools } from "zustand/middleware";
import produce from "immer";
import createSoundSlice from "./createSoundSlice";


export const useStore = create((set,get)=> ({
    background: {
        backgroundColor: "",
        randomBackground: ()=> {
            set(
                produce((state)=> {
                    state.background.backgroundColor = ""
                })
            )
        }
    },
    event: {
        equalBtnClicked:false,
        setEqualBtnClicked: (val)=> {
            get().sound.playExplosionSound()
            set(produce((state)=> {
                state.event.equalBtnClicked = true
            }))
            setTimeout(()=> {
                set(produce((state)=> {
                    state.event.equalBtnClicked = false
                }))
                get().sound.playForceFieldSound()
            },3000)
        }
    },
    sound: {
        ...createSoundSlice(set,get)
    }
}))
