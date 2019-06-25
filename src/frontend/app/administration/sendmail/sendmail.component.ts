import { Component, OnInit } from '@angular/core';
import { SignaturesContentService } from '../../service/signatures.service';
import { NotificationService } from '../../service/notification.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { map, finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


export interface Sendmail {
    auth: boolean,
    from: string,
    host: string,
    port: number,
    type: string,
    user: string,
    secure: string,
    charset: string,
    password: string,
    passwordAlreadyExists: boolean
}

@Component({
    selector: 'app-administration-sendmail',
    templateUrl: 'sendmail.component.html',
    styleUrls: ['../administration.scss', 'sendmail.component.scss'],
})

export class SendmailComponent implements OnInit {

    loading: boolean = true;
    sendmail: Sendmail;
    sendmailClone: Sendmail;
    title: string = '';
    passwordLanguage: string = '';
    hidePassword: boolean = true;
    sendmailLabel: string;
    emailSendResult = {
        icon: '',
        msg: '',
        debug: '',
        error: false
    };
    recipientTest: string;
    emailSendLoading: boolean;
    profileInfo: any;

    smtpTypeList = [
        {
            id: 'smtp',
            label: 'lang.smtpclient'
        },
        {
            id: 'sendmail',
            label: 'lang.smtprelay'
        },
        {
            id: 'qmail',
            label: 'lang.qmail'
        },
        {
            id: 'mail',
            label: 'lang.phpmail'
        }
    ];
    smtpSecList = [
        {
            id : '',
            label : 'lang.none'
        },
        {
            id : 'ssl',
            label : 'ssl'
        },
        {
            id : 'tls',
            label : 'tls'
        }
    ];

    constructor(public http: HttpClient, private translate: TranslateService, private route: ActivatedRoute, private router: Router, public signaturesService: SignaturesContentService, public notificationService: NotificationService, public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(() => {
            this.http.get('../rest/configurations/1')
                .pipe(
                    map((data: any) => data.configuration),
                    finalize(() => this.loading = false)
                )
                .subscribe({
                    next: data => {
                        this.sendmail = data.value;
                        this.sendmailLabel = data.label;
                        this.sendmailClone = JSON.parse(JSON.stringify(this.sendmail));
                        this.title = this.translate.instant('lang.manage_email_configuration');
                        if (this.sendmail.passwordAlreadyExists) {
                            this.passwordLanguage = this.translate.instant('lang.passwordModification');
                        } else {
                            this.passwordLanguage = this.translate.instant('lang.password');
                        }
                    },
                });
        });
    }

    canValidate() {
        if (JSON.stringify(this.sendmail) === JSON.stringify(this.sendmailClone)) {
            return false;
        } else {
            return true;
        }
    }

    onSubmit() {
        this.loading = true;
        this.http.patch('../rest/configurations/1', {'value': this.sendmail, 'label': this.sendmailLabel})
            .pipe(
                finalize(() => this.loading = false)
            )
            .subscribe({
                next: () => {
                    this.notificationService.success('lang.emailConfigurationUpdated');
                },
            });
    }

    initEmailSend() {
        this.profileInfo = JSON.parse(JSON.stringify(this.signaturesService.userLogged));
        this.recipientTest = this.profileInfo.email;
    }

    testEmailSend() {
        if (JSON.stringify(this.sendmailClone) !== JSON.stringify(this.sendmail)) {
            this.onSubmit();
        }
        this.emailSendResult = {
            icon: 'fa-paper-plane primary',
            msg: 'lang.emailSendInProgress',
            debug: '',
            error: false
        };
        let email = {
            "sender": this.sendmail.from,
            "recipients": [this.recipientTest],
            "subject": "[" + this.translate.instant('lang.doNotReply') +"] " + this.translate.instant('lang.emailSendTest'),
            "status": "EXPRESS",
            "body": this.translate.instant('lang.emailSendTest'),
            "isHtml": false
        };
        this.emailSendLoading = true;

        this.http.post('../rest/emails', email)
            .pipe(
                finalize(() => this.emailSendLoading = false)
            )
            .subscribe({
                next: () => {
                    this.emailSendResult = {
                        icon: 'fa-check green',
                        msg: 'lang.emailSendSuccess',
                        debug: '',
                        error: false
                    };
                },
                error: err => {
                    this.emailSendResult = {
                        icon: 'fa-times red',
                        msg: 'lang.emailSendFailed',
                        debug: err.error.errors,
                        error: true
                    };
                }
            });
    }
 
    cancel() {
        this.router.navigate(['/administration']);
    }
}
