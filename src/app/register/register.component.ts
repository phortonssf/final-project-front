import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  logIn(){ 
    console.log (this.form)
    this._usernameService.registerUser(this.form).subscribe( (res: any)=> { 
      console.log(res)
      sessionStorage.setItem('token', res.token); //token is stored in sessionStorage
      sessionStorage.setItem('userId', res.userId);
      this._usernameService.firstName = res.firstName;
      this._usernameService.isLoggedIn = true;
      this.goToDash();
    })
  }
  
  goToDash(){
    this.router.navigate(['/reso'])
  }
      
  

  ngOnInit() {
  }

}