import {Component, OnInit, OnDestroy} from '@angular/core';
import {DbService} from "app/db.service";
import {ActivatedRoute} from "@angular/router";
import {ProfileGuard} from "app/profile.guard";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {

  private student: object;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, db: DbService) {
    this.subscription = route.params.subscribe(params => {
      this.student = db.getDataFromId(params['id']);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
