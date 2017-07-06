/**
 * Created by Flavio Ferrara on 23/06/2017.
 */

export interface Readable {
  getText(): string,
  getId(): string,
  updateText(text: string)
}
