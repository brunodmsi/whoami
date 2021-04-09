export interface Logger {
  group(label: string): void
  groupEnd(): void
  object<T>(object: T): void
  info(message: string): void
}
