import 'reflect-metadata'
import { instance, mock, verify } from 'ts-mockito'
import { TopicRepository } from '../domain/topic-repository'
import { GetTopicsQry } from './get-topics-qry'

describe('GetTopics', () => {
    it('should call topicRepository.getTopics once', () => {
        const { getTopicQry, topicRepository } = setup()
        getTopicQry.handle()
        verify(topicRepository.getTopics()).once()
    })
})

const setup = () => {
    const topicRepository = mock<TopicRepository>()
    return { getTopicQry: new GetTopicsQry(instance(topicRepository)), topicRepository }
}
