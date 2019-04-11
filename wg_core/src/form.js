class Validations {
  static required(value) {
    return value.length > 0
  }
  static minlength(value, rules) {
    return value.length >= rules.limit
  }
}

export function validate(model, schema) {
  const errors = {};
  for (const input of schema.values()) {
    if (input.disabled) {
      continue;
    }
    errors[input.name] = [];
    for (const validation in input.validations) {
      if (!Validations[validation](model[input.name], input.validations[validation])) {
        errors[input.name].push(validation)
      }
    }
  }
  return errors
}