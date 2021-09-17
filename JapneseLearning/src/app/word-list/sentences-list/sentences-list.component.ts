import { Component, OnInit, ViewChild } from '@angular/core';
import {JapneseService} from "../../service/japnese.service";
import {JapaneseSentences} from "../../models/japaneseSentences";
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-sentences-list',
  templateUrl: './sentences-list.component.html',
  styleUrls: ['./sentences-list.component.css']
})
export class SentencesListComponent implements OnInit {
  //dataSource: JapaneseSentences[] = [];
  displayedColumns: string[] = ['chinese','romaji', 'hiragana', 'errorTimes'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<JapaneseSentences>;

  constructor(private japneseService: JapneseService) { 
  }

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  ngOnInit(): void {
    this.japaneseWordList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  japaneseWordList():void{
    this.japneseService.getSentence()
      .subscribe(sentences => {
        this.dataSource = new MatTableDataSource(sentences);
        //this.dataSource.paginator = this.paginator;
      });
  }
  

}
