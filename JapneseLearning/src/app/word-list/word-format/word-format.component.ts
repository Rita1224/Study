import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {JapneseService} from "../../service/japnese.service";

@Component({
  selector: 'app-word-format',
  templateUrl: './word-format.component.html',
  styleUrls: ['./word-format.component.css']
})
export class WordFormatComponent implements OnInit {
  test="";
  result: string = "";
  constructor(private japneseService: JapneseService) { }

  ngOnInit(): void {
    
  }

  onInsert(){
    this.japneseService.insertWords().subscribe(res => {
      console.log(res);
    })
  }

  onInsertSentences(){
    this.japneseService.insertSentences().subscribe(res => {
      console.log(res);
    })
  }

  formatString(str:string){
    var res = {
      romaji: "",
      hiragana: "",
      chinese: "",
      groupName: ""
    };
    let t = str.split(" ");
    let ts = t.filter(i=>i && i.trim())
    res.romaji = ts[0];
    let tst = ts[1].split("（");
    res.hiragana = tst[0];
    let tsts = tst[1].split("）");
    res.chinese = tsts[0];
    res.groupName="は行";
    return JSON.stringify(res);
  }

  formatJapaneseSentences(str:string){
    var res = {
      romaji: "",
      hiragana: "",
      chinese: ""
    }
    let t = str.split(";");
    res.romaji = t[0];
    res.hiragana = t[1];
    res.chinese = t[2];
    return JSON.stringify(res);
  }

  /* input string format should be はな;花;花, */
  onJapaneseSentencesFormat(){
    this.result = "";
    var words = this.test.split(",\n");
    words.forEach(val => {
      this.result += "," + this.formatJapaneseSentences(val);
    });
  }

  /* はこ 箱（箱子）,*/
  onformat(){
    this.result = "";
    var words = this.test.split(",\n");
    words.forEach(val => {
      this.result += "," + this.formatString(val);
    });
  }
}