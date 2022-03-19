import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jobs } from 'src/app/models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }

  getJob():Observable<Jobs[]> {
    let jobDescription = [
      {
        id: 0,
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
        id: 1,
        jobTitle: 'Desenvolvedor React',
        jobRequirement: [
          'React',
          'AntDesign',
          'VueJs',
        ],
        jobDesirable: [],
        jobLocation: 'Atuação 100% remota.'
      },
      {
        id: 2,
        jobTitle: 'Desenvolvedor Frontend Júnior',
        jobRequirement: [
          'Angular',
          'Javascript',
          'Typescript',
          'HTML',
          'CSS',
          'SASS',
        ],
        jobDesirable: [],
        jobLocation: 'Atuação 100% remota.'
      },
      {
        id: 3,
        jobTitle: 'Desenvolvedor Backend .NET',
        jobRequirement: [
          '.Net Core',
          'Modelagem de banco de dados',
          'Versionamento com git',
          'Entity framework (rm de banco de dados)',
          'Microserviços',
        ],
        jobDesirable: [
          'Experiência com “conteinerização”'
        ],
        jobLocation: 'Atuação 100% remota.'
      },
      {
        id: 4,
        jobTitle: 'Arquiteto Cloud Sênior',
        jobRequirement: [
          'Sólidos conhecimentos em Infra As Code (IaC) dedicado a Aws e Azure;',
          'Experiência na proposição, análise e implementação de soluções em Cloud AWS e Cloud Azure;',
          'Experiência em Terraform',
          'Experiência em Ansible',
          'Experiência em Azure/Aws;',
          'Experiência em construção de imagens Docker;',
          'Domínio do fluxo (CI/CD) desenvolvimento, testes e implantação;',
          'Domínio do portal da AzureDevops, especialmente pipelines YAML;',
          'Domínio do portal da Azure/AWS Cloud;',
        ],
        jobDesirable: [
          'domínio em linguagens de script como bash e python aplicada a automação e infraestrutura como código.'
        ],
        jobLocation: 'Atuação 100% remota.'
      },
    ]
    return of(jobDescription)
  }

}
