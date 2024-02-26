import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.4974 9.51579 14.4842 7.50258 12 7.5V7.5ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15V15ZM20.25 12.2025C20.2537 12.0675 20.2537 11.9325 20.25 11.7975L21.6488 10.05C21.7975 9.86393 21.849 9.61827 21.7875 9.38813C21.5582 8.52619 21.2152 7.69861 20.7675 6.92719C20.6486 6.72249 20.4401 6.58592 20.205 6.55875L17.9813 6.31125C17.8888 6.21375 17.795 6.12 17.7 6.03L17.4375 3.80063C17.4101 3.56531 17.2732 3.35677 17.0681 3.23813C16.2964 2.79126 15.4689 2.44859 14.6072 2.21906C14.3769 2.15784 14.1312 2.20969 13.9453 2.35875L12.2025 3.75C12.0675 3.75 11.9325 3.75 11.7975 3.75L10.05 2.35406C9.86393 2.20533 9.61827 2.15383 9.38813 2.21531C8.52633 2.44503 7.6988 2.78802 6.92719 3.23531C6.72249 3.35417 6.58592 3.56268 6.55875 3.79781L6.31125 6.02531C6.21375 6.11844 6.12 6.21219 6.03 6.30656L3.80063 6.5625C3.56531 6.58988 3.35677 6.72682 3.23813 6.93188C2.79126 7.70359 2.44859 8.5311 2.21906 9.39281C2.15784 9.6231 2.20969 9.86878 2.35875 10.0547L3.75 11.7975C3.75 11.9325 3.75 12.0675 3.75 12.2025L2.35406 13.95C2.20533 14.1361 2.15383 14.3817 2.21531 14.6119C2.44462 15.4738 2.78763 16.3014 3.23531 17.0728C3.35417 17.2775 3.56268 17.4141 3.79781 17.4412L6.02156 17.6887C6.11469 17.7862 6.20844 17.88 6.30281 17.97L6.5625 20.1994C6.58988 20.4347 6.72682 20.6432 6.93188 20.7619C7.70359 21.2087 8.5311 21.5514 9.39281 21.7809C9.6231 21.8422 9.86878 21.7903 10.0547 21.6413L11.7975 20.25C11.9325 20.2537 12.0675 20.2537 12.2025 20.25L13.95 21.6488C14.1361 21.7975 14.3817 21.849 14.6119 21.7875C15.4738 21.5582 16.3014 21.2152 17.0728 20.7675C17.2775 20.6486 17.4141 20.4401 17.4412 20.205L17.6887 17.9813C17.7862 17.8888 17.88 17.795 17.97 17.7L20.1994 17.4375C20.4347 17.4101 20.6432 17.2732 20.7619 17.0681C21.2087 16.2964 21.5514 15.4689 21.7809 14.6072C21.8422 14.3769 21.7903 14.1312 21.6413 13.9453L20.25 12.2025ZM18.7406 11.5931C18.7566 11.8641 18.7566 12.1359 18.7406 12.4069C18.7295 12.5924 18.7876 12.7755 18.9037 12.9206L20.2341 14.5828C20.0814 15.0679 19.886 15.5385 19.65 15.9891L17.5312 16.2291C17.3467 16.2495 17.1764 16.3377 17.0531 16.4766C16.8727 16.6795 16.6805 16.8717 16.4775 17.0522C16.3387 17.1754 16.2505 17.3458 16.23 17.5303L15.9947 19.6472C15.5442 19.8833 15.0736 20.0787 14.5884 20.2313L12.9253 18.9009C12.7922 18.7946 12.6269 18.7367 12.4566 18.7369H12.4116C12.1405 18.7528 11.8688 18.7528 11.5978 18.7369C11.4123 18.7257 11.2292 18.7838 11.0841 18.9L9.41719 20.2313C8.93206 20.0786 8.46146 19.8831 8.01094 19.6472L7.77094 17.5312C7.75046 17.3467 7.66227 17.1764 7.52344 17.0531C7.32048 16.8727 7.12827 16.6805 6.94781 16.4775C6.82456 16.3387 6.6542 16.2505 6.46969 16.23L4.35281 15.9937C4.11674 15.5433 3.92128 15.0727 3.76875 14.5875L5.09906 12.9244C5.21522 12.7793 5.27336 12.5962 5.26219 12.4106C5.24625 12.1396 5.24625 11.8679 5.26219 11.5969C5.27336 11.4113 5.21522 11.2282 5.09906 11.0831L3.76875 9.41719C3.9214 8.93206 4.11685 8.46146 4.35281 8.01094L6.46875 7.77094C6.65326 7.75046 6.82362 7.66227 6.94688 7.52344C7.12733 7.32048 7.31954 7.12827 7.5225 6.94781C7.66188 6.82448 7.75043 6.65373 7.77094 6.46875L8.00625 4.35281C8.45672 4.11674 8.92733 3.92128 9.4125 3.76875L11.0756 5.09906C11.2207 5.21522 11.4038 5.27336 11.5894 5.26219C11.8604 5.24625 12.1321 5.24625 12.4031 5.26219C12.5887 5.27336 12.7718 5.21522 12.9169 5.09906L14.5828 3.76875C15.0679 3.9214 15.5385 4.11685 15.9891 4.35281L16.2291 6.46875C16.2495 6.65326 16.3377 6.82362 16.4766 6.94688C16.6795 7.12733 16.8717 7.31954 17.0522 7.5225C17.1754 7.66133 17.3458 7.74952 17.5303 7.77L19.6472 8.00531C19.8833 8.45578 20.0787 8.9264 20.2313 9.41156L18.9009 11.0747C18.7837 11.221 18.7255 11.406 18.7378 11.5931H18.7406Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
