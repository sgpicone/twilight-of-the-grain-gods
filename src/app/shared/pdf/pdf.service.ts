import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { BrewDay } from 'src/app/brew-days/_models/brew-day.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  genBrewLogPdf(log: BrewDay) {
    const docDef = this.brewDayToPdf(log);
    pdfMake.createPdf(docDef).download();
  }

  private brewDayToPdf(log: BrewDay) {
    const grains = [['Amount', 'Grain']].concat(log.recipe.grains.map(g => [`${g.amount} ${g.amountUnit}`, g.name]));
    const hops = [['Amount', 'Hop', 'Alpha', 'Time', 'Stage']].concat(
      log.recipe.hops.map(h => [
        `${h.amount} ${h.amountUnit}`,
        `${h.name}`,
        `${h.alpha}%`,
        `${h.additionTime}`,
        `${h.additionStage}`
      ]));
    return {
      content: [
        { text: `${log.recipe.name} - ${log.brewDate}`, style: 'header' },
        { text: `${log.brewerName}`, style: 'subheader' },
        'Grain Bill',
        {
          table: {
            body: grains
          }
        },
        'Hop Schedule',
        {
          table: {
            body: hops
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      }
    }
  }

}
