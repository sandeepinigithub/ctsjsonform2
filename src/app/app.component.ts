import { Component } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig, ResetFormType } from '@rxweb/reactive-form-validators';
import { SERVER_DATA, SERVER_DATA2 } from 'src/assets/formJson';
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
  serverData2:any[] = SERVER_DATA2;

  dynamicForm!: DynamicFormBuildConfig;
  uiBindings: string[] = ["firstName", "country", "state", "permanentAddress", "sameAsPermanent", "correspondenceAddress"];
  dynamicFormConfiguration!: DynamicFormConfiguration;
  showField: boolean = false;
  constructor(private dynamicFormBuilder: RxDynamicFormBuilder) { }


  ngOnInit() {
    // ReactiveFormConfig.set({
    //   validationMessage: {
    //     required: 'This Field is required',
    //   }
    // })
    // this.dynamicFormConfiguration = {
    //   controlConfigModels: [{ modelName: "state", model: StateModel }, { modelName: "sameAsAddress", model: SameAsAddressModel }, { modelName: "validationModel", model: NonAsyncCustomValidation }]
    // }
    // this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData, this.dynamicFormConfiguration)


  }
  ngAfterViewInit() {
    this.customRemoveValidation()
    // this.resetForm()
  }

  customRemoveValidation() {
    console.log("Hello World!!");
    let allInput = document.getElementsByClassName('form-control');
    for (let i = 0; i < allInput.length; i++) {
      allInput[i].classList.remove('is-invalid');
    }
    // this.dynamicForm.formGroup.setBackEndErrors({
    //   firstName:{true:"Hello World!!"}
    // })
  }
  // resetForm() {
  //   this.dynamicForm.formGroup.resetForm({ resetType: ResetFormType.ControlsOnly })
  // }
  // showHideMethod() {
  //   this.showField = !this.showField;
  //   this.serverData = [
  //     {
  //       type: 'text',
  //       name: 'firstName',
  //       modelName: 'validationModel',
  //       ui: { label: 'First Name', placeholder: 'Enter Your First Name' }
  //     },
  //     {
  //       type: 'text',
  //       name: 'firstName',
  //       modelName: 'validationModel',
  //       ui: {
  //         label: 'First Name',
  //         placeholder: 'Enter Your First Name'
  //       }
  //     },
  //   ]

  //   ReactiveFormConfig.set({
  //     validationMessage: {
  //       required: 'This Field is required',
  //     }
  //   })
  //   this.dynamicFormConfiguration = {
  //     controlConfigModels: [{ modelName: "state", model: StateModel }, { modelName: "sameAsAddress", model: SameAsAddressModel }, { modelName: "validationModel", model: NonAsyncCustomValidation }]
  //   }
  //   this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData, this.dynamicFormConfiguration)
  // }
  // submit() {
  //   let allInput: any = document.getElementsByClassName('form-control');
  //   for (let i = 0; i < allInput.length; i++) {
  //     if (!(allInput[i].value.length > 0)) {
  //       allInput[i].classList.add('is-invalid');
  //     }
  //   }
  //   console.log(allInput);

  // }

  // ++++++++++++++++++++++++++++++++++++++++++++++  Main Two Button ++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Genarate Form 1
  generate1() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This Field is required',
      }
    })
    this.dynamicFormConfiguration = {
      controlConfigModels: [{ modelName: "state", model: StateModel }, { modelName: "sameAsAddress", model: SameAsAddressModel }, { modelName: "validationModel", model: NonAsyncCustomValidation }]
    }
    this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData, this.dynamicFormConfiguration)

  }
  // Genarate Form 2
  generate2() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This Field is required',
      }
    })
    this.dynamicFormConfiguration = {
      controlConfigModels: [{ modelName: "validationModel", model: NonAsyncCustomValidation }]
    }
    this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData2, this.dynamicFormConfiguration)

  }
}
