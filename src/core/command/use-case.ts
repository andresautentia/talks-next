export interface UseCase<Params = void, Response = void> {
    handle(params?: Params): Promise<Response>
}
