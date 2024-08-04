import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Get()
  async getAllPost(): Promise<PostDto[]> {
    return this.postService.getAllPosts();
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Post()
  createPost(@Body() createPostDto: CreatePostDto, @Request() req: any) {
    createPostDto.userId = req.user.sub;
    return this.postService.createPost(createPostDto);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Put()
  updatePost(@Body() postDto: PostDto, @Request() req: any) {
    postDto.userId = req.user.sub;
    return this.postService.updatePost(postDto);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('content-type', 'application/json')
  @Delete()
  deletePost(@Param('id') id: string, @Request() req: any) {
    const userId = req.user.sub;
    return this.postService.deletePost(id, userId);
  }
}
