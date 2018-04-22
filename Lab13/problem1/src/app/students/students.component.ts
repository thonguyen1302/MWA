import {Component, OnInit} from '@angular/core';
import {DbService} from "app/db.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  private students: object[];

  constructor(private db: DbService) {
    this.students = db.getData();
  }

  ngOnInit() {
  }

}
