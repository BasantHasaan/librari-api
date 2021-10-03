import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  it('create new author', async () => {
    const name = 'basant', jobTitle = 'developer';

    const res = await request(app.getHttpServer())
      .post('/authors')
      .send({ name, jobTitle})
      .expect(201)
      .then(res => {
        const { id, name } = res.body;
        expect(id).toBeDefined();
        expect(name).toEqual(name);
      });

  });
});
