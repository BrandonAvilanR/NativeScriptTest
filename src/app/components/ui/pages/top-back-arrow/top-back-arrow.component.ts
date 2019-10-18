import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'ns-top-back-arrow',
  templateUrl: './top-back-arrow.component.html',
  styleUrls: ['./top-back-arrow.component.css']
})
export class TopBackArrowComponent implements OnInit {
  @ViewChild( 'containerRef', { static: true } ) containerRef: ElementRef

  @Input( ) color: string

  constructor( private router: RouterExtensions ) { }

  ngOnInit( ) {
  }

  backward( ) {
    if ( this.router.canGoBack( ) ) {
      this.router.backToPreviousPage( )
    }
  }

}
