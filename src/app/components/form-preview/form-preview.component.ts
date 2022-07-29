import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { SameAsAddressModel } from 'src/app/models/same-as-address.model';
import { StateModel } from 'src/app/models/state.model';
import { NonAsyncCustomValidation } from 'src/app/validation/custom.validation';
import { SERVER_DATA } from 'src/assets/formJson';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss']
})
export class FormPreviewComponent implements OnInit {

  serverDataC: any[] = []
  viewModeC: any = 'basic'
  uiBindingsC: any = ["firstName", "country", "state", "permanentAddress", "sameAsPermanent", "correspondenceAddress"];
  dynamicForm:DynamicFormBuildConfig | any;
  dynamicFormConfigurationC!: DynamicFormConfiguration;

  json1: any
  json2: any



  constructor(private dynamicFormBuilderC: RxDynamicFormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((event: any) => {      
      if (event.id == 1) {
        this.json1 = JSON.parse(localStorage.getItem('1') || '');
        this.serverDataC = this.json1
      }
      if (event.id == 2) {
        this.json2 = JSON.parse(localStorage.getItem('2') || '');
        this.serverDataC = this.json2
      }
    });    

    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This Field is required',
      }
    })
    this.dynamicFormConfigurationC = {
      controlConfigModels: [{ modelName: "state", model: StateModel }, { modelName: "sameAsAddress", model: SameAsAddressModel }, { modelName: "validationModel", model: NonAsyncCustomValidation }]
    }
    this.dynamicForm = this.dynamicFormBuilderC?.formGroup(this.serverDataC, this.dynamicFormConfigurationC);
  }

}
