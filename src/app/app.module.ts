import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './header/header.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NodeComponent } from './node/node.component';
import {ConversationLoadService} from "./conversation-load.service";
import {DragScrollModule} from "angular2-drag-scroll";
import {ExporterService} from "./exporter.service";
import {ConversationStateService} from "./conversation-state.service";
import { NodeListComponent } from './node-list/node-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    HeaderComponent,
    NodeComponent,
    NodeListComponent
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
