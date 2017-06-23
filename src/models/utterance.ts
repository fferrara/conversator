import {Readable} from "./readable";
import {Connectable} from "./connectable";
/**
 * Created by Flavio Ferrara on 23/06/2017.
 */

export class Utterance implements Readable, Connectable {
  private _text: string;

  constructor(text: string) {
    this._text = text;
  }

  next(): Readable {
    throw new Error("Method not implemented.");
  }

  hasNext(): boolean {
    throw new Error("Method not implemented.");
  }

  getText(): string {
    return this._text;
  }


}
