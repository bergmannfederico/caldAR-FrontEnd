export const required = (value) => (value ? undefined : "Required");

//export const id = value=> ver luego validación ID

export const name = (value) =>
  /^(?:[-A-Z]+ )+[-A-Z]+$/i.test(value)
    ? undefined
    : "The name must be longer than 6 characters long and must contain at least one white space";

export const address = (value) =>
  /^(?:[-A-Z]+ )+[-A-Z\s0-9]+$/i.test(value)
    ? undefined
    : "The address must be at least 5 characters long, with letters, numbers, and a space in between";

export const phone = (value) =>
  /^\d{7,}$/.test(value)
    ? undefined
        : "The number must be at least 7 digits, do not accept spaces, hyphens, or parentheses";
    
//export const customerId = (value) =>

export const customerName = (value) =>
  /^(?:[-A-Z]+ )+[-A-Z]+$/i.test(value)
    ? undefined
        : "The name must be longer than 6 characters long and must contain at least one white space";
    
//export const installedBoilers = (value) =>