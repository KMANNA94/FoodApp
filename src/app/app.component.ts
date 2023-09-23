import { Component } from '@angular/core';
import { CustomersComponent } from './MyComponents/customers/customers.component';
import { VendorsComponent } from './MyComponents/vendors/vendors.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'FoodApp';
  headerTitle = 'The Food Company';
}
