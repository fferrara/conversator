import {Readable} from "./readable";
import {Connectable} from "./connectable";
/**
 * Created by Flavio Ferrara on 23/06/2017.
 */

export abstract class Question implements Readable {
  protected _text: string;
  protected _id: string;

  constructor(id: string, text: string) {
    this._id = id;
    this._text = text;
  }

  getText(): string {
    throw new Error("Method not implemented.");
  }

  updateText(text: string) {
    throw new Error("Method not implemented.");
  }

  getId(): string {
    throw new Error("Method not implemented.");
  }

}

export class Choice implements Connectable {
  private _text: string;
  private _next: string;

  constructor(text: string, next: string) {
    this._text = text;
    this._next = next;
  }


  get text(): string {
    return this._text;
  }

  next(): string {
    return this._next;
  }

  isBlocking(): boolean {
    throw new Error("Method not implemented.");
  }

  hasNext(): boolean {
    throw new Error("Method not implemented.");
  }

  static build(data) {
    return new Choice(data.text, data.next);
  }

}

export class ClosedQuestion extends Question {
  private _choices: Array<Choice>;


  constructor(id: string, text: string, choices: Array<Choice>) {
    super(id, text);
    this._choices = choices;
  }

  get choices(): Array<Choice> {
    return this._choices;
  }

  static build(data) {
    return new ClosedQuestion(data.id, data.text, data.alt.map(Choice.build));
  }
}

export class OpenQuestion extends Question implements Connectable{
  private _inputVar: string;
  private _next: string;
  private _answer: string;

  constructor(id: string, text: string, inputVar: string, next: string) {
    super(id, text);
    this._next = next;
    this._inputVar = inputVar;
  }


  get inputVar(): string {
    return this._inputVar;
  }

  get answer(): string {
    return this._answer;
  }

  set answer(value: string) {
    this._answer = value;
  }

  static build(data) {
    return new OpenQuestion(data.id, data.text, data.input, data.next);
  }

  hasNext(): boolean {
    return this.next() != null;
  }

  isBlocking(): boolean {
    return true;
  }

  next(): string {
    return this._next
  }
}
