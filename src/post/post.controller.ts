import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Get()
  async getAllPost(): Promise<PostDto[]> {
    return this.postService.getAllPosts();
  }

  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }
}
