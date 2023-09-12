import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accountService: AccountService, private toastr: ToastrService){};

  registerForm !: FormGroup;
  isSubmitted: boolean = false;
  loading: boolean = false;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name : new FormControl<String>('' , Validators.required),
      email : new FormControl<String>('' , [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl<String>('' , [Validators.required, Validators.minLength(8)]),
      confirm_password : new FormControl<String>('' , [Validators.required, Validators.minLength(8)])
    })  
  }
  
  
  public get f() : any {
    return this.registerForm.controls
  }
  
  formSubmit(){
    this.isSubmitted = true;
    if(this.registerForm.valid){  
      this.loading = true;
      this.accountService.register(this.registerForm.value).subscribe(res =>{
        this.loading = false;
        this.toastr.success('Registration successfull!');
        console.log(res);  

      }, error =>{
        this.loading = false;
        console.log(error);
      })
    } 
  }


}
