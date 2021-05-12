import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  userIdx: string;

  @Column({
    length: 30,
    nullable: false,
  })
  id: string;

  @Column({
    length: 30,
    nullable: false,
  })
  pw: string;

  @Column({
    length: 30,
    nullable: false,
  })
  name: string;

  @Column({ length: 255, nullable: true })
  desc: string;

  @Column({
    nullable: false,
  })
  isAdmin: boolean;
}
