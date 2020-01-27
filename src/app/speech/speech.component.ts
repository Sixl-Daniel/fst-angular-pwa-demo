import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-speech",
  templateUrl: "./speech.component.html",
  styleUrls: ["./speech.component.styl"]
})
export class SpeechComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  readAloud(text: string) {
    if (!("speechSynthesis" in window)) {
      throw new Error(
        "Leider kein Support für Sprachsynthese in diesem Browser!"
      );
    }
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = "de-DE";
    speechSynthesis.speak(utt);
  }
}
