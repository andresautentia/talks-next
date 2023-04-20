import 'reflect-metadata'
import { instance, mock, verify } from 'ts-mockito'
import { TalkRepository } from '../domain/talk-repository'
import { GetTalksQry } from './get-talks-qry'

describe('GetTalks', () => {
    it('should call talkRepository.getTalks once', () => {
        const { getTalkQry, talkRepository } = setup()
        getTalkQry.handle()
        verify(talkRepository.getTalks()).once()
    })
})

const setup = () => {
    const talkRepository = mock<TalkRepository>()
    return { getTalkQry: new GetTalksQry(instance(talkRepository)), talkRepository }
}
