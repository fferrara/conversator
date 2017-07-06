import {Readable} from "./readable";
import {Connectable} from "./connectable";
/**
 * Created by Flavio Ferrara on 23/06/2017.
 */

export class Utterance implements Readable, Connectable {
  private _text: string;
  private _next: Readable;
  private _id: string;

  constructor(id: string, text: string, next?: Readable) {
    this._id = id;
    this._text = text;
    this._next = next || null;
  }

  getId(): string {
    return this._id;
  }

  next(): Readable {
    return this._next;
  }

  hasNext(): boolean {
    return this._next !== null;
  }

  getText(): string {
    return this._text;
  }

  updateText(text: string) {
    this._text = text;
  }


}
