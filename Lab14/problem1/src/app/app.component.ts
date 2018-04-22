import {Component, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {MyService} from "app/my.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private postForm: FormGroup;
  private name: AbstractControl;
  private email: AbstractControl;
  private post: AbstractControl;
  private subscription: Subscription;

  private formData: object = {
    name: '',
    email: '',
    post: ''
  };

  constructor(private formBuilder: FormBuilder, private dataService: MyService) {
    this.postForm = formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'post': ['', [Validators.minLength(10), Validators.required]]
    });

    this.name = this.postForm.controls['name'];
    this.email = this.postForm.controls['email'];
    this.post = this.postForm.controls['post'];
  }

  retrieveData() {
    this.subscription = this.dataService.getData().subscribe(results => {
      this.formData['name'] = results[0].name;
      this.formData['email'] = results[0].email;
      this.formData['post'] = results[1][Math.floor(Math.random() * results[1].length)].title;
    });
  }

  onSubmit() {
    console.log(this.formData);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
