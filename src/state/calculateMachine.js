import {createMachine} from "xstate";

const calculateMachine = createMachine({
    id:'calculate',
    initial:'idle',
    context: {
        stored: "",
        inputing:"",
        calculation:'unset',
        currentResult:0,
        currentDisplay:'0',
        decimalAdded: false
    },
    states: {
        idle: {
            on: {
                NUMBER_INPUT: {
                    target:'idle',
                    actions: (context,event)=> {
                        if (event.number===0 && context.inputing === "0") return
                        context.inputing += event.number
                        context.currentDisplay = context.inputing
                    }
                },
                SYMBOL_INPUT: {
                    target:'willInputOtherNumber',
                    actions: (context,event)=> {
                        context.calculation = event.symbol;
                        context.stored = context.inputing
                        context.inputing = ""
                    }
                },
                EQUAL_INPUT: {
                    target:'idle'
                },
                INPUT_DECIMAL: {
                    target:'idle',
                    actions: (context)=> {
                        if (!context.decimalAdded) {
                            context.decimalAdded = true
                            context.inputing += "."
                            context.currentDisplay = context.inputing
                        }
                    }
                },
                AC_INPUT: {
                    target:'idle',
                    actions:(context)=> {
                        context.inputing=""
                        context.stored = ""
                        context.calculation = "unset"
                        context.currentDisplay = "0"
                        context.decimalAdded=false
                    }
                }
            }
        },
        willInputOtherNumber: {
            on: {
                NUMBER_INPUT: {
                    target:'willInputOtherNumber',
                    actions: (context,event)=> {
                        if (event.number===0 && context.inputing === "0") return
                        context.inputing += event.number
                        context.currentDisplay = context.inputing
                    }
                },
                AC_INPUT: {
                    target:'idle',
                    actions:(context)=> {
                        context.inputing=""
                        context.stored = ""
                        context.calculation = "unset"
                        context.currentDisplay = "0"
                        context.decimalAdded=false
                    }
                },
                EQUAL_INPUT: {
                    target:'willInputOtherNumber',
                    actions: (context)=> {
                        const num1 = Number(context.stored)
                        const num2 = Number(context.inputing)
                        if (context.calculation === "plus") {
                            context.stored = num1+num2
                        } else if (context.calculation === "minus") {
                            context.stored = num1-num2
                        } else if (context.calculation === "multiply") {
                            context.stored = num1*num2
                        } else if (context.calculation === "divide") {
                            context.stored = num1/num2
                        }
                        context.currentDisplay = context.stored
                        //context.inputing = ''
                    }
                },
                INPUT_DECIMAL: {
                    target:'willInputOtherNumber',
                    actions: (context)=> {
                        if (!context.decimalAdded) {
                            context.decimalAdded = true
                            context.inputing += "."
                            context.currentDisplay = context.inputing
                        }
                    }
                },
                SYMBOL_INPUT: {
                    target:'willInputOtherNumber',
                    actions: (context,event)=> {
                        context.calculation = event.symbol;
                        const num1 = Number(context.stored)
                        const num2 = Number(context.inputing)
                        if (context.calculation === "plus") {
                            context.stored = num1+num2
                        } else if (context.calculation === "minus") {
                            context.stored = num1-num2
                        } else if (context.calculation === "multiply") {
                            context.stored = num1*num2
                        } else if (context.calculation === "divide") {
                            context.stored = num1/num2
                        }
                        context.currentDisplay = context.stored
                        context.inputing = ''
                    }
                }
            }

        }
    }
})

export default calculateMachine