import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit{
  quoteGroup : {category:string, quotes:Quote[],icon:string}
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    private quotesService: QuotesService) {
  }

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddFavorite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title : 'Add Quote',
      subTitle : 'Are you sure ?',
      message : 'Are you sure you want to add the Quote ?',
      buttons: 
      [{
        text: 'Yes, go ahead',
        handler: () =>{
          this.quotesService.addQuoteToFavorites(selectedQuote);
          console.log('Ok button clicked');
        }
      },
      {
        text:'No, I have chaged my mind',
        role:'cancel',
        handler:()=>{
          console.log('No button clicked');
        }
      }]
    });

    alert.present();
  }


}
