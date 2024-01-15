import { Validation } from '@/application/contracts'
import { MaxSizeParamError } from '../errors'

export class MaxSizeField implements Validation {
  constructor(
    private readonly value: any,
    private readonly fieldName: string,
    private readonly size: number
  ) {}

  validate(): Error | undefined {
    if (this.size !== undefined && this.value.length > this.size) {
      return new MaxSizeParamError(this.fieldName, this.size)
    }
  }
}
