import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title = 'TemplateDrivenForms';
  title = 'AWS Enrollment Form';
  topics = ["Angular","React","Vue"];
  userModel = new User('rob','rob@test.com',2362632316,'default','morning',true);
  topicHasError = true;
  submitted = false;
  errorMsg ='';

  constructor (private enrollmentService:EnrollmentService) {}

  validateTopics(value) {
    if(value === "default")
      this.topicHasError = true;
    else
      this.topicHasError = false;
  }

  onSubmit() {
    this.submitted=true;    
    console.log(this.userModel);
    this.enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success',data),
        error => this.errorMsg = "Security Breach Detected.");
    }
}
