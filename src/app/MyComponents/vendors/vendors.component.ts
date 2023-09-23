import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  user_name: String;
  user_id: number;
  user_phone: String;
  user_email: String;
  user_address: String;
}

var ELEMENT_DATA: PeriodicElement[] = [
  {user_id: 1, user_name: 'Ajay Rana', user_phone: '8907864367', user_email: 'ppp@gmail.com', user_address: 'New Town, Kolkata'}];

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.less'],
  standalone: true,
  imports: [MatGridListModule,FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule],
})
export class VendorsComponent {

  customer_name: String;
  customer_phone: String;
  customer_email: String;
  customer_address: String;
  counter: number = 1;

  // @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(){
    this.customer_name = '';
    this.customer_phone = '';
    this.customer_email = '';
    this.customer_address = '';
  }

  public saveCustomer = () => {
    const entered_data = {
      user_name: this.customer_name,
      user_phone: this.customer_phone,
      user_email: this.customer_email,
      user_address: this.customer_address
    }
    console.log(entered_data);

    const new_data = {
      user_name: entered_data.user_name,
      user_id: ++this.counter,
      user_phone: entered_data.user_phone,
      user_email: entered_data.user_email,
      user_address: entered_data.user_address
    };

    ELEMENT_DATA = [...ELEMENT_DATA, new_data];
    this.dataSource = ELEMENT_DATA;

    //refreshing the form
    this.customer_name = '';
    this.customer_phone = '';
    this.customer_email = '';
    this.customer_address = '';
    
  }

  displayedColumns: string[] = ['user_id', 'user_name', 'user_phone', 'user_email', 'user_address'];
  dataSource = ELEMENT_DATA;

}
