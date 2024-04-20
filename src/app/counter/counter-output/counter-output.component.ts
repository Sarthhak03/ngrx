import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {

  public counter!:number;

  constructor(private store : Store<{counter : {counter : number}}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((x) => {
      this.counter = x.counter;
    });
  }

}
