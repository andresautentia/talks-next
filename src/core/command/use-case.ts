export interface UseCase<Params = unknown, Response = unknown> {
    handle(params?: Params): Promise<Response>
}
