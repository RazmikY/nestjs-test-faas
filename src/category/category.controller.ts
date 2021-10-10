import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CategoryDto } from './category.dto';

import { CategoryService } from './category.service';

@Controller('/category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    public getData(): Observable<string> {
        return this.categoryService.getData();
    }

    @Post()
    public modifyData(@Body() category: CategoryDto): Observable<CategoryDto> {
        return this.categoryService.modifyData(category);
    }
}
