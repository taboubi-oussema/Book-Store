import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BookstoredbDataSource} from '../datasources';
import {Books, BooksRelations} from '../models';

export class BooksRepository extends DefaultCrudRepository<
  Books,
  typeof Books.prototype.id,
  BooksRelations
> {
  constructor(
    @inject('datasources.bookstoredb') dataSource: BookstoredbDataSource,
  ) {
    super(Books, dataSource);
  }
}
