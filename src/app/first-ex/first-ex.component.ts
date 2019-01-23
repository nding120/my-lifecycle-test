import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-ex',
  templateUrl: './first-ex.component.html',
  // template: <div>hello</div>可以直接写html内容此处，加url为了调用.html文件
  styleUrls: ['./first-ex.component.css']
})
export class FirstExComponent implements OnInit {
  num=10;
  welcome: string="welcome!!"

  constructor() { }

  ngOnInit() {
  }

}
