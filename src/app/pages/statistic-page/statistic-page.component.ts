import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  marketPrice

  ngOnInit(): void {
    this.marketPrice = this.bitcoinService.getMarketPrice()


  }

}
