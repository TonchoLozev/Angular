import { Component, OnInit } from '@angular/core';

import {OwnerClass} from "./OwnerClass";

import dataService from '../../../data';
import {Router} from "@angular/router";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owners: Array<OwnerClass>;

  constructor(private router: Router) { }

  ngOnInit() {
    dataService.getAllOwners().then(owners => {
      this.owners = owners;
    })
  }

  showOwner(owner) {
    this.router.navigateByUrl(`owner/${owner}`)
  }
}
