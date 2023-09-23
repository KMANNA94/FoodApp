import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
// import { MatTable } from '@angular/material/table';

import { HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  user_name: String;
  user_id: number;
  user_phone: String;
  user_email: String;
  user_address: String;
}

var ELEMENT_DATA: PeriodicElement[] = [
  {user_id: 1, user_name: 'Ajay Rana', user_phone: '8907864367', user_email: 'ppp@gmail.com', user_address: 'New Town, Kolkata'}
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'customers-component',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less'],
  standalone: true,
  imports: [MatGridListModule,FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule],
})

export class CustomersComponent {
  customer_name: String;
  customer_phone: String;
  customer_email: String;
  customer_address: String;
  counter: number = 1;

  // @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private http: HttpClient){
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

    // this.http.get('http://192.168.1.10:3000/getAllUsers')
    //   .subscribe(data => {
    //     console.log('data =>',data);
    //   });

    
    
  }

  displayedColumns: string[] = ['user_id', 'user_name', 'user_phone', 'user_email', 'user_address'];
  dataSource = ELEMENT_DATA;
  

}
