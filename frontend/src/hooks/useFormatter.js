const useFormatter = () => {

  const currencyFormat = (amount,format,currency) => {
    let _format = format || 'es-MX'
    let _currency = currency || 'MXN'
    const formatted = new Intl.NumberFormat(_format, {
      style: 'currency',
      minimumFractionDigits: 2,
      currency: _currency,
    });
    return formatted.format(amount);
  }

  const dateFormat = (input, time) => {
    const inputDate = new Date(input);
    let date, month, year, hours, minutes, seconds;
    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();
    date = date.toString().padStart(2, '0');
    month = month.toString().padStart(2, '0');
    if (time) {
      hours = inputDate.getHours();
      minutes = inputDate.getMinutes();
      seconds = inputDate.getSeconds();
      hours = hours.toString().padStart(2, '0');
      minutes = minutes.toString().padStart(2, '0');
      seconds = seconds.toString().padStart(2, '0');
      return `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }
    return `${date}/${month}/${year}`;
  };

	return { currencyFormat,dateFormat };
};

export default useFormatter;