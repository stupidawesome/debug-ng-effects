import {Observable, of} from "rxjs"
import {switchMap} from "rxjs/operators"
import {Component, Input, OnInit} from "@angular/core"
import {Connect, Effect, Effects, State} from "ng-effects";

/** Connected component **/
@Component({
  selector: 'app-debug',
  template: `
        <p>ID is: {{id}}</p>
        <p *ngIf="target">Target is: {{target}}</p>
    `,
  styleUrls: ['./debug.component.scss'],
  providers: [Effects],
})
export class DebugComponent implements OnInit {
  @Input()
  public id: number;

  public target?: string;

  constructor(connect: Connect) {
    this.id = 10;
    this.target = undefined;

    connect(this)
  }

  ngOnInit(): void {
  }

  @Effect("target")
  getTarget(state: State<DebugComponent>): Observable<string> {
    return state.id.pipe(
      switchMap(id => of('target: ' + id))
    )
  }
}
