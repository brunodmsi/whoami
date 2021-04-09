import { ExecutorLink } from './links/executor-link'
import { Observable } from 'rxjs'
import { LoggerLink } from './links/logger-link'
import { Context } from './context'
import { UseCase } from './use-case'
import { CacheLink } from './links/cache-link'

export class Runner {
  chain = this.cacheLink.setNext(this.executorLink.setNext(this.loggerLink))

  constructor(
    private readonly executorLink: ExecutorLink,
    private readonly loggerLink: LoggerLink,
    private readonly cacheLink: CacheLink
  ) {}

  run(useCase: UseCase<unknown, unknown>, param?: unknown): Observable<unknown> {
    const context = Context.create({ useCase, param })
    this.chain.next(context)
    return context.observable!
  }
}
