export default interface FakerInterface {
  id: () => string
  string: (amount: number) => string 
  integer: (min: number, max: number) => number
  url: () => string
  sentence: (amount: number) => string
  boolean: (value: boolean) => boolean
  date: () => Date | string
}
