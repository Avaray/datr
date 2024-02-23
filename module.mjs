export default function (precision = 0, separator = '') {
  function z(n) {
    return n.toString().padStart(2, '0');
  }

  const date = new Date();

  const [year, month, day, hours, minutes, seconds, milliseconds] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  ];

  switch (parseInt(precision)) {
    case 1:
      return `${year}${z(month)}${z(day)}${separator}${z(hours)}${z(minutes)}${z(seconds)}`;
    case 2:
      return `${year}${z(month)}${z(day)}${separator}${z(hours)}${z(minutes)}${z(seconds)}${separator}${z(
        milliseconds,
      ).padStart(3, '0')}`;
    default:
      return `${year}${z(month)}${z(day)}`;
  }
}
