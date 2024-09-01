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
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
        if(number === "." && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation){
        if (this.currentOperand === "")return
        if (this.previousOperand !== ""){
            this.calculate()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    calculate(){
        let result
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation){
            case "+":
                result = prev + curr
                break
            case "-":
                result = prev - curr
                break
            case "*":
                result = prev * curr
                break
            case "/":
                result = prev / curr
                break
            default:
                return
        }
        this.currentOperand = result
        this.operation = undefined
        this.previousOperand = ''
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
        }
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
operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
allClearButton.addEventListener("click",()=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener("click",()=>{
    calculator.delete()
    calculator.updateDisplay()
})
equalButton.addEventListener("click",()=>{
    calculator.calculate()
    calculator.updateDisplay()
})

