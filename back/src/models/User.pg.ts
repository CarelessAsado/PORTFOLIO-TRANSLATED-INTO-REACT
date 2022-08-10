import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(/* { default: false, nullable: true } */)
  ip: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column({ default: 1 })
  visits: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeUpdate()
  updateVisits() {
    this.visits = this.visits++;
    return;
  }
}
