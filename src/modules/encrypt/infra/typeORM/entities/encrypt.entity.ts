import Cryptr from "cryptr";
import dotenv from "dotenv";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

dotenv.config();
const cryptr = new Cryptr(process.env.HASH);

@Entity("encrypt")
class Encrypt {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @BeforeInsert()
  encrypt(): void {
    this.name = cryptr.encrypt(this.name);
  }
}

export { Encrypt };
