import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(/* { default: false, nullable: true } */)
  ip: string;

  @Column(/* { default: false, nullable: true } */)
  country: string;

  @Column(/* { default: false, nullable: true } */)
  city: string;
  @Column({ default: 1 })
  visits: number;
}
