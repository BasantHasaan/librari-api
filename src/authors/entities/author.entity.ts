import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Author extends Model<Author> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  jobTitle: string;
}
