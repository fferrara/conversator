import { Injectable } from '@angular/core';
import {Exporter} from "./export/exporter";
import {Conversation} from "../models/conversation";
import {JsonExporter} from "./export/json-exporter";

enum ExportFormat {
  JSON = 1
}

@Injectable()
export class ExporterService {
  private format: ExportFormat;
  private exporters = {};

  constructor() {
    this.exporters[ExportFormat.JSON] = new JsonExporter()
    this.format = ExportFormat.JSON;
  }

  setFormat(format: ExportFormat){
    this.format = format;
  }

  serialize(conversation: Conversation): string{
    return this.exporters[this.format].serialize(conversation);
  }

}
