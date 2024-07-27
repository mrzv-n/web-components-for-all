/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
import { UIForm, UIInput, UISelector } from './ui/BaseComponents';
import { useState } from 'react';

export function WebComponentsDemo({ title }: { title: string }) {
  const [form, setForm] = useState({
    birthDay: 'sss',
    fullName: '',
    phoneNumber: '',
    state: 'Санкт-Петербург',
  });

  const [options, setOptions] = useState([
    'Санкт-Петербург',
    'Москва',
    'Воронеж',
  ]);

  function onInput(e: Event, fieldName: string) {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: (e.target as HTMLInputElement).value,
    }));
  }

  function onSelect(e: CustomEvent, fieldName: string) {
    console.warn('selest');
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: e.detail.value,
    }));
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span>Здравствуйте, добро пожаловать!</span>Я демка {title} 👋
            </h1>
          </div>
          <br />
          <UIForm>
            <UIInput
              value={form.birthDay}
              label="Дата рождения"
              error={!form.birthDay ? 'Заполните дату рождения' : ''}
              oninput={(e: Event) => onInput(e, 'birthDay')}
            />
            <UIInput
              value={form.fullName}
              label="Фамилия Имя Отчество"
              error={!form.fullName ? 'Заполните ФИО' : ''}
              oninput={(e: Event) => onInput(e, 'fullName')}
            />
            <UIInput
              value={form.phoneNumber}
              label="Телефон"
              error={!form.phoneNumber ? 'Заполните телефон' : ''}
              oninput={(e: Event) => onInput(e, 'phoneNumber')}
            />

            <UISelector
              value={form.state}
              options={options}
              label="Город"
              error={!form.state ? 'Выберите город' : ''}
              onselectitem={(e: CustomEvent) => onSelect(e, 'state')}
            />
          </UIForm>
        </div>
      </div>
    </>
  );
}

export default WebComponentsDemo;
