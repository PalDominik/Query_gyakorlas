import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(@Query('LoremColor') szin: string = "#000",
  @Query('num1') szam1: string, @Query('num2') szam2: string, @Query('num3') szam3: string,
) {
    const a = parseInt(szam1)
    const b = parseInt(szam2)
    const c = parseInt(szam3)
    let szamolas1 = ((-b)+ Math.sqrt((Math.pow(b,2)-4*a*c))/(2*a))
    let szamolas2 = ((-b)- Math.sqrt((Math.pow(b,2)-(4*a*c)))/(2*a))
    console.log(`${a} | ${b} | ${c} |||  ${szamolas1} | ${szamolas2}`)
    return {
      szin,
      szamolas1,
      szamolas2,
      title: 'My First NestJS App'
    }
  }

  @Get('intro')
  @Render('nyitas')
  gIntro(@Query('nyelvek') lang : string){
    //Ecuador
    let title: string;
    let szoveg : string;
    let formName : string;
    let l_Hun : string;
    let l_Eng : string;
    let L_Spain : string;
    if(lang == 'hun')
    {
      title = 'Intro';
      szoveg = 'Ez egy magyar szöveg';
      formName = 'Nyelvek';
      l_Hun = 'Magyar';
      l_Eng = 'Angol';
      L_Spain = 'Ecuadori';
    }
    else if(lang == 'eng')
    {
      title = 'Intro';
      szoveg = 'This is an english paragraph';
      formName = 'language';
      l_Hun = 'Hungary';
      l_Eng = 'English';
      L_Spain = 'Ecuador';
    }
    else if(lang == "spain")
    {
      
    }
    return{

    }

  }
}
