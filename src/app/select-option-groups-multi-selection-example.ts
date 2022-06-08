import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**
 * @title Select Option Groups Multi Selection
 * @order 60
 */
@Component({
  selector: 'sbb-select-option-groups-multi-selection-example',
  templateUrl: 'select-option-groups-multi-selection-example.html',
})
export class SelectOptionGroupsMultiSelectionExample {
  form: FormGroup;

  value = new FormControl();

  myForm = new FormGroup({
    value: this.value,
  });
  foodFromTheWorld: any[] = [
    {
      nation: 'Italy',
      food: [
        { value2: 'lasagna', viewValue: 'Lasagna' },
        { value2: 'parmigiana', viewValue: 'Parmigiana' },
        { value2: 'pasta', viewValue: 'Pasta' },
      ],
    },
    {
      nation: 'Germany',
      food: [
        { value2: 'weißwurst', viewValue: 'Weißwurst' },
        { value2: 'eisbein', viewValue: 'Eisbein' },
        { value2: 'rheinische-muscheln', viewValue: 'Rheinische Muscheln' },
      ],
    },
    {
      nation: 'Switzerland',
      food: [
        { value2: 'birchermüesli', viewValue: 'Birchermüesli' },
        { value2: 'rösti', viewValue: 'Rösti' },
        { value2: 'bündnernusstorte', viewValue: 'Bündnernusstorte' },
      ],
    },
  ];

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      value: [['lasagna', 'eisbein', 'rösti']],
    });

    console.log('@sp: this.form.value ', this.form.value);
    debugger;

    // this.value.setValue([['lasagna', 'eisbein', 'rösti']]);
    this.value.setValue([['lasagna', 'eisbein', 'rösti']]);
  }
}
