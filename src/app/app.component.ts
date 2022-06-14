import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timer';
  public second: any = 0;
  public minute: any = 0;
  public hour: any = 0;
  public btnName: any = 'Start';
  public timerStart: any;
  public timerArray: Array<any> = [];

  startTimer(value: any) {
    if (value == 'Start') {
      this.btnName = 'Stop';
      this.timerStart = setInterval(() => {
        this.second++;
        if (this.second > 59) {
          this.second = 0;
          this.minute++;
        }
        if (this.minute > 59) {
          this.second = 0;
          this.minute = 0;
          this.hour++;
        }
        if (this.hour > 59) {
          this.second = 0;
          this.minute = 0;
          this.hour++;
        }
      }, 1000)
    } else {
      clearInterval(this.timerStart);
      this.btnName = 'Start';
    }

  }

  resetTimer() {
    clearInterval(this.timerStart);
    this.timerArray = [];
    this.second = 0;
    this.minute = 0;
    this.hour = 0;
    this.btnName = 'Start';
  }

  flagTimer() {
    if (this.second == 0 && this.minute == 0 && this.hour == 0) {
      return;
    }
    this.timerArray.push(`${this.hour.toString().padStart(2, '0')}:${this.minute.toString().padStart(2, '0')}:${this.second.toString().padStart(2, '0')}`)
  }

  deleteFlag(id: any) {
    this.timerArray.splice(id, 1);
  }

}








