import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({
  name: "momentTimeAgo",
})
export class MomentTimeAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return (
      moment(value)
        // .startOf("day")
        .from(new Date())
    );
  }
}
