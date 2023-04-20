import { inject, injectable } from 'tsyringe'
import { TOKENS } from '../../../core/di/injection-tokens'
import { Speaker } from '../domain/speaker'
import type { SpeakerRepository } from '../domain/speaker-repository'
import { UseCase } from '../../../core/command/use-case'

@injectable()
export class GetSpeakerQry implements UseCase<void, Speaker[]> {
    constructor(@inject(TOKENS.SPEAKER_REPOSITORY) private readonly speakerRepository: SpeakerRepository) {}

    handle(): Promise<Speaker[]> {
        return this.speakerRepository.getSpeakers()
    }
}
