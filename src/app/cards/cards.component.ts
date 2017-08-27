import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.type = this.route.snapshot.params['type'];
    this.route.params.subscribe(paras => {
      this.type = paras['type'];

    })
  }

  goCardsPlus1(type) {
    var num = +type;
    this.router.navigateByUrl('/cards/' + (num + 1));
  }
  goCardsMinus1(type) {
    var num = +type;
    this.router.navigate(['/cards', (num - 1)]);
  }


}
