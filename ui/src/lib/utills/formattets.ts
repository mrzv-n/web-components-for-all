export function phoneMask(value: string): string {
  value = value.replace(/\D/g, '');

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  const match = value.match(/^(\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
  if (match) {
    return `+${match[1]}${match[2] ? ` (${match[2]}` : ''}${
      match[3] ? `) ${match[3]}` : ''
    }${match[4] ? `-${match[4]}` : ''}${match[5] ? `-${match[5]}` : ''}`;
  }

  return value;
}
