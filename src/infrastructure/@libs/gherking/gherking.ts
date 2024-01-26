/* eslint-disable @typescript-eslint/restrict-template-expressions */

// ENUMS
import { GherkingEnums } from "./gherking.enum";

// TYPES
import { TestSuiteAttributes, GherkingOptions } from './gherking.types'

// METHODS
export const setFileInfo = (payload: TestSuiteAttributes): string => {
  const { system, details, file, test } = payload;

  const UpperCase = `[${test}][${system}][${details}]`.toUpperCase();

  return `${UpperCase}: ${file}`;
};

export const setTestInfo = (payload: GherkingOptions): string => {
  const { feature, given, scenario, when, then } = payload;

  function setThenVal(then: string | string[]): string | string[] {
    const init = `${"\n"}          `;

    if (typeof then === "string") {
      return `${init}${GherkingEnums.THEN} ${then}`;
    }

    return then.map(
      (then: string): string => `${init}${GherkingEnums.THEN} ${then}`,
    );
  }

  const FEATURE = `${GherkingEnums.FEATURE}: ${feature}`;
  const SCENARIO = `${GherkingEnums.SCENARIO}: ${scenario}`;
  const GIVEN = `${GherkingEnums.GIVEN} ${given}`;
  const WHEN = `${GherkingEnums.WHEN} ${when}`;
  const THEN = setThenVal(then);

  return `${FEATURE}
        ${SCENARIO}
          ${GIVEN},
          ${WHEN},${THEN}`;
};

export const _scenario = (callback: any): void => callback();
export const _given = (callback: any): void => callback();
export const _when = (callback: any): void => callback();
export const _then = (callback: any): void => callback();
