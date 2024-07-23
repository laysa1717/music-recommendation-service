import { Injectable } from '@nestjs/common';

@Injectable()
export class SpotifyUseCase{

    async exec(genero:any){
        console.log('chegou usecase');
        console.log(genero);
    }
}