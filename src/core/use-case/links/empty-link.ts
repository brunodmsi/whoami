import { Link } from './link'

export class EmptyLink implements Link {
  setNext(): Link {
    return this
  }

  next() {}
}
