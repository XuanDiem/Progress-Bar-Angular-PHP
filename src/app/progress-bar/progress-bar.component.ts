import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() backgroundColor = '#d9d9d9';
  @Input() progressColor = '#1ce159';
  @Input() width = 50;
  constructor() { }

  ngOnInit() {
  }

}
