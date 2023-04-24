import { inject, injectable } from 'tsyringe'
import { TOKENS } from '@/core/di/injection-tokens'
import { Talk } from '../domain/talk'
import type { TalkRepository } from '../domain/talk-repository'
import { UseCase } from '@/core/command/use-case'
import { TalksNotFound } from '@/features/talks/domain/talk-error'

@injectable()
export class GetTalksQry implements UseCase<void, Talk[]> {
    constructor(@inject(TOKENS.TALKS_REPOSITORY) private readonly talkRepository: TalkRepository) {}

    handle(): Promise<Talk[]> {
        try {
            return this.talkRepository.getTalks()
        } catch (e) {
            return new TalksNotFound().error()
        }
    }
}
