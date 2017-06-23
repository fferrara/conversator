import {Readable} from "./readable";
/**
 * Created by Flavio Ferrara on 23/06/2017.
 */

export interface Connectable {
  next(): Readable;
  hasNext(): boolean;
}
