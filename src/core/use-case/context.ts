import { UseCase } from './use-case'
import { Observable, of } from 'rxjs'

export class Context {
  private _observable: Observable<unknown> = of()

  get observable(): Observable<unknown> {
    return this._observable
  }

  set observable(value: Observable<unknown>) {
    this.hasSetObservable = true
    this._observable = value
  }

  hasSetObservable = false

  private constructor(public useCase: UseCase<unknown, unknown>, readonly param?: unknown) {}

  static create({ useCase, param }: { useCase: UseCase<unknown, unknown>; param?: unknown }) {
    return new Context(useCase, param)
  }
}
