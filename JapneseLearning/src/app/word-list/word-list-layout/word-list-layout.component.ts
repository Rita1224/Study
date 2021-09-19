import { Component, OnInit, Input} from '@angular/core';
import { Japnese } from 'src/app/models/japnese';
import {GroupedJapnese} from "src/app/models/groupedJapnese";
import {JapneseService} from "../../service/japnese.service";
import {GroupByTypes} from "src/app/models/groupBy";

@Component({
  selector: 'app-word-list-layout',
  templateUrl: './word-list-layout.component.html',
  styleUrls: ['./word-list-layout.component.css']
})
export class WordListLayoutComponent implements OnInit {
  wordList: Array<any>= [];
  questionList: Array<any> = [];
  answerList: Array<any> = [];

 // wordGroupName: Array<string> = ["あ行","か行","さ行","た行"];
  showResult: boolean = false;
  showDisplayButton: boolean = false;
  japaneseWord: Array<GroupedJapnese> = [];

  @Input() groupBy: GroupByTypes = GroupByTypes.HANG;

  constructor(private japneseService: JapneseService) { }

  ngOnInit(): void {
    this.japaneseWordList();
   
  }

  japaneseWordList():void{
    this.japneseService.queryWords()
      .subscribe(words => {
        var result = words.result;
        result.map(function(val){
          if(val.learningDate){
            val.learningDate = val.learningDate.substring(0, 10);
          }
        });
        this.japaneseWord = this.getGroup(result);
      });
  }

  onDisplayResult(){
    this.showResult = true;
  }

  onReset(){
    this.wordList = this.wordList.sort(this.autoSort);
    this.setQuestionAnswerList();
  }

  onCheck(){
    
  }

  autoSort(a,b){
    return Math.random() >= 0.5 ? 1 : -1;
  }

  isResultVisible():boolean{
    return this.showResult;
  }

  isDisplayButtonVisible ():boolean{
    return this.showDisplayButton;
  }

  typeSelectedChange($event:any){
    this.wordList = $event.option.value.wordList || [];
    this.setQuestionAnswerList();
  }

  setQuestionAnswerList(){
    this.answerList = [];
    this.questionList = [];
    this.showResult = false;
    this.showDisplayButton = true;
    this.wordList.forEach(val => {
      this.questionList.push(val.romaji); 
      this.answerList.push(val.hiragana + " (" + val.chinese + ") ");
    })
  }

  getGroup(groupData) {
    groupData = groupData.filter(item => {
      return item[this.groupBy] ? true: false;
  });

    let result = groupData.reduce((prevValue, currentValue) => {
      let index = -1;
      prevValue.some((item, i) => {
          if (item.group == currentValue[this.groupBy]) {
              index = i;
              return true;
          }
      })
      if (index > -1) {
          prevValue[index].wordList.push(currentValue)
      } else {
          prevValue.push({
            group: currentValue[this.groupBy],
            wordList: [currentValue]
          })
      }
      return prevValue;
    }, []);
    return result;
  }

  onSwitchQuestionResult(){
    var temp = this.questionList;
    this.questionList = this.answerList;
    this.answerList = temp;
  }
}
