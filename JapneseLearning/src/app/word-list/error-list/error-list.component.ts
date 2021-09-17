import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Japnese } from 'src/app/models/japnese';
import {JapneseService} from "../../service/japnese.service";

@Component({
  selector: 'app-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.css']
})
export class ErrorListComponent implements OnInit {
  errorList: Array<Japnese> = [];
  questionList: Array<string> = [];
  answerList: Array<string> = [];
  showResult: boolean = false;

  constructor(private japneseService: JapneseService) { }

  ngOnInit(): void {
    this.japaneseWordList();
  }

  japaneseWordList():void{
    this.japneseService.getJapnese()
      .subscribe(words => {
        this.errorList = words.filter(function(word){
          return word.errorTimes !== undefined;
        })
        this.questionList = this.errorList.map(function(val){
          return val.romaji;
        });
        this.answerList = this.errorList.map(function(val){
          return val.hiragana + "(" + val.chinese + ")";
        });
      });
  }

  onDisplayResult(){
    if(this.showResult){
      this.showResult = false;
    } else {
      this.showResult = true;
    }
  }

  onReset(){
    this.errorList = this.errorList.sort(this.autoSort);
    this.questionList = this.errorList.map(function(val){
      return val.romaji;
    });
    this.answerList = this.errorList.map(function(val){
      return val.hiragana + "(" + val.chinese + ")";
    });
  }

  autoSort(a,b){
    return Math.random() >= 0.5 ? 1 : -1;
  }

  isResultVisible():boolean{
    return this.showResult;
  }

  onSwitchQuestionResult(){
    var temp = this.questionList;
    this.questionList = this.answerList;
    this.answerList = temp;
  }

}
