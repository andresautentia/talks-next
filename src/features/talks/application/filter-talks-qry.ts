import { inject, injectable } from 'tsyringe'
import { TOKENS } from '@/core/di/injection-tokens'
import { Talk } from '../domain/talk'
import type { TalkRepository } from '../domain/talk-repository'
import { UseCase } from '@/core/command/use-case'
import { TalksNotFound } from '@/features/talks/domain/talk-error'

type Params = { speakerSelected: number; topicSelected: number }

@injectable()
export class FilterTalksQry implements UseCase<Params, Talk[]> {
    constructor(@inject(TOKENS.TALKS_REPOSITORY) private readonly talkRepository: TalkRepository) {}

    handle({ speakerSelected, topicSelected }: Params): Promise<Talk[]> {
        try {
            return this.talkRepository.filterTalks(speakerSelected, topicSelected)
        } catch (e) {
            return new TalksNotFound().error()
        }
    }
}
