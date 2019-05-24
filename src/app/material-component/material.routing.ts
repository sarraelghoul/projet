import { Routes } from '@angular/router';

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
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { RattrapageComponent } from './rattrapage/rattrapage.component';
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
export const MaterialRoutes: Routes = [
  {
    path: 'button',
    component: ButtonsComponent
  },
  {
    path: 'rattrapage',
    component: RattrapageComponent
  },

  {
    path: 'add-rattrapage',
    component: AddRattrapageComponent
  },

  {
    path: 'edit-rattrapage/:id',
    component: EditRattrapageComponent
  },
  {
    path: 'actualite',
    component: ActualiteComponent
  },
  {
    path: 'add-actualite',
    component: AddActualiteComponent
  },
  {
    path: 'edit-actualite/:id',
    component: EditActualiteComponent
  },

  {
    path: 'stage',
    component: StageComponent
  },

  {
    path: 'attestation',
    component: AttestationComponent
  },

  {
    path: 'test',
    component: TestComponent
  },

  {
    path: 'add-test',
    component: AddTestComponent
  },

  {
    path: 'edit-test',
    component: EditTestComponent
  },

  {
    path: 'emploi',
    component: EmploiComponent
  },
  {
    path: 'add-emploi',
    component: AddEmploiComponent
  },

  {
    path: 'calendrier',
    component: CalendrierComponent
  },

];
