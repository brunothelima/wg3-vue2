class Validate {
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
    errors[input.name] = []
    for (const validation in input.validations) {
      const value = model[input.name]
      const rules = input.validations[validation]
      const valid = Validate[validation]
      if (!valid(value, rules)) {
        errors[input.name].push(validation)
      }
    }
  }
  return errors
}
