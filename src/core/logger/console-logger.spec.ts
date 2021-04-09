import { ConsoleLogger } from './console-logger'
import { deepEqual, instance, mock, verify, when } from 'ts-mockito'

describe('ConsoleLogger', () => {
  it('should log an object', () => {
    const { consoleLogger, console } = setup()

    consoleLogger.object({})

    verify(console.dir(deepEqual({}))).once()
  })

  it('should log information', () => {
    const { consoleLogger, console } = setup()

    consoleLogger.info('hello')

    verify(console.info('hello')).once()
  })

  it('should group', () => {
    const { consoleLogger, console } = setup()

    consoleLogger.group('foo')

    verify(console.group('foo')).once()
  })

  it('should end group', () => {
    const { consoleLogger, console } = setup()

    consoleLogger.groupEnd()

    verify(console.groupEnd()).once()
  })
})

function setup() {
  const window = mock<Window>()
  const console = mock<Console>()
  when(window.console).thenReturn(instance(console))
  return {
    console,
    consoleLogger: new ConsoleLogger(instance(window))
  }
}
