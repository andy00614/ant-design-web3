type ErrorWithMessage = { message: string } | null | undefined;

export function aggregateErrors(...errors: ErrorWithMessage[]): { message: string } | null {
  const errorMessages = errors
    .filter(
      (error): error is { message: string } =>
        error !== null && error !== undefined && 'message' in error,
    )
    .map((error) => error.message);

  if (errorMessages.length === 0) {
    return null; // Return null if there are no errors
  }

  return { message: errorMessages.join(', ') }; // Join all error messages
}
