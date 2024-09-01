class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear (){
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }
    delete(){

    }
    appendNumber(number){
        this.currentOperand = number.toString()
    }
    operation(operation){

    }
    calculate(){

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtons = document.querySelectorAll(`[dataNumber]`)
const operationButtons = document.querySelectorAll(`[dataOperand]`)
const equalButton = document.querySelector('[dataEqual]')
const deleteButton = document.querySelector(`[dataDelete]`)
const allClearButton = document.querySelector(`[dataAllClear]`)
const previousOperandTextElement = document.querySelector(`[dataPO]`)
const currentOperandTextElement = document.querySelector(`[dataCO]`)

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
