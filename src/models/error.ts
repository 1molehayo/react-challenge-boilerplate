export interface ErrorProps {
  error: {
    errorId: string;
    description: string;
    diagnosticId: string;
    validationErrors: string;
  };
}

class ErrorModel {
  response: ErrorProps;

  constructor(response: ErrorProps) {
    this.response = response ;
  }
}

export default ErrorModel;
