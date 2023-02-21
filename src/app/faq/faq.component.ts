import { Component } from '@angular/core';
import { Qa } from '../interfaces/qa';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FAQComponent {
  QuestionAnswer: Qa[] = [
    {
      questions: 'Can I bring my own lunch to Wet’n’Wild?',
      answers:
        'Food (excluding commercially prepared food), non-alcoholic beverages within plastic or tin containers, eskies and coolers are permitted at Wet’n’Wild. Due to safety regulations, knives and glassware of any kind is also prohibited.',
    },
    {
      questions: "Are there courtesy buses to and from Wet'n'Wild?",
      answers:
        'No, however there are a number of public buses and taxis arriving and departing regularly. For more information regarding Gold Coast Surfside Buses please visit the website - www.translink.com.au or contact Trans Info on 13 12 30.',
    },
    {
      questions:"What are the opening times at Wet'n'Wild?'",
      answers:"Wet'n'Wild is open all year round excluding Anzac Day (25 April) and Christmas Day (25 December).<br></br>Trading hours are seasonal and during peak trading these hours may be extended."
    }
  ];
}
