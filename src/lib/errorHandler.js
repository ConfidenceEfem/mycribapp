export function getErrorMessage(error) {
  if (error?.response) {
    return error?.response.data?.message || error.response.data?.error || "Something went wrong on the server.";
  } else if (error?.request) {
    return "No response from server. Please check your network.";
  } else {
    return error?.message || "An unexpected error occurred.";
  }
}