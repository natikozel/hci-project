import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 12C21 12.4142 20.6642 12.75 20.25 12.75H5.56031L11.0306 18.2194C11.3237 18.5124 11.3237 18.9876 11.0306 19.2806C10.7376 19.5737 10.2624 19.5737 9.96937 19.2806L3.21937 12.5306C3.07854 12.3899 2.99941 12.1991 2.99941 12C2.99941 11.8009 3.07854 11.6101 3.21937 11.4694L9.96937 4.71938C10.2624 4.42632 10.7376 4.42632 11.0306 4.71938C11.3237 5.01243 11.3237 5.48757 11.0306 5.78062L5.56031 11.25H20.25C20.6642 11.25 21 11.5858 21 12V12Z'
      fill='#121717'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
