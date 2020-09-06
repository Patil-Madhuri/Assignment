import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  accountForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formInit()
  }
  formInit() {
    this.accountForm = this.formBuilder.group({
      company_name: ['ABB Ltd'],
      address: ['Affolternstrasse 44 Zurich, ZH 8050, CH'],
      phone_no: ['+41234567890'],
      website: ['social.abb'],
      ownership: ['Corporation'],
      linkedin_url: ['https://www.linkedin.com/company/abb'],
      revenue: ['$1B+'],
      parent_company: ['ABB Ltd'],
      primary_industry: ['Electrical Equipment, Appliance and Component Manufacturing'],
      emp_size: ['10,001+'],
      sjc: ['36-Electronics Electric Equipment, Except Computer Equipment'],
      najcs: ['335 Electrical Equipment, Appliance and Component Manufacturing'],
      all_industry: ['Manufacturing Electrical Equipment, Appliances and  Component Manufacturing'],
      all_sjc: ['36-Electronics Electric Equipment, Except Computer Equipment, 67 Holding and other invest']
    })
  }
  savedetails() { }
  redirectTo() {
    this.router.navigate(['contacts']);
  }
}
