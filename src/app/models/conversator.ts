import {Conversation} from "./conversation";
import {Choice} from "./question";
/**
 * Created by Flavio on 08/07/2017.
 */

export interface Conversator {
  start(conversation: Conversation);

  next();

  choose(choice: Choice);

  answers(answer: string);
}
