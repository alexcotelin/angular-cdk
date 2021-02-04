import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  data;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  q1;

  constructor(private formBuilder: FormBuilder) {
    this.data = {
      heading: 'This is heading',
      progressbar: '',
      knowledgecheck: {
        introheading: 'A couple of questions to start',
        introcontent:
          '\u003cp\u003eThe first step of your application works.\n\u003c/p\u003e\n\u003cp\u003e\nWe\u0027re required to ask these questions.\n\u003c/p\u003e',
        introlabel: 'Continue',
        question1heading: '',
        question1intro: '',
        section1question1content: '',
        section1question2content: '',
        question1nextbuttonlabel: '',
        question1backbuttonlabel: '',
        question2heading: '',
        question2intro: '',
        section2question1content: '',
        section2question2content: '',
        question2nextbuttonlabel: '',
        question2backbuttonlabel: ''
      }
    };
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      surnameCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
      firstCtrl: ['', Validators.required],
      surnameCtrl: ['', Validators.required]
    });
  }
}
