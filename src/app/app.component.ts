import { Component, OnInit } from '@angular/core';
import { StylesManager, Model } from 'survey-core';
import 'survey-core/survey.i18n';
import { schema } from './form.schema';

StylesManager.applyTheme('defaultV2');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bank-claim-form-app';
  bankClaimForm!: Model;

  ngOnInit(): void {
    const form = new Model(schema);
    this.bankClaimForm = form;
  }
}
