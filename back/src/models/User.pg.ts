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

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  visits: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  updateVisits() {
    console.log(this.visits, "ver q pasa");
    if (!this.visits) {
      this.visits = 0;
      return;
    }
    return (this.visits = this.visits++);
  }
}
