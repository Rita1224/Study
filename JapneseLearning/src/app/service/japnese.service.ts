import { Injectable } from '@angular/core';
import {Japnese} from "../models/japnese";
import {WORDS} from "../mock-japnese";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JapneseService {
  private heroesUrl = 'http://127.0.0.1:3000/';  // URL to web api

  constructor( private http: HttpClient,) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getJapnese(): Observable<Japnese[]> {
    const words = of(WORDS);
    return words;
  }

  getHeroes(): Observable<string> {
    return this.http.get<string>(this.heroesUrl);
  }
}