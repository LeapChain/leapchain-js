export function throwError(description: string, error?: any): never {
  let message = `Error(leapchain-js): ${description}`;
  if (error) {
    message += `Further details may be provided below:\n${error}`;
  }
  throw Error(message);
}
