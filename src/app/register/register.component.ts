import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name = ""
  emailId = ""
  college = ""
  password = ""


  constructor(
    private service:RegisterService
  ) { }

  ngOnInit(): void {
  }

  onUpload(){
    let data = new FormData();
    data.append('name',this.name);
    data.append('emailId',this.emailId);
    data.append('college',this.college);
    data.append('password',this.password);
    this.service.executeRegistrationService(data).subscribe();
  }

}
