export function ensureArray<T>(arg: T | T[]): T[] {
  return Array.isArray(arg) ? arg : [arg]
}
