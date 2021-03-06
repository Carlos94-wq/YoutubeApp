import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/Models/youtube.models';
import { YutubeService } from 'src/app/Services/yutube.service';

import Swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Videos: Video[] = [];

  constructor( private _Service: YutubeService) { }

  ngOnInit(): void {
    this._Service.GetVideos().subscribe(resp =>{
      console.log(resp);
      this.Videos.push( ...resp );
    });
  }

  public GetVideo( video: Video ){
    Swal.fire({
      html: `
      <h4>${video.title}</h4>
      <iframe 
        width="100%" 
        height="315" 
        src="https://www.youtube.com/embed/${video.resourceId.videoId}" 
        frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen>
      </iframe>
      `
    })
  }

}
