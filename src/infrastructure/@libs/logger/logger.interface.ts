export default interface LoggerInterface {
  info: (body: string) => void;
  success: (body: string) => void;
  warn: (body: string) => void;
  error: (body: string | Error) => void;
}
