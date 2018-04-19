import { Injectable } from '@angular/core';
import {Http, Headers, HttpModule} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

import {Category} from './category';

@Injectable()
export class CategoryService{

    public API_URL: string = 'http://localhost:8181/api';
    
    constructor(public http : Http){}

    findAll(): Observable<Category[]>{
        return this.http
            .get(`${this.API_URL}/pais`)
            .map(res => res.json().content);
    }


}








