// A function named guardrail that will accept one argument mathFunction (Function).
export default function guardrail(mathFunction) {
  try {
    const result = mathFunction();
    return [result, 'Guardrail was processed'];
  } catch (error) {
    return [`Error: ${error.message}`, 'Guardrail was processed'];
  }
}
