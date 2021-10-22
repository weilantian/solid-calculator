import produce from "immer";
import sound1 from '../assets/sounds/error_001.ogg'
import sound2 from '../assets/sounds/error_002.ogg'
import sound3 from '../assets/sounds/error_003.ogg'
import sound4 from '../assets/sounds/error_004.ogg'
import sound5 from '../assets/sounds/error_005.ogg'
import forceFieldSound from '../assets/sounds/forceField_000.ogg'
import explosionSound from '../assets/sounds/explosionCrunch_004.ogg'
const sounds = [new Audio(sound1),new Audio(sound2),new Audio(sound3),new Audio(sound4),new Audio(sound5)]
const forceFieldAudio = new Audio(forceFieldSound)
const explosionAudio = new Audio(explosionSound)
const createSoundSlice = (set, get)=> ({
    soundOn:true,
    soundIndex:0,
    playButtonSound: async ()=> {
        if (!get().sound.soundOn) return;
        let soundIndex = get().sound.soundIndex
        if (soundIndex===4) {
            soundIndex = 0
        } else {
            soundIndex +=1
        }
        set(produce(state=> {
            state.sound.soundIndex = soundIndex
        }))
        await sounds[soundIndex].cloneNode().play()
    },
    playForceFieldSound: async ()=> {
        if (!get().sound.soundOn) return;
        await forceFieldAudio.cloneNode().play()
    },
    playExplosionSound: async ()=> {
        if (!get().sound.soundOn) return;
        await explosionAudio.cloneNode().play()
    },
    toggleSound: ()=> {
        const result = produce(state=> {
            state.sound.soundOn = !get().sound.soundOn
        })
        set(result)
    }
})

export default createSoundSlice