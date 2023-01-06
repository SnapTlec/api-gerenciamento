import { Any, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import Person from "../entities/Person";

export const userServices = AppDataSource.getRepository(Person).extend({
    async isCreate(cpf : string){
        var count : Promise <number> | any = await this.count({
            select : {
                cpf : true
            },
            where : {
                cpf
            }
        });
        
        if(count > 0){
            return true;
        }
        return false;


        
    }
});

