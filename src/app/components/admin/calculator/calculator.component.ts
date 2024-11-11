import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  imports: [FormsModule, CommonModule]
})


export class CalculatorComponent {
  buttons = [
    { label: 'AC', operator: 'ac' },
    { label: 'DEL', operator: 'del' },
    { label: '+/-', operator: 'sign' },
    { label: '/', operator: 'div' },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: 'x', operator: 'mul' },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '-', operator: 'mi' },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '+', operator: 'plus' },
    { label: '.', operator: 'dec' },
    { label: '0', value: 0 },
    { label: '=', operator: 'equal' },
  ];

  expression: string = '';
  previousExpression: string = '';
  waitingForOperand: boolean = false;
  firstOperand: string | null = null;
  currentOperator: string = '';

  // Actions
  readonly AC = 'ac';
  readonly DELETE = 'del';
  readonly SIGNAL = 'sign';
  readonly MULTIPLY = 'mul';
  readonly MINUS = 'mi';
  readonly PLUS = 'plus';
  readonly DECIMAL = 'dec';
  readonly EQUAL = 'equal';
  readonly DIVIDE = 'div';

  handleButtonClicked(button: any): void {
    if (button.operator === this.SIGNAL) {
      this.previousExpression = this.expression;
    } else if (button.operator !== this.EQUAL && button.operator !== this.AC && button.operator !== this.DELETE) {
      this.previousExpression += button.label;
    }

    if (button.value !== undefined) {
      if (this.waitingForOperand) {
        this.expression = button.value.toString();
        this.waitingForOperand = false;
      } else {
        this.expression += button.value.toString();
      }
    } else {
      switch (button.operator) {
        case this.DELETE:
          this.expression =  this.expression.slice(0, -1);
          this.previousExpression = this.expression;
          break;
        case this.AC:
          this.clear();
          break;
        case this.SIGNAL:
          this.expression = this.expression ? (-parseFloat(this.expression)).toString() : this.expression;
          this.previousExpression = this.expression;
          break;
        case this.EQUAL:
          if (this.currentOperator && this.firstOperand !== null) {
            this.expression = this.calculate(this.firstOperand, this.expression, this.currentOperator)?.toString();
            this.firstOperand = null;
            this.currentOperator = '';
          }
          break;
        case this.DECIMAL:
          if (!this.expression.includes('.')) {
            this.expression += '.';
          }
          if (!this.previousExpression.includes('.')) {
            this.previousExpression += '.';
          }
          break;
        default:
          if (this.firstOperand === null) {
            this.firstOperand = this.expression;
          } else {
            this.firstOperand = this.calculate(this.firstOperand, this.expression, this.currentOperator).toString();
            this.expression = this.firstOperand;
          }
          this.currentOperator = button.operator;
          this.waitingForOperand = true;
          break;
      }
    }
  }

  calculate(a: string, b: string, operator: string): number | string {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    switch (operator) {
      case this.MULTIPLY:
        return numA * numB;
      case this.MINUS:
        return numA - numB;
      case this.PLUS:
        return numA + numB;
      case this.DIVIDE:
        return numB !== 0 ? numA / numB : 'Error';
      default:
        return numB;
    }
  }

  clear() {
    this.expression = this.previousExpression = this.currentOperator = '';
    this.firstOperand = null;
    this.waitingForOperand = false;
  }
}
