import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.25 9.75H4.5V15.75H3C2.58579 15.75 2.25 16.0858 2.25 16.5C2.25 16.9142 2.58579 17.25 3 17.25H21C21.4142 17.25 21.75 16.9142 21.75 16.5C21.75 16.0858 21.4142 15.75 21 15.75H19.5V9.75H21.75C22.0853 9.74966 22.3796 9.52681 22.4709 9.20417C22.5622 8.88154 22.4282 8.53751 22.1428 8.36156L12.3928 2.36156C12.1519 2.21343 11.8481 2.21343 11.6072 2.36156L1.85719 8.36156C1.57176 8.53751 1.4378 8.88154 1.52908 9.20417C1.62036 9.52681 1.9147 9.74966 2.25 9.75V9.75ZM6 9.75H9V15.75H6V9.75ZM13.5 9.75V15.75H10.5V9.75H13.5ZM18 15.75H15V9.75H18V15.75ZM12 3.88031L19.1006 8.25H4.89937L12 3.88031ZM23.25 19.5C23.25 19.9142 22.9142 20.25 22.5 20.25H1.5C1.08579 20.25 0.75 19.9142 0.75 19.5C0.75 19.0858 1.08579 18.75 1.5 18.75H22.5C22.9142 18.75 23.25 19.0858 23.25 19.5V19.5Z'
      fill='#0D141C'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
