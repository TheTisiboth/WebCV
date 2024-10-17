import { ReactElement } from 'react';
import {
  Tooltip
} from 'react-bootstrap';
import { scroller } from 'react-scroll';

/**
 * Display a tooltip next to the element
 * @param propss A sring to display in the tooltip
 */
export const renderTooltip = (propss: string): ReactElement => {
  return <Tooltip id="button-tooltip">{propss}</Tooltip>;
};

/**
 * Function that allow to scrool to a target element, with certain options
 * @param target Where we want to scroll
 * @param scrollOptions Contains options like offset, speed ...
 */
export const scrollTo = (target: string, scrollOptions: any): (() => void) =>
  (): void =>
    scroller.scrollTo(target, scrollOptions);

/**
 * Compute the age, according to the current date
 * @returns The age (only the years)
 */
export const computeAge = () => {
  const birthDate = new Date("04/20/1996")
  const monthDiff = Date.now() - birthDate.getTime()
  return Math.abs(new Date(monthDiff).getUTCFullYear() - 1970)
}
