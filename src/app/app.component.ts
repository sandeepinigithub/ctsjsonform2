import { Component } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { SERVER_DATA } from 'src/assets/formJson';
import { SameAsAddressModel } from './models/same-as-address.model';
import { StateModel } from './models/state.model';
import { NonAsyncCustomValidation } from './validation/custom.validation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ctsjsonforms2';
  serverData: any[] = SERVER_DATA;

  dynamicForm!: DynamicFormBuildConfig;
  uiBindings: string[] = ["firstName", "country", "state", "permanentAddress", "sameAsPermanent", "correspondenceAddress"];
  dynamicFormConfiguration!: DynamicFormConfiguration;
  constructor(private dynamicFormBuilder: RxDynamicFormBuilder) { }


  ngOnInit() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This Field is required',
      }
    })
    this.dynamicFormConfiguration = {
      controlConfigModels: [{ modelName: "state", model: StateModel }, { modelName: "sameAsAddress", model: SameAsAddressModel },{ modelName: 'validationModel', model: NonAsyncCustomValidation }]
    }
    this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData, this.dynamicFormConfiguration)
  }
  func1(){
    console.log("Hello World!!");
  }
}
