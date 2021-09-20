import { Component, OnInit } from '@angular/core';
import {JapneseService} from "../../service/japnese.service";
import {Kana} from "../../models/kana";

@Component({
  selector: 'app-kana-list',
  templateUrl: './kana-list.component.html',
  styleUrls: ['./kana-list.component.css']
})
export class KanaListComponent implements OnInit {
  kanaList: Array<Kana> = [];
  constructor(private japneseService: JapneseService) { }

  ngOnInit(): void {
    this.getKanaList();
  }

  getKanaList():void{
    this.japneseService.queryKana()
      .subscribe(res => {
        this.kanaList = res.result;
      });
  }

  onMarkNeedRepeat(kana:any){
    kana.needRepeat = kana.needRepeat ? false : true;
    this.japneseService.updateKanaRepeatStatus(kana).subscribe();
  }
  
}
