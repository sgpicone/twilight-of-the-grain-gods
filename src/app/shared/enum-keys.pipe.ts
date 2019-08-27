import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumKeys'
})
export class EnumKeysPipe implements PipeTransform {

  transform(value: any, args?: string[]): any {
    console.log(value);
    let keys = [];
    for (const enumMember of Object.keys(value)) {
      keys.push({ key: enumMember, value: value[enumMember] });
    }
    return keys;
  }

}
