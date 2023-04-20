import { inject, injectable } from 'tsyringe'
import { TOKENS } from '../../../core/di/injection-tokens'
import { Topic } from '../domain/topic'
import type { TopicRepository } from '../domain/topic-repository'
import { UseCase } from '../../../core/command/use-case'

@injectable()
export class GetTopicsQry implements UseCase<void, Topic[]> {
    constructor(@inject(TOKENS.TOPIC_REPOSITORY) private readonly topicRepository: TopicRepository) {}

    handle(): Promise<Topic[]> {
        return this.topicRepository.getTopics()
    }
}
