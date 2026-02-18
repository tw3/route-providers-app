import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CustomPreloadingStrategy implements PreloadingStrategy {
  private static readonly PRELOAD_DELAY_MS = 5_000;

  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    if (route.data && route.data['preload'] === true) {
      return timer(CustomPreloadingStrategy.PRELOAD_DELAY_MS).pipe(mergeMap(() => load()));
    }
    return of(null);
  }
}
