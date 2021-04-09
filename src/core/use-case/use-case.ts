import { Observable } from 'rxjs'
import { dependencyTree } from '../../dependency-tree'

export abstract class UseCase<Param, Result> {
  abstract readonly: boolean

  abstract internalExecute(param: Param): Observable<Result>

  execute(param: Param): Observable<Result> {
    const runner = dependencyTree.runner
    return runner.run(this, param) as Observable<Result>
  }
}
