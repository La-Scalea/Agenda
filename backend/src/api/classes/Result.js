module.exports = class Result {
  constructor(codeResult, answerResult) {
    this._code = codeResult || 500;
    this._answer = answerResult;
  }

  resultForResponse() {
    let result;
    if (this._code >= 200 && this._code < 300) {
      result = {
        code: this._code,
        return: this._answer,
      };
    } else {
      result = {
        code: this._code,
        return: {
          message: "Failed to process your request",
          error: this._answer,
        },
      };
    }
    return result;
  }
  get code() {
    return this._code;
  }
  set code(codeResult) {
    this._code = codeResult;
  }
  get answer() {
    return this._return;
  }
  set answer(answerResult) {
    this._answer = answerResult;
  }
};
