// LIBS
import * as yup from "yup";

// LOGGER
import Logger from '../../infra/@libs/output/output';

export default abstract class Validator<T> {
  private readonly _logger: Logger;
  private readonly _context: string;
  private readonly _entity: T;
  private readonly _schema: yup.ObjectShape;
  private _model = {} as T;

  constructor(payload: { entity: T, schema: unknown, context: string }) {
    const { entity, schema, context } = payload;

    this._context = context;
    this._entity = entity;
    this._schema = schema as yup.ObjectShape;

    this._logger = new Logger();

    this.setModel();
  }

  private setModel = (): void => {
    for (const key in this._entity) {
      this._model[key.replace('_', '') as keyof T] = this._entity[key.replace('_', '') as keyof T];
    }
  }

  validate(): void {
    try {
      yup
        .object()
        .shape(this._schema)
        .validateSync( this._model, {  abortEarly: false })
    } catch (error) {
      const e = error as yup.ValidationError;
      console.log({e})
      e.errors.forEach((err) => {
        this._logger.error(`${this._context}: ${err}`);
      })
    }
  }
}