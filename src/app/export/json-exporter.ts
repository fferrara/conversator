import {Exporter} from "./exporter";
import {Conversation} from "../models/conversation";
/**
 * Created by Flavio on 08/07/2017.
 */

export class JsonExporter implements Exporter {
  serialize(conversation: Conversation): string {
    return JSON.stringify(conversation, null, 4);
  }

}
