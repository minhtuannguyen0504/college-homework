import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
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
  currentOperator: string = '';
  isOperatorJustPressed: boolean = false;

  readonly AC = 'ac';
  readonly DELETE = 'del';
  readonly SIGNAL = 'sign';
  readonly MULTIPLY = 'mul';
  readonly MINUS = 'mi';
  readonly PLUS = 'plus';
  readonly DECIMAL = 'dec';
  readonly EQUAL = 'equal';
  readonly DIVIDE = 'div';

  handleMul(a: number, b: number): number {
    return a * b;
  }

  handleDiv(a: number, b: number): number {
    return a / b;
  }

  handlePlus(a: number, b: number): number {
    return a + b;
  }

  handleMinus(a: number, b: number): number {
    return a - b;
  }

  handleEqual() {
    const current = this.expression ? +this.expression : +this.previousExpression;
    const previous = +this.previousExpression;

    switch (this.currentOperator) {
      case this.MULTIPLY:
        this.expression = this.handleMul(previous, current).toString();
        break;
      case this.DIVIDE:
        this.expression = this.handleDiv(previous, current).toString();
        break;
      case this.PLUS:
        this.expression = this.handlePlus(previous, current).toString();
        break;
      case this.MINUS:
        this.expression = this.handleMinus(previous, current).toString();
        break;
    }

    this.previousExpression = this.expression;
    this.currentOperator = '';
    this.isOperatorJustPressed = false;
  }

  handleAction(button: any) {
    if (button.operator) {
      switch (button.operator) {
        case this.AC:
          this.expression = '';
          this.previousExpression = '';
          this.currentOperator = '';
          this.isOperatorJustPressed = false;
          break;
        case this.DELETE:
          this.expression = this.expression.slice(0, -1);
          break;
        case this.SIGNAL:
          this.expression = this.expression.startsWith('-') ? 
                            this.expression.slice(1) : 
                            `-${this.expression}`;
          break;
        case this.MULTIPLY:
        case this.DIVIDE:
        case this.PLUS:
        case this.MINUS:
          this.setOperator(button.operator);
          break;
        case this.EQUAL:
          this.handleEqual();
          break;
        default:
          break;
      }
    } else {
      this.appendNumber(button.value);
    }
  }

  setOperator(operator: string) {
    if (this.expression && !this.isOperatorJustPressed) {
      this.previousExpression = this.expression;
    }
    this.currentOperator = operator;
    this.isOperatorJustPressed = true;
  }

  appendNumber(value: number) {
    if (this.isOperatorJustPressed) {
      this.expression = value.toString();
      this.isOperatorJustPressed = false;
    } else {
      this.expression += value.toString();
    }
  }
}
