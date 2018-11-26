import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';


const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
	currentArticle: any;
  constructor(private http: HttpClient) { }

  getData(url)
  {
  		return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9cef470112eb4a97b32e26328d7a2cf0');
  }
}
