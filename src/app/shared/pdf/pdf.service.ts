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
    const grains = [['Grain', 'Amount']].concat(log.recipe.grains.map(g => [g.name, `${g.amount} ${g.amountUnit}`]));
    return {
      content: [
        { text: `${log.recipe.name} - ${log.brewDate}`, style: 'header' },
        { text: `${log.brewerName}`, style: 'subheader' },
        {
          table: {
            body: grains
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
