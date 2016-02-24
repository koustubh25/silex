import {Injectable} from 'angular2/core';
import {SUPERVISOR_PROCESSES} from '../mock/supervisor_all_jobs';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {config} from '../config/config';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SupervisorService {

    constructor(private http:Http){}

    makeHtpGetRequest(url){
        return this.http.get(url)
            .map(res =>res.json())
    }

    makeHttpPostRequest(url, body, options){
        return this.http.post(url, body, options)
            .map(res =>  res.json());
    }

    getSupervisorInfo(){
        let url = config.SUPERVISOR_API_BASE + "/info"

        return this.makeHtpGetRequest(url);
    }

    buildBody(ip, port, processName){
        let data = {
            "ip": ip,
            "port": port,
            "process": processName
        };
        let body = JSON.stringify(data);
        return body;
    }

    stopProcess(ip, port, processName){

        let url = config.SUPERVISOR_API_BASE + "/stop/process";
        let body = this.buildBody(ip, port, processName);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.makeHttpPostRequest(url, body, options)

    }

    startProcess(ip, port, processName){

        let url = config.SUPERVISOR_API_BASE + "/start/process";
        let body = this.buildBody(ip, port, processName);
        let header = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: header });
        return this.makeHttpPostRequest(url, body, options)

    }

}