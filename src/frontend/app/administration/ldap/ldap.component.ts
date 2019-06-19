import { Component, OnInit } from '@angular/core';
import { SignaturesContentService } from '../../service/signatures.service';
import { NotificationService } from '../../service/notification.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { map, finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmComponent } from '../../plugins/confirm.component';
import { TranslateService } from '@ngx-translate/core';


export interface Ldap {
    id: string;
    label: string;
    description: string;
}

@Component({
    selector: 'app-administration-ldap',
    templateUrl: 'ldap.component.html',
    styleUrls: ['ldap.component.scss'],
})

export class LdapComponent implements OnInit {

    creationMode: boolean = true;
    loading: boolean = true;
    ldap: Ldap;
    ldapClone: Ldap;
    title: string = '';

    constructor(public http: HttpClient, private translate: TranslateService, private route: ActivatedRoute, private router: Router, public signaturesService: SignaturesContentService, public notificationService: NotificationService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
            if (params['id'] === undefined) {
                this.creationMode = true;
                this.title = this.translate.instant('lang.ldapCreation');
                this.ldap = {
                    id: '',
                    label: '',
                    description: ''
                };
                this.loading = false;
            } else {
                this.creationMode = false;
                this.http.get('../rest/ldaps/' + params['id'])
                    .pipe(
                        map((data: any) => data.ldap),
                        finalize(() => this.loading = false)
                    )
                    .subscribe({
                        next: data => {
                            this.ldap = data;
                            this.ldapClone = JSON.parse(JSON.stringify(this.ldap));
                            this.title = this.ldap.label;
                        },
                        error: err => this.notificationService.handleErrors(err)
                    });
            }
        });
    }

    canValidate() {
        if (JSON.stringify(this.ldap) === JSON.stringify(this.ldapClone)) {
            return false;
        } else {
            return true;
        }
    }

    onSubmit() {
        if (this.creationMode) {
            this.createLdap();
        } else {
            this.modifyLdap();
        }
    }

    modifyLdap() {
        this.loading = true;
        this.http.put('../rest/ldaps/' + this.ldap.id, this.ldap)
            .pipe(
                finalize(() => this.loading = false)
            )
            .subscribe({
                next: () => {
                    this.router.navigate(['/administration/ldaps']);
                    this.notificationService.success('lang.ldapUpdated');
                },
                error: err => this.notificationService.handleErrors(err)
            });
    }

    createLdap() {
        this.loading = true;
        this.http.post('../rest/ldaps', this.ldap)
            .pipe(
                finalize(() => this.loading = false)
            )
            .subscribe({
                next: () => {
                    this.router.navigate(['/administration/ldaps']);
                    this.notificationService.success('lang.ldapAdded');
                },
                error: err => this.notificationService.handleErrors(err)
            });
    }

    delete() {
        const dialogRef = this.dialog.open(ConfirmComponent, { autoFocus: false });

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'yes') {
                this.loading = true;
                this.http.delete('../rest/ldaps/' + this.ldap.id)
                    .pipe(
                        finalize(() => this.loading = false)
                    )
                    .subscribe({
                        next: () => {
                            this.router.navigate(['/administration/ldaps']);
                            this.notificationService.success('lang.ldapDeleted');
                        },
                        error: err => this.notificationService.handleErrors(err)
                    });
            }
        });
    }

    cancel() {
        this.router.navigate(['/administration/ldaps']);
    }
}