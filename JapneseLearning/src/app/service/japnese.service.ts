import { Injectable } from '@angular/core';
import {Japnese} from "../models/japnese";
import {JapaneseSentences} from "../models/japaneseSentences";
import {WORDS} from "../mock-japnese";
import {SENTENCES} from "../mock-japnese-sentences";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class JapneseService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { 
  }

  getJapnese(): Observable<Japnese[]> {
    const words = of(WORDS);
    return words;
  }

  getSentence(): Observable<JapaneseSentences[]> {
    const sentences = of(SENTENCES);
    return sentences;
  }

  getHeroes(): Observable<string> {
    return this.http.get<string>("http://localhost:3000/test", {});
  }

  insertWords(): Observable<any> {
    return this.http.post<any>("http://localhost:3000/test/insertWords",
    WORDS);
  }

  insertSentences(): Observable<any> {
    return this.http.post<any>("http://localhost:3000/test/insertSentences",
    SENTENCES);
  }

  queryWords(): Observable<any>{
    return this.http.get<any>("http://localhost:3000/test/queryWords");
  }

  querySentences(): Observable<any>{
    return this.http.get<any>("http://localhost:3000/test/querySentences");
  }
}