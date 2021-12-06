import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CONSUMER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'consumer',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'demo-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
