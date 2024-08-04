import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async createPost(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        title: createPostDto.title,
        content: createPostDto.content,
        user: {
          connect: {
            id: createPostDto.userId,
          },
        },
      },
    });
  }

  async getAllPosts(): Promise<PostDto[]> {
    return this.prisma.post.findMany({
      include: {
        user: true,
      },
    });
  }
}
