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


  it('create new article', async () => {
    const title = 'test', body = 'test body';
    const res = await request(app.getHttpServer())
      .post('/authors')
      .send({ title, body})
      .expect(201)
      .then(res => {
        const { id, title } = res.body;
        expect(id).toBeDefined();
      });

  });
});
