import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-format',
  templateUrl: './word-format.component.html',
  styleUrls: ['./word-format.component.css']
})
export class WordFormatComponent implements OnInit {
  test="";
  result: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  formatString(str:string){
    var res = {
      romaji: "",
      hiragana: "",
      chinese: "",
      group1: ""
    };
    let t = str.split(" ");
    let ts = t.filter(i=>i && i.trim())
    res.romaji = ts[0];
    let tst = ts[1].split("（");
    res.hiragana = tst[0];
    let tsts = tst[1].split("）");
    res.chinese = tsts[0];
    res.group1="か行";
    return JSON.stringify(res);
  }

  onformat(){
    this.result = "";
    var words = this.test.split(",\n");
    words.forEach(val => {
      this.result += "," + this.formatString(val);
    });
  }
}