import {Readable} from "./readable";
import {Connectable} from "./connectable";
/**
 * Created by Flavio Ferrara on 23/06/2017.
 */

export abstract class Question implements Readable {
  getText(): string {
    throw new Error("Method not implemented.");
  }

  updateText(text: string) {
    throw new Error("Method not implemented.");
  }

  getId(): string {
    throw new Error("Method not implemented.");
  }

  answers(answer: string): void{

  }

}

export class Choice implements Connectable {
  next(): Readable {
    throw new Error("Method not implemented.");
  }

  hasNext(): boolean {
    throw new Error("Method not implemented.");
  }

}

export class ClosedQuestion extends Question {
  private _choices: Array<Choice>;


  constructor(choices: Array<Choice>) {
    super();
    this._choices = choices;
  }

  get choices(): Array<Choice> {
    return this._choices;
  }
}
