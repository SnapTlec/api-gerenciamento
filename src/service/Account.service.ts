import { AppDataSource } from "../data-source";
import { Account } from "../entities/Account";

export const AccountService = AppDataSource.getRepository(Account).extend({
    async isCreated(cpf : string){
        var count : Promise<number> | any = await this.count({
            select : {
                userCpf : true
            },

            where : {
                userCpf : cpf
            }
        })

        if(count > 0){
            return true;
        }
        return false;
    }
});