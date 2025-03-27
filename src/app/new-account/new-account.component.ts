import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  imports: [],
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})
export class NewAccountComponent implements OnInit{
  //@Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  //constructor(private LoggingService:LoggingService, private accountsService: AccountsService) {}
  //loggingService = inject(LoggingService)
  accountsService = inject(AccountsService);
  para:string = '';

  ngOnInit(): void {
      this.accountsService.statusUpdated.subscribe(
        (data:string) => this.para = data);
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
    //console.log(`A status change occured, the new status is ${accountStatus}`);
  
}
