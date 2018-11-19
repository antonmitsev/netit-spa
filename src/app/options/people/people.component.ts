import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @Input() public dataChild;
  @Input() public header;
  constructor() { }

  ngOnInit() {
  }

}
