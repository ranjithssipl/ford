import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { InterfaceService } from '@app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SeriesService extends InterfaceService {

  constructor(private http: HttpClient) {
    super();
  }

  getStatus() {
    let url = this.getApiUrl(`projects/status/`);
    return this.http.get(url, this.getHttpOptions('json'))
    .pipe(
      map(Response => Response),
      catchError(this.handleError)
    );
  }

  getSeries() {
    let url = this.getApiUrl(`projects/getAllSeries/`);
    return this.http.get(url, this.getHttpOptions('json'))
    .pipe(
      map(Response => Response),
      catchError(this.handleError)
    );
  }

  getProgram(id) {
    let url = this.getApiUrl(`projects/${id}/getAllPrograms/`);
    return this.http.get(url, this.getHttpOptions('json'))
    .pipe(
      map(Response => Response),
      catchError(this.handleError)
    );
  }

  getSheets(id) {
    let url = this.getApiUrl(`projects/${id}/getAllSheets/`);
    return this.http.get(url, this.getHttpOptions('json'))
    .pipe(
      map(Response => Response),
      catchError(this.handleError)
    );
  }

  getHeaders(id) {
    let url = this.getApiUrl(`projects/${id}/getAllHeaders/`);
    return this.http.get(url, this.getHttpOptions('json'))
    .pipe(
      map(Response => Response),
      catchError(this.handleError)
    );
  }

  getTimeSeries(data) {
    let url = this.getApiUrl(`projects/getTimeSeries/`);
    return this.http.post(url, data, this.getHttpOptions('json'))
    .pipe(
      map(Response => Response),
      catchError(this.handleError)
    );
  }

  getSignal(data) {
    let url = this.getApiUrl(`projects/signalTransform/`);
    return this.http.post(url, data, this.getHttpOptions('json'))
    .pipe(
      map(Response => Response),
      catchError(this.handleError)
    );
  }

}
