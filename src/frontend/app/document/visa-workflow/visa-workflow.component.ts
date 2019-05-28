import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SignaturesContentService } from '../../service/signatures.service';

@Component({
    selector: 'app-visa-workflow',
    templateUrl: 'visa-workflow.component.html',
    styleUrls: ['visa-workflow.component.scss'],
})
export class VisaWorkflowComponent implements OnInit {

    loading: boolean = false;

    // tslint:disable-next-line:no-input-rename
    @Input('visaWorkflow') visaWorkflow: any;

    // tslint:disable-next-line:no-input-rename
    @Input('snavRightComponent') snavRightComponent: MatSidenav;

    constructor(public signaturesService: SignaturesContentService) { }

    ngOnInit(): void { }
}