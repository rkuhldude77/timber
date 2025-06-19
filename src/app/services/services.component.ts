import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-services',
  imports: [NgFor, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {

  selectedSet = 0;
  isImage = false;

  imageSets = [
    { 
      name: 'Decks', 
      images: ['Decks/deckMain.jpg', 'Decks/deck01.jpg', 'Decks/deck02.1.jpg', 'Decks/deck02.2.jpg', 'Decks/deck03.jpg', 
        'Decks/deck04.jpg', 'Decks/deck05.1.jpg', 'Decks/deck05.2.jpg', 'Decks/deck06.jpg', 'Decks/deck07.jpg', 'Decks/deck08.jpg', 
        'Decks/deck09.jpg', 'Decks/deck10.jpg', 'Decks/deck10.1.jpg', 'Decks/deck10.2.jpg', 'Decks/deck11.jpg', 'Decks/deck12.1.jpg', 
        'Decks/deck12.2.jpg', 'Decks/deck14.1.jpg', 'Decks/deck14.2.jpg', 'Decks/deck14.2.jpg', 'Decks/deck14.3.jpg', 'Decks/deck14.4.jpg', 
        'Decks/deck15.jpg', 'Decks/deck16.jpg', 'Decks/deck17.jpg', 'Decks/deck18.jpg', 'Decks/deck19.jpg', 'Decks/deck20.1.jpg', 
        'Decks/deck20.2.jpg', 'Decks/deck20.3.jpg', 'Decks/deck21.jpg', 'Decks/deck22.jpg', 'Decks/deck23.1.jpg', 'Decks/deck23.2.jpg', 
        'Decks/deck23.3.jpg', 'Decks/deck24.jpg', 'Decks/deck25.1.jpg', 'Decks/deck25.jpg', 'Decks/deck27.jpg', 'Decks/deck28.jpg', 
        'Decks/deck28.1.jpg', 'Decks/deck29.jpg', 'Decks/deck30.jpg', 'Decks/deck31.1.jpg', 'Decks/deck31.2.jpg', 'Decks/deck31.3.jpg', 
        'Decks/deck32.jpg', 'Decks/deck33.1.jpg', 'Decks/deck33.2.jpg', 'Decks/deck34.1.jpg', 'Decks/deck34.2.jpg', 'Decks/deck35.1.jpg', 
        'Decks/deck35.2.jpg', 'Decks/deck36.1.jpg', 'Decks/deck36.2.jpg', 'Decks/deck37.jpg', 'Decks/deck38.jpg', 'Decks/deck39.1.jpg', 
        'Decks/deck39.2.jpg', 'Decks/deck39.3.jpg', 'Decks/deck39.4.jpg', 'Decks/deck40.jpg' 
      ] 
    },
    { 
      name: 'Remodels', 
      images: ['Remodels/remodelStairs01.1.jpg', 'Remodels/remodelStairs01.2.jpg', 'Remodels/remodelStairs01.3.jpg', 'Remodels/remodelStairs01.4.jpg', 
        'Remodels/remodel02.1.jpg', 'Remodels/remodel02.2.jpg', 'Remodels/remodel03.jpg', 'Remodels/remodel04.jpg', 'Remodels/remodel05.1.jpg', 
        'Remodels/remodel05.2.jpg', 'Remodels/remodel06.jpg', 'Remodels/remodel07.1.jpg', 'Remodels/remodel07.2.jpg', 'Remodels/remodel09.jpg', 
        'Remodels/remodel10.1.jpg', 'Remodels/remodel10.2.jpg', 'Remodels/remodel10.3.jpg', 'Remodels/remodel10.4.jpg', 'Remodels/remodel11.jpg', 
        'Remodels/remodel12.1.jpg', 'Remodels/remodel12.jpg', 'Remodels/remodel13.1.jpg', 'Remodels/remodel13.2.jpg', 'Remodels/remodel14.1.jpg', 
        'Remodels/remodel14.2.jpg'
      ]
    },
    {
      name: 'Videos',
      images: ['Decks/deckMainYouTube.jpg']
    }
  ];

  selectSet(index: number) {
    this.selectedSet = index;
  }

  selectedImage: string | null = null;

  openFullImage(image: string) {
    this.selectedImage = image;
  }

  closeFullImage() {
    this.selectedImage = null;
  }
}