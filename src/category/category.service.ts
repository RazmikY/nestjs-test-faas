import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { returnRandomData } from 'src/helpers';

import { CategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
    public getData(): Observable<string> {
        return of('Hello from NestJS in Category Service');
    }

    public modifyData(category: CategoryDto): Observable<CategoryDto> {
        return returnRandomData().pipe(
            switchMap((d) =>
                of({
                    ...category,
                    data: {
                        ...category.data,
                        userId: 55,
                        statusValue: d,
                    },
                } as CategoryDto),
            ),
        );
    }
}
