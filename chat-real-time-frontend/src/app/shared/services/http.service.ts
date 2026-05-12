import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })

export class HttpService
{
    private readonly httpClient = inject(HttpClient);
    private readonly apiUrl = environment.apiUrl;

    public async Post<T>(api: string, model: any): Promise<{ response: T, success: boolean }>
    {
        try
        {
            const response = await firstValueFrom(this.httpClient.post<T>(`${this.apiUrl}api/${api}`, model, {
                withCredentials: true
            }));
            return { response, success: true}
        }
        catch (ex: any)
        {
            console.error(ex);
            return { response: ex.error, success: false };
        }
    }
}