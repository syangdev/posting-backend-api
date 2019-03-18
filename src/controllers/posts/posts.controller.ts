import { Controller, Get, Logger, Param, Post, Put } from '@nestjs/common';
import { RouteRoot } from 'src/shared/route';

@Controller(`${RouteRoot}/posts`)
export class PostsController {
    constructor(private logger: Logger) {}

    @Get()
    public getPosts() {
        const message: string = `[${Date.now()}] [GET] ${RouteRoot}/posts`;
        this.logger.log(message);
        return {message};
    }

    @Get(":id")
    public getPostById(
        @Param("id") postId: string
    ) {
        const message: string = `[${Date.now()}] [GET] ${RouteRoot}/posts/${postId}`;
        this.logger.log(message);
        return {message};
    }

    @Post("")
    public createPost(
        @Param("id") postId: string,
    ) {
        const message: string = `[${Date.now()}] [POST] ${RouteRoot}/posts`;
        this.logger.log(message);
        return {message};
    }

    @Put(":id")
    public updatePost(
        @Param("id") postId: string
    ) {
        const message: string = `[${Date.now()}] [PUT] ${RouteRoot}/posts/${postId}`;
        this.logger.log(message);
        return {message};
    }
}
