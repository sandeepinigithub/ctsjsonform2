import { Component, Input, OnInit } from '@angular/core';
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

  // Input variable from app component 
  @Input() viewModeC: any
  @Input() rxwebDynamicFormC: any
  @Input() uiBindingsC: any
  @Input() serverDataC: any

  @Input() dynamicForm!: DynamicFormBuildConfig;
  dynamicFormConfigurationC!: DynamicFormConfiguration;





  constructor(private dynamicFormBuilderC: RxDynamicFormBuilder) { }



  ngOnInit(): void {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This Field is required',
      }
    })
    this.dynamicFormConfigurationC = {
      controlConfigModels: [{ modelName: "state", model: StateModel }, { modelName: "sameAsAddress", model: SameAsAddressModel }, { modelName: "validationModel", model: NonAsyncCustomValidation }]
    }
    this.dynamicForm = this.dynamicFormBuilderC.formGroup(this.serverDataC, this.dynamicFormConfigurationC)
  }

}
