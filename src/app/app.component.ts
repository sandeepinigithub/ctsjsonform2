import { Component } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig, ResetFormType } from '@rxweb/reactive-form-validators';
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
      controlConfigModels: [{ modelName: "state", model: StateModel }, { modelName: "sameAsAddress", model: SameAsAddressModel },{ modelName: "validationModel", model: NonAsyncCustomValidation }]
    }
    this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData, this.dynamicFormConfiguration) 
    
    
  }
  ngAfterViewInit(){
    this.customRemoveValidation()
    this.resetForm()
  }

  customRemoveValidation() {
    console.log("Hello World!!");   
    let allInput = document.getElementsByClassName('form-control');
    for(let i=0;i<allInput.length;i++){
      allInput[i].classList.remove('is-invalid');      
    }  
    // this.dynamicForm.formGroup.setBackEndErrors({
    //   firstName:{true:"Hello World!!"}
    // })
  }
  resetForm() {
    this.dynamicForm.formGroup.resetForm({ resetType: ResetFormType.ControlsOnly })
  }
}
