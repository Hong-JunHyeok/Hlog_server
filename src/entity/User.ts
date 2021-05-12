import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  userIdx: string;

  @Column()
  id: string;

  @Column()
  pw: string;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  isAdmin: boolean;
}
