<script setup lang="ts">
import { ref, reactive } from 'vue';

defineProps<{
  title: string;
}>();

const title = ref('vue');

const form = reactive({
  birthDay: 'sss',
  fullName: '',
  phoneNumber: '',
  state: 'Санкт-Петербург',
});

const options = ref(['Санкт-Петербург', 'Москва', 'Воронеж']);

function onInput(e: Event, fieldName: string) {
  form[fieldName] = (e.target as HTMLInputElement).value;
}

function onSelect(e: CustomEvent, fieldName: string) {
  form[fieldName] = e.detail.value;
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div id="welcome">
        <h1>
          <span>Здравствуйте, добро пожаловать!</span>
          Я демка {{ title }} 👋
        </h1>
      </div>

      <br />

      <base-form>
        <base-input
          :value="form.birthDay"
          label="Дата рождения"
          :error="!form.birthDay ? 'Заполните дату рождения' : ''"
          @input="(e: Event) => onInput(e, 'birthDay')"
        ></base-input>

        <base-input
          :value="form.fullName"
          label="Фамилия Имя Отчество"
          :error="!form.fullName ? 'Заполните ФИО' : ''"
          @input="(e: Event) => onInput(e, 'fullName')"
        ></base-input>

        <base-input
          :value="form.phoneNumber"
          label="Телефон"
          :error="!form.phoneNumber ? 'Заполните телефон' : ''"
          @input="(e: Event) => onInput(e, 'phoneNumber')"
        ></base-input>

        <base-selector
          label="Город"
          :options="options"
          :value="form.state"
          :error="!form.state ? 'Выберите город' : ''"
          @select-item="(e: CustomEvent) => onSelect(e, 'state')"
        ></base-selector>
      </base-form>
    </div>
  </div>
</template>

<style scoped>
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
