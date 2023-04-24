import { UseCase } from './use-case'

export class UseCaseService {
    execute<T extends UseCase>(useCase: UseCase, params?: UseCaseParams<T>): Promise<UseCaseReturn<T>> {
        console.log(useCase, params)
        return useCase.handle(params) as Promise<UseCaseReturn<T>>
    }
}

export type UseCaseParams<T extends UseCase> = T extends UseCase<infer P, any> ? P : number
export type UseCaseReturn<T extends UseCase> = T extends UseCase<unknown, infer R> ? R : unknown
