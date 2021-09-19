import { Component } from '@angular/core';
import {GroupByTypes} from "./models/groupBy";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Japanese Learning';
  groupByTypes = GroupByTypes;
}
