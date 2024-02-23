export default function (precision = 0, separator = '') {
  function z(n) {
    return n.toString().padStart(2, '0');
  }

  const date = new Date();

  const a = `${date.getFullYear()}${z(date.getMonth() + 1)}${z(date.getDate())}`;
  const b = `${z(date.getHours())}${z(date.getMinutes())}${z(date.getSeconds())}`;
  const c = z(date.getMilliseconds()).padStart(3, '0');

  switch (parseInt(precision)) {
    case 1:
      return `${a}${separator}${b}`;
    case 2:
      return `${a}${separator}${b}${separator}${c}`;
    default:
      return a;
  }
}
