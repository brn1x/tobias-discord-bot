import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getHello() {
    const pokemon = await this.prisma.pokemon.findMany();
    return {
      success: true,
      pokemon,
    };
  }
}
