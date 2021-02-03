import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { map } from 'rxjs/operators';
import { YoutubeRespons } from '../Models/youtube.models';


@Injectable({
  providedIn: 'root'
})
export class YutubeService {

  private Url: string = 'https://www.googleapis.com/youtube/v3';
  private APiKey: string = 'AIzaSyCTcOLp3GMpnpCcsWz5zsxwf_7AEmHCaeg';
  private PalyList: string = 'UUuaPTYj15JSkETGnEseaFFg';

  constructor(private _Http: HttpClient) { 
  }

  public GetVideos(){
    const BuildUrl = `${this.Url}/playlistItems`;
    const params = new HttpParams()
         .set('part','snippet')
         .set('key',this.APiKey)
         .set('playlistId',this.PalyList)
         .set('maxResults','10')

    return this._Http.get<YoutubeRespons>(BuildUrl, { params }).pipe(
      map( resp =>{
        return resp.items
      }),

      map(items =>{
        return items.map( video => video.snippet )
      })
    );
  }
}
