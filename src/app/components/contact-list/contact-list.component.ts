import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  searchForm: FormGroup;
  contactsList = [];
  slicedContactList = [];
  scrollDistance = 1;
  scrollThrottle = 50;

  constructor(private httpService: HttpService,
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getContactList();
  }


  getContactList() {
    this.spinnerService.show();
    var contentBody = { url: "assets/data.json", body: {} }
    this.httpService.httpGet(contentBody).subscribe(response => {
      console.log(response);
      this.contactsList = response;
      this.slicedContactList = response.slice(0, 10);
      this.spinnerService.hide();
    })
  }

  onScrollDown() {
    console.log("scroll");
    
    if (this.slicedContactList.length === this.contactsList.length) {
      console.log("Nothing to do");
      return      
    }
    else if (this.slicedContactList.length <= this.contactsList.length) {
      let len = this.slicedContactList.length;
      for (let i = len; i <= len + 3; i++) {
        this.slicedContactList.push(this.contactsList[i]);
      }
    }
  }

  redirect() {
    this.router.navigate(['account-details'])
  }
}
