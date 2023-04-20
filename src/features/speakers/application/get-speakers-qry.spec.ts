import 'reflect-metadata'
import { GetSpeakerQry } from './get-speakers-qry'
import { instance, mock, verify } from 'ts-mockito'
import { SpeakerRepository } from '../domain/speaker-repository'

describe('GetSpeaker', () => {
    it('should call speakerRepository.getSpeakers once', () => {
        const { getSpeakerQry, speakerRepository } = setup()
        getSpeakerQry.handle()
        verify(speakerRepository.getSpeakers()).once()
    })
})

const setup = () => {
    const speakerRepository = mock<SpeakerRepository>()
    return { getSpeakerQry: new GetSpeakerQry(instance(speakerRepository)), speakerRepository }
}
