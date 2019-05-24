import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'starter', name: 'Starter Page', type: 'link', icon: 'av_timer' },
  { state: 'rattrapage', name: 'Rattrapage', type: 'link', icon: 'av_timer' },
  { state: 'actualite', name: 'Actualite', type: 'link', icon: 'av_timer' },
  { state: 'test', name: 'Test', type: 'link', icon: 'av_timer' },
  { state: 'emploi', name: 'Emploi de temp', type: 'link', icon: 'av_timer' },
  { state: 'calendrier', name: 'calendrier Examens', type: 'link', icon: 'av_timer' },
  { state: 'stage', name: 'Demandes de stage', type: 'link', icon: 'av_timer' },
  { state: 'attestation', name: 'attestation de presence', type: 'link', icon: 'av_timer' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
