export const formatDate = (date) => {
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options);
};

export const formatUnixTimeStamp = (unixTimestamp) => {
  let date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const formatTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  const hour = date.getHours().toString().padStart(2, '0');
  const formattedTime = `${hour}`;
  return formattedTime;
};
