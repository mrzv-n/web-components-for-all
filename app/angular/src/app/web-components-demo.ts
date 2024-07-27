import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <style>
      svg {
        display: block;
        vertical-align: middle;
        shape-rendering: auto;
        text-rendering: optimizeLegibility;
      }

      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span>Здравствуйте, добро пожаловать!</span>
            Я демка angular 👋
          </h1>
        </div>
        <br />
        <base-form>
          <base-input
            [value]="form.birthDay"
            label="Дата рождения"
            (input)="onInput($event, 'birthDay')"
            [error]="!form.birthDay ? 'Заполните дату рождения' : ''"
          ></base-input>

          <base-input
            [value]="form.fullName"
            label="Фамилия Имя Отчество"
            (input)="onInput($event, 'fullName')"
            [error]="!form.fullName ? 'Заполните ФИО' : ''"
          ></base-input>
          <base-input
            [value]="form.phoneNumber"
            label="Телефон"
            (input)="onInput($event, 'phoneNumber')"
            [error]="!form.phoneNumber ? 'Заполните телефон' : ''"
          ></base-input>

          <base-selector
            label="Город"
            [options]="options"
            [value]="form.state"
            (select-item)="onSelectItem($event, 'state')"
            [error]="!form.state ? 'Укажите Город' : ''"
          ></base-selector>
        </base-form>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class WebComponentsDemo {
  options = ['Санкт-Петербург', 'Москва', 'Воронеж'];
  form = {
    birthDay: 'sss',
    fullName: '',
    phoneNumber: '',
    state: 'Санкт-Петербург',
  };

  onInput = (e: Event, fieldName: String) => {
    /* @ts-ignore */
    this.form[fieldName] = (e.target as HTMLInputElement).value;
  };

  onSelectItem = (e: Event, fieldName: String) => {
    console.warn(e, fieldName);
    /* @ts-ignore */
    this.form[fieldName] = (e as CustomEvent).detail.value;
  };
}
