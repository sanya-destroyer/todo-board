import {AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appTextEditable]'
})
export class TextEditableDirective implements AfterViewInit {

  previousInputValue: string = '';

  @Input() maxLength: number = Number.MAX_SAFE_INTEGER;
  @Output() commitChangesEvent = new EventEmitter();

  constructor(
    private $el: ElementRef
  ) {
  }

  @HostListener('focus')
  onFocus() {
    this.$el.nativeElement.classList.add('focused');
    this.$el.nativeElement.focus();
    this.previousInputValue = this.$el.nativeElement.textContent;
  }

  @HostListener('blur')
  onBlur() {
    this.$el.nativeElement.classList.remove('focused');
    this.$el.nativeElement.blur();
    this.commitChanges();
  }

  @HostListener('keydown', ['$event.key'])
  keyPress(key: string) {
    if (key === 'Enter') {
      this.$el.nativeElement.blur();
    }
  }

  ngAfterViewInit() {
    this.$el.nativeElement.setAttribute('contenteditable', true);
  }

  commitChanges() {
    if (this.$el.nativeElement.textContent.length > this.maxLength || this.$el.nativeElement.textContent.length <= 0) {
      this.$el.nativeElement.textContent = this.previousInputValue;
      alert(`Name should be less than ${this.maxLength} symbols and more than 0`)
    }

    if (this.previousInputValue !== this.$el.nativeElement.textContent) {
      this.commitChangesEvent.emit(this.$el.nativeElement.textContent.trim());
    }
  }

}
