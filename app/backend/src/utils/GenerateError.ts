// essa class cria erros personalizados
export default class GenerateError extends Error {
  public readonly _codeStatus: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this._codeStatus = statusCode;
  }
}
