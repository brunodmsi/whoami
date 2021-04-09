import { BaseLink } from './base-link'
import { Context } from '../context'
import { share } from 'rxjs/operators'

export class ExecutorLink extends BaseLink {
  next(context: Context): void {
    if (!context.hasSetObservable) {
      const observable = context.useCase.internalExecute(context.param)
      if (context.useCase.readonly) {
        context.observable = observable.pipe(share())
      } else {
        context.observable = observable
      }
    }
    this.nextLink.next(context)
  }
}
