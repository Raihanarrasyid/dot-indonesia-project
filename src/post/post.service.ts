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

  async updatePost(postDto: PostDto) {
    return this.prisma.post.update({
      where: {
        id: postDto.id,
      },
      data: {
        title: postDto.title,
        content: postDto.content,
      },
    });
  }

  async deletePost(id: number) {
    return this.prisma.post.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
