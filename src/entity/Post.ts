import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("post")
export default class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  postIdx: number;

  @Column({
    length: 255,
    nullable: false,
  })
  title: string;

  @Column({
    nullable: true,
  })
  thumnail: string;

  @Column({
    nullable: false,
  })
  content: string;

  @Column("timestampz")
  @CreateDateColumn()
  createdAt: Date;

  @Column("timestampz")
  @UpdateDateColumn({
    nullable: true,
  })
  updatedAt: Date;
}
