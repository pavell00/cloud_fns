import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { error } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'A8-CloudFN';
  menulist : any[] = [];
  mytext: any
  constructor(private data: DataService){}

  ngOnInit(){
    // this.data.getMenuList().subscribe(actionArray => {
    //   this.menulist = actionArray.map(item => {
    //     return {
    //       id: item.payload.doc.id,
    //       ...item.payload.doc.data()
    //     } as any;
    //   })
    // });
  }

  onPress(){
    // this.data.call_fn().then(
    //   res => this.mytext = res
    // )
    this.data.call_fn2().subscribe(
      res => this.mytext = res,
      error =>  console.log(error)
    )
  }

}
