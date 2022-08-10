import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
} from "typeorm";

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

  @Column({ default: 0 })
  visits: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  updateVisits() {
    console.log(this.visits, "ver q pasa");
    this.visits = this.visits++;
  }
}
