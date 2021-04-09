import { LoggerLink } from './logger-link'
import { capture, instance, mock, verify } from 'ts-mockito'
import { Logger } from '../../logger/logger'
import { Context } from '../context'
import { UseCase } from '../use-case'
import { of } from 'rxjs'

describe('LoggerLink', () => {
  it('should group data from the request', async () => {
    const { logger, loggerLink } = setup()
    const useCase = mock<UseCase<unknown, unknown>>()

    const context = Context.create({ useCase: instance(useCase), param: undefined })
    context.observable = of('foo')

    loggerLink.next(context)
    await context.observable.toPromise()

    const [actual] = capture(logger.group).last()
    expect(actual).toBe('Object')
    verify(logger.groupEnd()).once()
  })

  it('should log the parameters', async () => {
    const { logger, loggerLink } = setup()
    const useCase = mock<UseCase<unknown, unknown>>()
    const context = Context.create({ useCase: instance(useCase), param: 'bar' })
    context.observable = of('foo')

    loggerLink.next(context)
    await context.observable.toPromise()

    const [actual] = capture(logger.info).first()
    expect(actual).toBe('Parameters: bar')
  })

  it('should log the result', async () => {
    const { logger, loggerLink } = setup()
    const useCase = mock<UseCase<unknown, unknown>>()
    const context = Context.create({ useCase: instance(useCase), param: undefined })
    context.observable = of('foo')

    loggerLink.next(context)
    await context.observable.toPromise()

    const [actual] = capture(logger.object).first()
    expect(actual).toBe('foo')
  })
})

function setup() {
  const logger = mock<Logger>()
  return {
    logger,
    loggerLink: new LoggerLink(instance(logger))
  }
}
