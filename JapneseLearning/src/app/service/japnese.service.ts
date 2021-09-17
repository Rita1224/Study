import { Injectable } from '@angular/core';
import {Japnese} from "../models/japnese";
import {WORDS} from "../mock-japnese";
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

  getHeroes(): Observable<string> {
    return this.http.get<string>("http://localhost:3000/test");
  }
}