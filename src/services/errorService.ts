let errors: String[] = [];

export const showErrorsIfExists = () => {
  const errorDiv: HTMLElement | null = document.querySelector(".errors");
  if (errors.length > 0) {
    errorDiv!.classList.add("errors--show");
    errorDiv!.innerText = "Errors: \n" + errors.join(", \n");
  }
};

export const addError = (error) => errors.push(error);

export const addFailedResponsesToErrorIfExists = async (responses: Response[]) => {
  const failedResponses = responses.filter((res) => !res.ok);
  if (failedResponses.length > 0) {
    failedResponses.forEach((res) => {
      addError(`Failed to fetch data for url: ${res.url}`);
    });
  }
};
