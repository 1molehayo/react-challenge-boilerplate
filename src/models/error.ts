export interface ErrorProps {
  errorId: string;
  description: string;
  diagnosticId: string;
  validationErrors: string;
}

class ErrorModel {
  error: ErrorProps;

  constructor(error: ErrorProps) {
    this.error = {...error};
  }
}

export default ErrorModel;
