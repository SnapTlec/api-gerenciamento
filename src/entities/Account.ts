import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import Person from "./Person";

@Entity('ACCOUNT')
export class Account{
    @PrimaryColumn()
    @OneToOne(() => Person, person => person.cpf)
    @JoinColumn({
        name : 'userCpf',
        referencedColumnName : 'cpf'
    })
    userCpf : string
    
    @Column({type : "text"})
    email : string

    @Column({type : "text"})
    accountPassword : string

    @Column({type : "datetime"})
    createdAt : String

    @Column({type : "datetime"})
    modifiedAt : string
}