import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss']
})
export class TitleSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://we.tl/t-lAFbIKJgcV');
    link.setAttribute('download', `split-it.apk`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
