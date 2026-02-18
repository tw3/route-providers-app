import {
  EnvironmentProviders,
  inject,
  Injectable,
  makeEnvironmentProviders,
  OnDestroy,
  provideEnvironmentInitializer,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SimplePostAuthService implements OnDestroy {
  readonly status$ = new BehaviorSubject<string>('Not started');

  start(): void {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    this.status$.next(`Active since ${timeStr}`);
    console.log(`[SimplePostAuthService] started at ${timeStr}`);
  }

  ngOnDestroy(): void {
    console.log('[SimplePostAuthService] destroyed');
    this.status$.next('Destroyed');
  }
}

export function provideSimplePostAuthService(): EnvironmentProviders {
  console.log('[provideSimplePostAuthService] called');
  return makeEnvironmentProviders([
    SimplePostAuthService,
    provideEnvironmentInitializer(() => {
      console.log('[provideSimplePostAuthService] initializer called');
      inject(SimplePostAuthService).start();
    }),
  ]);
}
