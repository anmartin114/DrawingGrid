import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-draw",
  templateUrl: "./draw.component.html",
  styleUrls: ["./draw.component.css"],
})
export class DrawComponent implements OnInit {
  cells: string[] = new Array(100);
  color: string = "";

  constructor() {
    this.cells.fill("", 0, 100);
  }

  //color button click
  selectColor(color: string) {
    this.color = color;
  }

  //cell click
  changeColor(i: number) {
    this.cells[i] = this.color;
  }

  hoverOnCell(i: number, e) {
    if (e.buttons) {
      this.changeColor(i);
    }
  }

  clear() {
    this.cells.fill("");
  }

  ngOnInit() {}
}
