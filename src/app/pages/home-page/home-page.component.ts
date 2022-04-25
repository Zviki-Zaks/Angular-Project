import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  user!: User
  btc!: number

  ngOnInit(): void {
    this.user = this.userService.getUser()
    this.btc = this.bitcoinService.getRate(this.user.coins)
  }

}
