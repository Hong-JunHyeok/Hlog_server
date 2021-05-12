import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export default class User extends BaseEntity{
  @PrimaryGeneratedColumn()
  userIdx : number;

  @Column()
  id: string;

  @Column()
  pw : string

  @Column()
  name: string;

  @Column()
  desc : string;
}
