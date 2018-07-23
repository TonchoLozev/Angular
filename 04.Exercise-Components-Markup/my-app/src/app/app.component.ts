import {Component} from '@angular/core';
import data from "./data";
import colors from "./colors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = data;
  colors = colors;
  articleInfo = undefined;
  initialView = 250; //symbols
  showImage = true;
  hideImage = false;
  initialFontSize = 16;
  descriptionStyle = this.setDescriptionStyles();
  textColor = 'black';
  backGroundColor = 'white';

  showInfo(article): void {
    this.articles.forEach((a, i) => {
      if (a.title === article.title) {
        this.articleInfo = a;
      }
    });
  }

  extendView() {
    this.initialView += 250;
  }

  imageAction() {
    if (this.showImage) {
      this.showImage = false;
      this.hideImage = true;
    } else {
      this.showImage = true;
      this.hideImage = false;
    }
  }

  increaseFont() {
    if (this.initialFontSize > 30) {
      return;
    }
    this.initialFontSize += 2;
    this.descriptionStyle = this.setDescriptionStyles();
  }

  decreaseFont() {
    if (this.initialFontSize < 8) {
      return;
    }
    this.initialFontSize -= 2;
    this.descriptionStyle = this.setDescriptionStyles();
  }

  setDescriptionStyles() {
    return {'font-size': this.initialFontSize + 'px', 'color': this.textColor, 'background-color': this.backGroundColor};
  }

  changeText(color) {
    this.textColor = color.value;
    this.descriptionStyle = this.setDescriptionStyles();
  }

  changeBackground(color) {
    this.backGroundColor = color.value;
    this.descriptionStyle = this.setDescriptionStyles();
  }
}
