export default function (precision = 0, separator = '') {
  function z(n) {
    return n.toString().padStart(2, '0');
  }

  const date = new Date();

  const a = date.getFullYear() + z(date.getMonth() + 1) + z(date.getDate());
  const b = z(date.getHours()) + z(date.getMinutes()) + z(date.getSeconds());
  const c = date.getMilliseconds().toString().padStart(3, '0');

  switch (parseInt(precision)) {
    case 1:
      return [a, b].join(separator);
    case 2:
      return [a, b, c].join(separator);
    default:
      return a;
  }
}