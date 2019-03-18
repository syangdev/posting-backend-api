import { Controller, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { RouteRoot } from 'src/shared/route';

@Controller(`${RouteRoot}/posts`)
export class PostsController {
    constructor(private logger: Logger) {}

    @Get()
    public getPosts() {
        this.logger.log(`[${Date.now()}] [GET] ${RouteRoot}/posts`);
    }

    @Get(":id")
    public getPostById(
        @Param("id") postId: string
    ) {
        this.logger.log(`[${Date.now()}] [GET] ${RouteRoot}/posts/${postId}`);
    }

    @Post("")
    public createPost(
        @Param("id") postId: string,
    ) {
        this.logger.log(`[${Date.now()}] [POST] ${RouteRoot}/posts`);
    }

    @Put(":id")
    public updatePost(
        @Param("id") postId: string
    ) {
        this.logger.log(`[${Date.now()}] [PUT] ${RouteRoot}/posts/${postId}`);
    }
}
