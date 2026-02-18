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
export class ContactUsService implements OnDestroy {
  readonly status$ = new BehaviorSubject<string>('Not started');

  constructor() {
    console.log('[ContactUsService] constructor called');
  }

  start(): void {
    const now = new Date();
    const timeStr = now.toLocaleTimeString();
    this.status$.next(`Ready since ${timeStr}`);
    console.log(`[ContactUsService] started at ${timeStr}`);
  }

  ngOnDestroy(): void {
    console.log('[ContactUsService] destroyed');
    this.status$.next('Destroyed');
  }
}

export function provideContactUsService(): EnvironmentProviders {
  console.log('[provideContactUsService] called');
  return makeEnvironmentProviders([
    ContactUsService,
    provideEnvironmentInitializer(() => {
      console.log('[provideContactUsService] initializer called');
      inject(ContactUsService).start();
    }),
  ]);
}
