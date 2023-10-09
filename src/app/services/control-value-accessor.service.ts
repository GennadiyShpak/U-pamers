import { Injectable, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable()
export class ControlValueAccessorService<T> implements ControlValueAccessor {
  modelWrites: EventEmitter<T> = new EventEmitter<T>();
  private _model!: T;
  onChanged!: (m: T | number) => void;
  onTouched!: (m: T) => void;

  writeValue(value: T): void {
    this._model = value;
    this.modelWrites.emit(value);
  }

  registerOnChange(fn: () => void): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  //TODO test and remove if it's not needed

  // get model(): T {
  //   return this._model;
  // }
  //
  // set(value: T): void {
  //   this._model = Object.assign({}, value);
  //
  //   if (this.onChanged) {
  //     this.onChanged(this._model);
  //   }
  // }
}
