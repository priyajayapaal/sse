import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LayoutServiceService } from './service/layout-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clickData$: Observable<any>;
  subscription: Subscription;
  componentArray = [1, 2, 3, 4];

  constructor(private layoutService: LayoutServiceService) {
  }

  ngOnInit(): void {

    this.clickData$ = this.layoutService.getClickService();
    this.clickData$.subscribe(res => {
      console.log(res);
      if (res.id) {
        const indexOfItem = this.componentArray.indexOf(res.id);
        if (indexOfItem > -1) {
          this.componentArray.splice(indexOfItem, 1);
        } else {
          this.componentArray.push(res.id);
        }
        this.componentArray = this.componentArray.sort();
      }
      console.log(this.componentArray);
    });

  }
}
