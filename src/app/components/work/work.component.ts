import { Component, OnInit } from '@angular/core';
import { WORK } from '../../interfaces/work.interface'
import { WORK_LIST } from '../../constants/work.const'

@Component({
  selector: 'work-component',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  workList: WORK[] | undefined;
  selectedWork: WORK | undefined;

  ngOnInit(): void {
    this.workList = WORK_LIST;
    this.selectedWork = this.workList.find(work => work.selected);
  }

  public selectWork(company: string): void {
    try {
      this.workList?.forEach(work => {
        if (work.company === company) {
          work.selected = true;
          this.selectedWork = work;
        } else {
          work.selected = false;
        }
      })
    } catch (err) {
      console.error('Exception in work-component => selectWork()')
    }
  }
}
