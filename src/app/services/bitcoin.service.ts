import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  rate = JSON.parse(localStorage.getItem('RATE_USD')) || ''
  marketPrice = JSON.parse(localStorage.getItem('MARKET_PRICE')) || ''


  getRate(coins: number) {
    if (!this.rate) {

      this.http.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        .pipe(
          tap(res => { console.log('http.get', res) }),
          tap(res => { localStorage.setItem('RATE_USD', JSON.stringify(res)) })
        ).subscribe(res => {
          this.rate = res
        })
    }
    return this.rate * coins
  }

  getMarketPrice() {
    if (!this.marketPrice) {

      this.http.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        .pipe(
          tap(res => { console.log('http.get', res) }),
          tap(res => { localStorage.setItem('MARKET_PRICE', JSON.stringify(res)) })
        ).subscribe(res => {
          this.marketPrice = res
        })
    }
    return this.marketPrice
  }

  getConfirmedTransactions() {

  }

}
