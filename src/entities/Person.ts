import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

@Entity('PERSON')
export default class Person {
    @PrimaryColumn('varchar')
    cpf: string

    @Column('varchar')
    firstName: string

    @Column('varchar')
    lastName: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    modifiedAt: string
}