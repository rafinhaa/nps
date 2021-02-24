import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("Surveys")
class Surveys {
    @PrimaryColumn()
    readonly id: string;
    //@Column("name") caso sua tabela estiver com nome diferente
    @Column() //caso sua tabela estiver com nome diferente
    title: string;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Surveys}