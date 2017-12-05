import { Component, OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'app-myconpent',
  templateUrl: './myconpent.component.html',
  styleUrls: ['./myconpent.component.css']
})

// class HeroconpentComponent {

//   constructor(
//     public id: number,
//     public name: string,
//     public power: string,
//     public alterEgo?: string
//   ) {
//   }
// }
export class MyconpentComponent implements OnInit, OnChanges {
  ngOnChanges() {
    }

  constructor() {
    const someValue: any = 'this is a string';
    const strLength: number = (someValue as string).length;
    console.log('测试单例', strLength);
    console.log('constructor be called');
   }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  // ngOnChanges() {
  //   console.log('ngOnChanges called');
  // }


}
