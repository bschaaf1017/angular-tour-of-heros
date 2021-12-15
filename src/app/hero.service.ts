import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private message: MessageService) {}
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.message.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.message.add('HeroService: fetched all heroes');
    return heroes;
  }
}
