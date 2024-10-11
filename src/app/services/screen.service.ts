import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  private isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe('(max-width: 1264px)')
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });
  }

  getIsSmallScreen(): boolean {
    return this.isSmallScreen;
  }
}
