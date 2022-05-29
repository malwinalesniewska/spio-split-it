import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.scss']
})
export class UserReviewsComponent implements OnInit {
  userReviews = [
    {
      name: 'poseł Jarosław',
      age: 70,
      description: 'uległy',
      review: 'Split IT to wspaniała aplikacja. Od tej pory dzielę się rachunkami z kotem. Może i płacą za to podatnicy, ale sierściuch musi się w końcu dokładać!'
    },
    {
      name: 'emerytowana aktorka Sasha',
      age: 37,
      description: '',
      review: 'Naprawdę polecam apkę. Pomaga mi przeżyć trudne chwile, kiedy kręcimy filmy z 5 kolegami, a żaden z nich nie wziął portfela tłumacząc się że nie mają spodni z kieszeniami! A nawet spodni!!! Pozdrawiam twórców apki <3'
    },
    {
      name: 'Janusz Alfa',
      age: 55,
      description: 'właściciel firmy handlowo-usługowej',
      review: 'Split IT odmieniło moje życie i poprawiło finanse firmy. Od tej pory pracownicy dokładają się do papieru toaletowego, mydła w łazience, papieru w ksero. No ale przecież używają tego wszystkiego, dlaczego więc ja sam powinienem za to wszystko płacić?'
    },
    {
      name: 'Julka z Twittera',
      age: 17,
      description: '#BLM #it/its, wysłano z iPhone-a',
      review: 'Hejtuję tą apkę! To wymysł męskiej supremacji i rasizm. Od czasu jej wprowadzenia, mojee tinderowe życie stało się udręką. Jak można upokarzać tak moją płeć, że moje tindery po zakończonej kolacji, której zdjęcia wrzuciłom dzielą wydatki? Gdybym chciało wydawać pinionszki na jedzenie, to bym sobie samemu zamawiało, a nie musiało się dodatkowo na seksy umawiać.'
    },
    {
      name: 'Malwina',
      age: 29,
      description: 'programistka',
      review: 'Apka jest serio w pytę! Kiedy wychodzę na miasto i zamawiam sobie vegeburgera ze smakowym harnasiem, nie muszę współfinansować zamówień moich mięsożernych znajomych, którzy zamawiają kebab z mięsa mieszanego tylko dlatego, żeby mieć pewność że co najmniej 2 zwierzątka wylądowały w nim! Nie mówiąc o kraftowych piwach! Fuuuuj, tylko harnoold! Elo!'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
