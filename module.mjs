function z(n) {
  return n.toString().padStart(2, '0');
}

export default function datr({ precision = 'day', separator = '', date } = {}) {
  const d = date ? new Date(date) : new Date();
  if (isNaN(d.getTime())) throw new TypeError(`datr: invalid date value "${date}"`);

  const [year, month, day, hours, minutes, seconds, milliseconds] = [
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds(),
  ];

  const ymd = `${year.toString().padStart(4, '0')}${z(month)}${z(day)}`;

  switch (precision) {
    case 1:
    case 'seconds':
      return `${ymd}${separator}${z(hours)}${z(minutes)}${z(seconds)}`;
    case 2:
    case 'ms':
      return `${ymd}${separator}${z(hours)}${z(minutes)}${z(seconds)}${separator}${milliseconds.toString().padStart(3, '0')}`;
    default:
      return ymd;
  }
}

