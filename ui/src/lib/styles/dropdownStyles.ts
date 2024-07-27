import { css } from 'lit-element';

export const dropDownStyles = css`
  :host {
    --form-input-color-label: #244855;
    --form-input-color-border: #244855;
    --form-input-color-bg: #fff;
    --form-input-disabled-color-bg: #9eaaa9;
    --form-input-color-focus: #90aead;
    --form-input-color-error: #e64833;

    --form-input-height: 70px;
    --form-input-ctrl-dim: var(--form-input-height);
    --form-input-inner-top: 20px;
    --form-input-ctrl-gap: 10px;
    --form-input-icon-dim: 20px;
    --form-input-color-icon: var(--form-input-color-label);

    --dropdown-border-color: #9fa0a7;
    --dropdown-color-text: #000;
    --dropdown-bg-color-hover: #f2f1ee;
    --dropdown-item-selected-color: #276acc;

    --icon-dim: 30px;
    --icon-dim-small: 16px;
    --border-radius: 8px;
    --dropdown-height: 300px;
    --dropdown-icon-side-gap: 12px;
  }

  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    box-shadow: 0 14px 20px rgba(119 119 119 / 33%);
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    margin-top: 10px;
    border: 1px solid var(--dropdown-border-color);
  }

  .dropdown__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dropdown__item {
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style: none;
  }

  .dropdown__button {
    border: none;
    font: inherit;
    background-color: transparent;
    position: relative;
    display: block;
    width: 100%;
    text-align: left;
    cursor: pointer;
    user-select: none;
    padding: 16px;
    transition-property: color, background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in;
    color: var(--dropdown-color-text);
  }

  .dropdown__button:hover {
    background-color: var(--dropdown-bg-color-hover);
  }

  .dropdown__button[active] {
    padding-right: calc(var(--icon-dim) + var(--dropdown-icon-side-gap));
    color: var(--dropdown-item-selected-color);
  }

  .dropdown__button[active]::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--dropdown-icon-side-gap);
    width: var(--icon-dim);
    height: var(--icon-dim);
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.3997 9.07399C17.6907 9.4065 17.657 9.91191 17.3244 10.2029L10.9459 15.7841C10.8864 15.8399 10.8204 15.8848 10.7505 15.919C10.4339 16.0748 10.0404 16.0063 9.79659 15.7287L7.43353 13.3657C7.12111 13.0533 7.12111 12.5467 7.43353 12.2343C7.74595 11.9219 8.25248 11.9219 8.5649 12.2343L10.4354 14.1048L16.2708 8.99873C16.6034 8.70779 17.1088 8.74148 17.3997 9.07399Z' fill='%23ff4e50'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
