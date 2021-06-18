import { Pipe, PipeTransform } from '@angular/core';
//--

// Check element in array pipe ......................................................................
@Pipe({ name: 'array_contains' })

export class InArrayPipe implements PipeTransform {
    transform(value, args: string[]): any {
        if (value instanceof Array) { 
            if (value.indexOf(args) >= 0) return true;
        }
        return false;
    }
}

// Check char in string pipe ......................................................................
@Pipe({ name: 'str_contains' })

export class InStringPipe implements PipeTransform {
    transform(value, args: string[]): any {
        if (value && value != '') {
            if (value.indexOf(args) >= 0) return true;
        }
        return false;
    }
}

// Check value in comma seperated string pipe ......................................................
@Pipe({ name: 'in_comma_seperated' })

export class InCommaSeperatedPipe implements PipeTransform {
    transform(value, args: string[]): any {
        if (value) {
            value = value.split(',');
            if (value.indexOf(args.toString()) >= 0) return true;
        }
        return false;
    }
}

