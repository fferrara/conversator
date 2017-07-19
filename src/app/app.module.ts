import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './components/header/header.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NodeComponent } from './components/node/node.component';
import {ConversationLoadService} from "./services/conversation-load.service";
import {DragScrollModule} from "angular2-drag-scroll";
import {ExporterService} from "./services/exporter.service";
import {ConversationStateService} from "./services/conversation-state.service";
import { NodeListComponent } from './components/node-list/node-list.component';
import { JsonBarComponent } from './components/json-bar/json-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    HeaderComponent,
    NodeComponent,
    NodeListComponent,
    JsonBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    DragScrollModule
  ],
  providers: [ConversationLoadService, ConversationStateService, ExporterService],
  entryComponents: [
    NodeComponent
  ],
  bootstrap: [AppComponent],
  schemas:      [NO_ERRORS_SCHEMA]
})
export class AppModule { }
