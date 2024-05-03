import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './message/messages.controller';

@Module({
  imports: [],
  controllers: [AppController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
