/* eslint-disable @typescript-eslint/restrict-template-expressions */

// TYPES
export type TestOptions =
  | "UNIT"
  | "INTEGRATION"
  | "E2E"
  | "CONTRACT"
  | "COMPONENT";

export type ArchitectureOptions =
  | "INFRA"
  | "USECASE"
  | "DOMAIN"
  | "EVENT"
  | "APPLICATION"
  | "CORE";

export interface TestSuiteAttributes {
  test: TestOptions;
  system: ArchitectureOptions;
  details: string;
  file: string;
}

export interface GherkingOptions {
  feature?: string;
  scenario: string;
  given?: string;
  when: string;
  then: string | string[];
}
