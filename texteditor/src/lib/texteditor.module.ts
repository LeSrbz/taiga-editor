import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextditorComponent } from './textditor/textditor.component';
import {TuiEditorModule} from "@taiga-ui/addon-editor";
import {TexteditorRoutes} from "./texteditor.routers";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, TuiEditorModule,RouterModule.forChild(TexteditorRoutes),
    ],
  declarations: [TextditorComponent],
})
export class TexteditorModule {}
