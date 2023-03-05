import { HiCube, HiNewspaper, HiPhoneArrowUpRight } from 'react-icons/hi2';
import { IconType } from 'react-icons/lib';

export type navigationLink = {
  title: string;
  link: string;
  icon: IconType;
};

export const navigationLinks: Array<navigationLink> = [
  { title: 'Properties', link: '/properties', icon: HiCube },
  { title: 'Contact', link: '/contact', icon: HiNewspaper },
  {
    title: '(800) 555 555',
    link: 'tel:(800) 555 555',
    icon: HiPhoneArrowUpRight,
  },
];
