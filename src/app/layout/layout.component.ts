import { Component, OnInit } from '@angular/core';
import { LayoutServiceService } from '../service/layout-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private layoutService: LayoutServiceService) { }

  ngOnInit() {
  }
  removeBox(index) {
    this.layoutService.setClickService(index);
    console.log('ggg-child');
  }


}
