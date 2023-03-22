import { Component } from '@angular/core';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from "@taiga-ui/addon-editor";

@Component({
  selector: 'taiga-editor-textditor',
  templateUrl: './textditor.component.html',
  styleUrls: ['./textditor.component.scss'],
  providers: [
    {
      provide: TUI_EDITOR_EXTENSIONS,
      useValue: defaultEditorExtensions,
    },
  ],
})
export class TextditorComponent {}
