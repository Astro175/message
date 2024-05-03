import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import MessagesServices from './messages.service';

@Controller('messages')
export class MessagesController {
  MessagesServices: MessagesServices;

  constructor() {
    this.MessagesServices = new MessagesServices();
  }
  @Get()
  listMessages() {
    return this.MessagesServices.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.MessagesServices.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: any) {
    return this.MessagesServices.findOne(id);
  }
}
