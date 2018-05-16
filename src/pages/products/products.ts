import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {   
       
  products:Array<any>=[
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE',name:'LG 190 L',category:'Television',regDate:'Sep 12,2016'},
    {img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGAASAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwUGBwgCBAH/xABCEAABAgQDAwcJBAkFAAAAAAABAgMABAURBhIhEzFBBzZRYXGBkRQVIjJ0g7GysxeT0dIYU1VzhJShwfAWIyRCVP/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAAIBAwMFAAAAAAAAAAAAAAECERIhURMx8AMyQZGh/9oADAMBAAIRAxEAPwC8YQnptmRk3puZVlZZQVrNr6Dq4mF4YMdAHCs9foR86YAr+a5eqSzMOtJos6sIUU5i4gXt4wmOX+l21oc7f96mKQdpj6n16o9Y7z1x0ijzaiMqmweHpH8IemSzC7ft/pX7DnfvUQfb/Sv2HO/eoimF0SfbSVl1rTUkLP4Qh5vmmwPSb6f80h6ZGqF6SfLzSJiaaZXRp5CVqCcwWg2v1XEWvJTTM9KMzcqsOMPIDjax/wBkkXBjIkth6rqeDhZSpDDl3CFp9HKnOfBIJjUWAuZ1J9nETg8n+CCCACGHHXNWe7EfOmH6GDHfNSe7EfOmAM1y8s5NTYYYTmdcWQkXA7yToABrc6CHaXpMwH2W0bN0OoK0OtugoKRfMc24Wsb3tbvEeSkqbRUbvLyIWh5lSyCQjaNrQFG3AFVz2RJKVMNybKJJMxLGYLLtliy20rU40oJzbr5WjruBUNQb23hnJsmZJ5TyZRopW46qyAgi2nG+63G+7S8eB6kPh1CAqXLamy6Hw6nZBANiSrhYkC2+5GmovJJ2osGpgeVNIaLOxf2WidotpaNoEgahObUgdNr3hrdDAp5pq5uX27jLp2gXdtKlOsLCCvduYOu4FQBO+xaUxGyPvyapWebaeSgquhSVJIUFJNlJUlQ3gggxpTk9JOC6USb/AOzbuzGM61d5pc9JstOJcEsw0ypaNUqUNVWPEAm1+Nr7o0VyepKcF0oHizfxUTGVmlUigggiVCI/jzTCc/2I+dMSCI/j7mnPe7+omAM8IZKXSCN5NrR7UpS00VJ9YawkiYRnKSqwJMLJU0hQzqzI6I6a4ZSSmJ10lSk5Uk7xlH4Q0TKyNT3w61FxlT7ZbNgd5IjwzEsFa5xCtEFBtQT5Q0TxWL+Maf5PklODKTc3uxfxJMZoQlnboTn1Cx8Y0zgLmbSPZkxlZpU/wQQRChEfx7zTnvd/UTEgiP495pz3u/qJgDLDk6oOrHQo/GPvnBdrAnxhNbCNsu+/MePXHWwRe2U3jXdnmHRqDihlVqI5VNlSMoJHfAWEg2ym/ZHK0MIOVakg9BMLcZh1LuAzDPTtE/GNU4C5m0j2ZMZWlksqmWglQJziwCr8Y1VgTmdSPZkxNlVP0EEESoRHsfc0573f1ExIYj+Puac97v6iYApJmo0xODH5E0y82XCPKdPWvv6dP79Qj3io4bGBRLKkV+cA0WvVNtt+tzXtbja2/SIh5nqDdMNWmQ2WFZ1pbC/TypOpt3g26DCy6Mt6goqjjSdgRcJChnta97dmsdsx6sxG3x+OWNESfXJmnOYSEo3TF+VpKVLmc4sOvLbS+/pj5XpujP8AJ+iny9KIqCA2S/lHom9ysnrBtp06w1LwjOpw9L4gDGSTNgFhwZiL6ejvEeadw1PN0w1VstBsoS7kCxnCCcoVboveFabz559HXTBJbbaKVJNebdi4lxtxc1ZN1C6hbsOZPhGkMCcz6R7MmM4OYVrErTJOtOrlhLPOJIbSpO0CSfWKbRpDAvM+kezJjn9SJjGW1Jiex9gggjNYiPY/IGE565/V/UTEhjzVKRYqUi/JTSSWXkFCrGx7QeBG+AMgO4kqqJN6mJmSJNSzma4EX3HpECcUVgU5NMEwoyYOjGuXwvFxTfIHKPTTrrWIHm0rWVBJlQbX68w+EJfo/s5s3+pXc1738jH54vq35R068KlXiqsLkE09T/8AxUnRrgP6xy5iusu09NOXMkyosA1rawNwOy+sW59gDV7jEi/5BP545/R+aBuMSuD+CH54Opfk9FeFTsYjqjyZeQceBlw4gZLcAdB3RqfApBwfSCP/ADJit5LkDlmJxp57ELzqUKCilMoEk95UfgYt+RlGZGTYlJZOVlhtLbab3skCwhWva3unJxWK9oLwQQRJv//Z',name:'Samsung 190 L',category:'Mobile',regDate:'Oct 12,2015'},
    // {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE',name:'LG 190 L',category:'Television',regDate:'Sep 12,2016'},
    // {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE',name:'LG 190 L',category:'Television',regDate:'Sep 12,2016'},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  onSortFilterSelect(event:any){

  }    

}
