import { Logger } from './logger'

export class ConsoleLogger implements Logger {
  constructor(private readonly window: Window) {}

  object<T>(object: T): void {
    this.window.console.dir(object)
  }

  groupEnd(): void {
    this.window.console.groupEnd()
  }

  info(message: string): void {
    this.window.console.info(message)
  }

  group(label: string): void {
    this.window.console.group(label)
  }
}
