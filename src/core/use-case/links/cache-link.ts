import { BaseLink } from './base-link'
import { Context } from '../context'
import { Observable } from 'rxjs'

export class CacheLink extends BaseLink {
  private readonly cache = new Map<string, Observable<unknown>>()

  next(context: Context): void {
    if (context.param !== undefined) {
      this.nextLink.next(context)
      return
    }

    if (!this.cache.has(context.useCase.constructor.name)) {
      this.nextLink.next(context)
      this.cache.set(context.useCase.constructor.name, context.observable)
    }

    context.observable = this.cache.get(context.useCase.constructor.name)!
  }
}
