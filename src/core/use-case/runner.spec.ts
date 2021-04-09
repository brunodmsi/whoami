import { Runner } from './runner'
import { anything, capture, instance, mock, when } from 'ts-mockito'
import { ExecutorLink } from './links/executor-link'
import { LoggerLink } from './links/logger-link'
import { UseCase } from './use-case'
import { CacheLink } from './links/cache-link'

describe('Runner', () => {
  it('should set the second element of the chain the executor', async () => {
    const { runner, cacheLink, executorLink } = setup()
    const useCase = mock<UseCase<unknown, unknown>>()

    await runner.run(useCase).toPromise()

    const [actual] = capture(cacheLink.setNext).first()
    expect(actual).toEqual(instance(executorLink))
  })

  it('should set the last element of the chain the logger', async () => {
    const { runner, executorLink, loggerLink } = setup()
    const useCase = mock<UseCase<unknown, unknown>>()

    await runner.run(useCase).toPromise()

    const [actual] = capture(executorLink.setNext).first()
    expect(actual).toEqual(instance(loggerLink))
  })
})

function setup() {
  const executorLink = mock(ExecutorLink)
  const loggerLink = mock(LoggerLink)
  const cacheLink = mock(CacheLink)

  when(cacheLink.setNext(anything())).thenReturn(instance(cacheLink))
  when(executorLink.setNext(anything())).thenReturn(instance(executorLink))

  return {
    cacheLink,
    executorLink,
    loggerLink,
    runner: new Runner(instance(executorLink), instance(loggerLink), instance(cacheLink))
  }
}
