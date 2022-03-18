import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }

  getJob():Observable<any> {
    let jobDescription = [
      {
        jobTitle: 'Desenvolvedor Frontend SR',
        jobRequirement: [
          'HTML5',
          'CSS3 (Sass)',
          'JavaScript (Vue, Nuxt, Typescript, NodeJS)',
          'Git (Fluxo Gitflow)',
          'SEO',
          'Jest',
          'Integração com backend via APIs REST',
          'Metodologia Ágil'
        ],
        jobDesirable: [],
        jobLocation: 'Alameda Santos – SP (2x na semana presencial e 3x home office)'
      },
      {
        jobTitle: 'Desenvolvedor Frontend SR',
        jobRequirement: [
          'HTML5',
          'CSS3 (Sass)',
          'JavaScript (Vue, Nuxt, Typescript, NodeJS)',
          'Git (Fluxo Gitflow)',
          'SEO',
          'Jest',
          'Integração com backend via APIs REST',
          'Metodologia Ágil'
        ],
        jobDesirable: [],
        jobLocation: 'Alameda Santos – SP (2x na semana presencial e 3x home office)'
      },
    ]
    return of(jobDescription)
  }

}
