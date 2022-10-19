import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class MainScreenService {
  constructor(private dataSource: DataSource) {}
}
