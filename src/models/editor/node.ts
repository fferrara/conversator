import {Readable} from "../readable";
import {Utterance} from "../utterance";
/**
 * Created by Flavio Ferrara on 25/06/2017.
 */

export class ConversationNode {
  readable: Readable;
  x: number;
  y: number;
  next?: ConversationNode

  public constructor(x, y, readable){
    this.x = x;
    this.y = y;
    this.readable = readable;
  }

  get text() {
    return this.readable.getText()
  }

  set text(value: string) {
    this.readable.updateText(value);
  }

  get id() {
    return this.readable.getId();
  }

  public hasNext(): boolean {
    return this.readable instanceof Utterance && this.readable.hasNext();
  }
}
