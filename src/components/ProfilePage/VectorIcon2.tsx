import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.7806 12.5306L14.0306 19.2806C13.7376 19.5737 13.2624 19.5737 12.9694 19.2806C12.6763 18.9876 12.6763 18.5124 12.9694 18.2194L18.4397 12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H18.4397L12.9694 5.78062C12.6763 5.48757 12.6763 5.01243 12.9694 4.71938C13.2624 4.42632 13.7376 4.42632 14.0306 4.71938L20.7806 11.4694C20.9215 11.6101 21.0006 11.8009 21.0006 12C21.0006 12.1991 20.9215 12.3899 20.7806 12.5306V12.5306Z'
      fill='#121717'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
