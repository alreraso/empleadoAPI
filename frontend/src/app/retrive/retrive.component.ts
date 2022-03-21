import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-retrive',
  templateUrl: './retrive.component.html',
  styleUrls: ['./retrive.component.css']
})
export class RetriveComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  retriveData: any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      this.retriveData = res
    });
  }

}
