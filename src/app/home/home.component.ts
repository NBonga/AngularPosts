import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { model } from '../Model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor (private services: ServicesService) {} 

  newData!: model[] 

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.services.getpro().subscribe((products:any) => {
      this.newData = products
      console.log(this.newData)
    } )
  }
}
