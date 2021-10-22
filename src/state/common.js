import create from 'zustand'
import { devtools } from "zustand/middleware";
import produce from "immer";

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
            set(produce((state)=> {
                state.event.equalBtnClicked = true
            }))
            setTimeout(()=> {
                set(produce((state)=> {
                    state.event.equalBtnClicked = false
                }))
            },3000)
        }
    }
}))
