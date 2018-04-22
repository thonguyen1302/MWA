import {Injectable} from '@angular/core';

@Injectable()
export class DbService {

  private students: object[] = [
    {id: '1', name: 'Asaad Saad', stuId: '12345', email: 'asaad@mum.edu'},
    {id: '2', name: 'Sulav Neupane', stuId: '12346', email: 'sulavneupane@gmail.com'},
    {id: '3', name: 'Kshitij Chandra Poudyal', stuId: '12347', email: 'kcpoudyal@gmail.com'}
  ];

  constructor() {
  }

  getData() {
    return this.students;
  }

  getDataFromId(stuId): object {
    for (let student of this.students) {
      if (student['stuId'] === stuId) {
        return student;
      }
    }
    return null;
  }

}
