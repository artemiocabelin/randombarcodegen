import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colorList: string[] = setColorList();
}

function setColorList(): Array<string> {
    let colors = [];
    for(let i = 0; i < 6; i++) {
      colors.push(getRandomColor());
    }
    return colors;
  }

function getRandomColor(): string {
  let colorRGBList = [];
  for(let i=0;i < 3; i++) {
    colorRGBList.push(Math.floor(Math.random() * 256)) 
  }
  return "rgb("+colorRGBList.join()+")";
}