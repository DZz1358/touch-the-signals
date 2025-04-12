import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = signal<string>('');

  isChecked = signal<boolean>(false);
  count = signal<number>(0);
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      const count = this.count();
      const isEven = count % 2 === 0;

      this.isChecked.set(isEven);
      this.title.set(isEven ? 'Even number' : 'Odd number');
    })

  }

  ngOnInit(): void {
  }


  /*
  signal.set()  - для установки значения
  signal.update() - для обновления значения с использованием предидущего значения

   */
  increment() {
    this.count.update(value => value + 1);
  }

  decrement() {
    this.count.update(value => value - 1);
  }
}
