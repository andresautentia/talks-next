import 'reflect-metadata'
import { instance, mock, verify } from 'ts-mockito'
import { TalkRepository } from '../domain/talk-repository'
import { FilterTalksQry } from './filter-talks-qry'

describe('FilterTalks', () => {
    it('should call talkRepository.getTalks once', () => {
        const { filterTalksQry, talkRepository } = setup()
        filterTalksQry.handle({ speakerSelected: 1, topicSelected: 1 })
        verify(talkRepository.filterTalks(1, 1)).once()
    })
})

const setup = () => {
    const talkRepository = mock<TalkRepository>()
    return { filterTalksQry: new FilterTalksQry(instance(talkRepository)), talkRepository }
}
