import { Injectable } from '@nestjs/common';

@Injectable()
export class SpotifyUseCase{

    async exec(genrer:any){
        console.log('chegou usecase');
        console.log(genrer);
    }
}