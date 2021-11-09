import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Telefonos', img: 'https://sites.google.com/site/enocmobile10/_/rsrc/1436333897322/home/banner-celulares.jpg',data: 'esta es una tienda que ofrece diferentes smartphones cada uno de diferentes marcas y de diferentes tipos para cada uno de sus usuarios',width: 500,height: 170 ,cols: 2, rows: 1 },
        { title: 'Samsung', img: 'https://depor.com/resizer/5htuybbEHEp7ieesd2QDYZ3X7eY=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3OLJWP6J4NGAZP5IGRKLIEFRII.jpg' ,width: 600,height:260, cols: 1, rows: 1 },
        { title: 'Apple', img: 'https://santacruz.solutekla.com/photo/1/apple/celulares/iphone_7_silver_32gb/iphone_7_silver_32gb_0001',width: 650,height: 550, cols: 1, rows: 2 },
        { title: 'Sony', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
