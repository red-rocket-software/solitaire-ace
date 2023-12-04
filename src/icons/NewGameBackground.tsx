import * as React from 'react';
import { SVGProps } from 'react';

const NewGameBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={83}
    height={34}
    fill='none'
    {...props}
  >
    <g filter='url(#a)'>
      <rect
        width={75.238}
        height={33.013}
        x={4}
        y={0.567}
        fill='#924FD1'
        rx={16.506}
      />
    </g>
    <g filter='url(#b)'>
      <path
        fill='#702DAF'
        d='M5.433 16.554a51.6 51.6 0 0 1 36.185 0 51.6 51.6 0 0 0 36.186 0c0 8.98-7.279 16.258-16.258 16.258H21.691c-8.98 0-16.258-7.279-16.258-16.258Z'
      />
    </g>
    <defs>
      <filter
        id='a'
        width={81.38}
        height={39.155}
        x={0.929}
        y={0.567}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={3.071} />
        <feGaussianBlur stdDeviation={1.535} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1209_13192'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_1209_13192'
          result='shape'
        />
      </filter>
      <filter
        id='b'
        width={78.513}
        height={25.676}
        x={2.362}
        y={13.278}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={3.071} />
        <feGaussianBlur stdDeviation={1.535} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1209_13192'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_1209_13192'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
export default NewGameBackground;
