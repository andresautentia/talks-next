import { Talk } from '@/features/talks/domain/talk'

export class TalksNotFound extends Error {
    error(): Promise<Talk[]> {
        return new Promise(resolve => resolve([]))
    }
}
