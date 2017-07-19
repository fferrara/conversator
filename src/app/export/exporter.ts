import {Conversation} from "../models/conversation";
/**
 * Created by Flavio on 06/07/2017.
 */

export interface Exporter {
  serialize(conversation: Conversation): string
}
