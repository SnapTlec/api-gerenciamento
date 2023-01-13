import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
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

    @CreateDateColumn({type : "datetime"})
    createdAt : String

    @UpdateDateColumn({type : "datetime"})
    modifiedAt : string
}