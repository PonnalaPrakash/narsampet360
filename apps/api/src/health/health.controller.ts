import { Controller, Get } from '@nestjs/common';


@Controller('health')
export class HealthController {


@Get()

check(){

return {

status:"OK",

service:"Narsampet360 API",

timestamp:new Date()

};

}


}