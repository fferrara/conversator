import {Injectable} from "@angular/core";
import {Conversation} from "../models/conversation";
import {JsonExporter} from "../export/json-exporter";
import {ExportFormat} from "./exporter.service";

@Injectable()
export class ExporterMock {
  constructor() {
  }

  setFormat(format: ExportFormat){
  }

  serialize(conversation: Conversation): string{
    return "";
  }

}
