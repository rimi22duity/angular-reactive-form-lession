import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.css']
})
export class NewCourseFormComponentComponent {

  //this is the previous approach
  // form = new FormGroup({
  //   name: new FormControl(),
  //   contacts: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // });

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
                    name: ['', Validators.required],
                    contacts: fb.group({
                      email: [],
                      phone: []
                    }),
                    topics: fb.array([])
                  });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
