import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Company } from '../models'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://localhost:8000/api';

  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/`)
  }
  
  getCompany(id: number): Observable<Company> {
    return this.client.get<Company>(`${this.BASE_URL}/companies/${id}`)
  }

  createCompany(company_name:string, company_description:string, company_city: string, company_address: string): Observable<Company> {
    return this.client.post<Company>(
      `${this.BASE_URL}/categories/`,       
      {
        name: company_name,
        description: company_description,
        city: company_city,
        address: company_address
      }
    )
  }

  deleteCompany(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/companies/${id}/`)
  }
}