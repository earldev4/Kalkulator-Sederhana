class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
        this.clear()
    }
    clear (){
        this.previousOperand = ``
        this.currentOperand = ``
        this.operation = undefined
    }
    delete(){

    }
    appendNumber(number){

    }
    operation(operation){

    }
    calculate(){

    }
    updateDisplay(){

    }
}

const numberButtons = document.querySelectorAll(`[dataNumber]`)
const operationButtons = document.querySelectorAll(`[dataOperand]`)
const equalButton = document.querySelector('[dataEqual]')
const deleteButton = document.querySelector(`[dataDelete]`)
const allClearButton = document.querySelector(`[dataAllClear]`)
const previousOperand = document.querySelector(`[dataPO]`)
const currentOperand = document.querySelector(`[dataCO]`)

