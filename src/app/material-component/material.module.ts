import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';

import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { RattrapageComponent } from './rattrapage/rattrapage.component';
import { RattrapageService } from './services/rattrapage.service';
import { AddRattrapageComponent } from './add-rattrapage/add-rattrapage.component';
import { EditRattrapageComponent } from './edit-rattrapage/edit-rattrapage.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';
import { EditActualiteComponent } from './edit-actualite/edit-actualite.component';
import { StageComponent } from './stage/stage.component';
import { AttestationComponent } from './attestation/attestation.component';
import { TestComponent } from './test/test.component';
import { AddTestComponent } from './add-test/add-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { EmploiComponent } from './emploi/emploi.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { AddEmploiComponent } from './add-emploi/add-emploi.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [RattrapageService],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    RattrapageComponent,
    AddRattrapageComponent,
    EditRattrapageComponent,
    ActualiteComponent,
    AddActualiteComponent,
    EditActualiteComponent,
    StageComponent,
    AttestationComponent,
    TestComponent,
    AddTestComponent,
    EditTestComponent,
    EmploiComponent,
    CalendrierComponent,
    AddEmploiComponent
  ]
})
export class MaterialComponentsModule {}
