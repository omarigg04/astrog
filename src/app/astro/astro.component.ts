import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  GridReadyEvent,
  Logger,
} from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.scss']
})
export class AstroComponent {
  
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { headerName: 'Location', field: 'name', width: 160 },
    { headerName: 'Region', field: 'region', width: 160 },
    { headerName: 'Country', field: 'country', width: 160 },
    { headerName: 'Latitude', field: 'lat', width: 160 },
    { headerName: 'Longitude', field: 'lon', width: 160 },
    { headerName: 'Timezone ID', field: 'tz_id', width: 160 },
    { headerName: 'Local Time', field: 'localtime', width: 160 },
    { headerName: 'Sunrise', field: 'sunrise', width: 160 },
    { headerName: 'Sunset', field: 'sunset', width: 160 },
    { headerName: 'Moonrise', field: 'moonrise', width: 160 },
    { headerName: 'Moonset', field: 'moonset', width: 160 },
    { headerName: 'Moon Phase', field: 'moon_phase', width: 160 },
    { headerName: 'Moon Illumination', field: 'moon_illumination', width: 160 },
    {
      headerName: 'Is Moon Up?',
      field: 'is_moon_up',
      valueFormatter: (params) => (params.value === 1 ? 'Yes' : 'No')
    },
    {
      headerName: 'Is Sun Up?',
      field: 'is_sun_up',
      valueFormatter: (params) => (params.value === 1 ? 'Yes' : 'No')
    }
    
    // Define más columnas según tus datos
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };


  // Data that gets displayed in the grid
   public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  public searchValue = '';

  constructor(private http: HttpClient) {}

  // Example load data from server
  async onGridReady(params: GridReadyEvent) {
    await this.loadData();
  }

  async onSearch() {
    console.log("enter");
    console.log(this.searchValue);
    
    
    await this.loadData();
  }

  async loadData() {
    console.log(this.searchValue);
    
    if (!this.searchValue.trim()) {
      // Si el valor de búsqueda está vacío o solo contiene espacios en blanco, no hacemos la solicitud
      return;
    }
    const url = `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${this.searchValue}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a00336c516msh31e9ef118384d79p177d20jsn40bba59afc95',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const rowData = [
        {
          name: result.location.name,
          region: result.location.region,
          country: result.location.country,
          lat: result.location.lat,
          lon: result.location.lon,
          tz_id: result.location.tz_id,
          localtime: result.location.localtime,
          sunrise: result.astronomy.astro.sunrise,
          sunset: result.astronomy.astro.sunset,
          moonrise: result.astronomy.astro.moonrise,
          moonset: result.astronomy.astro.moonset,
          moon_phase: result.astronomy.astro.moon_phase,
          moon_illumination: result.astronomy.astro.moon_illumination,
          is_moon_up: result.astronomy.astro.is_moon_up,
          is_sun_up: result.astronomy.astro.is_sun_up,
        },
      ];

      this.rowData$ = new Observable<any[]>(observer => {
        observer.next(rowData);
        observer.complete();
      });
    } catch (error) {
      console.error(error);
    }
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }


}
