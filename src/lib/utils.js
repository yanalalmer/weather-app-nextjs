export const formatDate = (date) => {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options);
};

export const formatTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const hour = date.getHours().toString().padStart(2, '0');
  const formattedTime = `${hour}`;
  return formattedTime;
};

export const formatDateTimeStamp = (dateTimeStamp) => {
  const date = new Date(dateTimeStamp);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayOfWeek = days[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = date.getMonth() + 1; // January is 0 in JavaScript

  const formattedDate = `${dayOfWeek} ${dayOfMonth}/${month}`;
  return formattedDate;
};
