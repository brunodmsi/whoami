import { BaseLink } from './base-link'
import { Context } from '../context'
import { Logger } from '../../logger/logger'
import { tap } from 'rxjs/operators'

export class LoggerLink extends BaseLink {
  constructor(private readonly logger: Logger) {
    super()
  }

  next(context: Context): void {
    context.observable = context.observable.pipe(
      tap(x => {
        this.logger.group(context.useCase.constructor.name)
        this.logger.info(`Parameters: ${context.param !== undefined ? context.param : '-'}`)
        this.logger.info(`Result:`)
        this.logger.object(x)
        this.logger.groupEnd()
      })
    )
    this.nextLink.next(context)
  }
}
