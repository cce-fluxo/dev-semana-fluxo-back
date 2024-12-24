import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagPalestraService } from './tag_palestra.service';
import { CreateTagPalestraDto } from './dto/create-tag_palestra.dto';
import { UpdateTagPalestraDto } from './dto/update-tag_palestra.dto';

@Controller('tag-palestra')
export class TagPalestraController {
  constructor(private readonly tagPalestraService: TagPalestraService) {}

  @Post()
  create(@Body() createTagPalestraDto: CreateTagPalestraDto) {
    return this.tagPalestraService.create(createTagPalestraDto);
  }

  @Get()
  findAll() {
    return this.tagPalestraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagPalestraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagPalestraDto: UpdateTagPalestraDto) {
    return this.tagPalestraService.update(+id, updateTagPalestraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagPalestraService.remove(+id);
  }
}
