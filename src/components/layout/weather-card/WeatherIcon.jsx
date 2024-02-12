import Image from 'next/image';

export const WeatherIcon = (props) => {
  return (
    <div {...props}>
      <Image
        width={100}
        height={100}
        alt='weather-icon'
        className='h-full w-full'
        src={`https://openweathermap.org/img/wn/${props.iconname}@4x.png`}
      />
    </div>
  );
};
