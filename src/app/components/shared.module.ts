import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from './controls/primary-btn/primary-btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterBtnComponent } from './controls/filter-btn/filter-btn.component';
import { ChipsBtnComponent } from './controls/chips-btn/chips-btn.component';
import { RoundBtnComponent } from './controls/round-btn/round-btn.component';
import { QuantityBtnComponent } from './controls/quantity-btn/quantity-btn.component';
import { CheckboxGrpComponent } from './forms/checkbox-grp/checkbox-grp.component';
import { InputFieldComponent } from './forms/input-field/input-field.component';
import { RadioBtnComponent } from './forms/radio-btn/radio-btn.component';
import { SelectBoxComponent } from './forms/select-box/select-box.component';
import { TextareaComponent } from './forms/textarea/textarea.component';
import { BaseItemCardComponent } from './item/base-item-card/base-item-card.component';
import { HrzItemCardComponent } from './item/hrz-item-card/hrz-item-card.component';
import { MiniItemCardComponent } from './item/mini-item-card/mini-item-card.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FilterComponent } from './shared/filter/filter.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SliderComponent } from './shared/slider/slider.component';
import { StepperComponent } from './shared/stepper/stepper.component';
import { FormsModule } from '@angular/forms';

const Components = [  
    PrimaryBtnComponent,
    FilterBtnComponent,
    ChipsBtnComponent,
    RoundBtnComponent,
    QuantityBtnComponent,
    ChipsBtnComponent,
    FilterBtnComponent,
    QuantityBtnComponent,
    RoundBtnComponent,
    CheckboxGrpComponent,
    InputFieldComponent,
    RadioBtnComponent,
    SelectBoxComponent,
    TextareaComponent,
    BaseItemCardComponent,
    HrzItemCardComponent,
    MiniItemCardComponent,
    BreadcrumbsComponent,
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    SliderComponent,
    StepperComponent
];

const Modules = [
  FormsModule,
  FontAwesomeModule
]

@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    Modules
  ],
  exports: [
    Components,
    Modules
  ]
})
export class SharedModule { }
