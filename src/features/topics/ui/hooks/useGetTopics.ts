import { useEffect, useState } from 'react'
import { useResolve } from '../../../../core/di/useResolve'
import { GetTopicsQry } from '../../application/get-topics-qry'
import { Topic } from '../../domain/topic'
import { UseCaseService } from '../../../../core/command/use-case-service'

export const useGetTopics = () => {
    const getTopics = useResolve(GetTopicsQry)
    const useCaseService = new UseCaseService()
    const [selectOptions, setSelectOptions] = useState<Topic[]>([])

    useEffect(() => {
        useCaseService.execute(getTopics).then(topics => {
            setSelectOptions(topics)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        selectOptions,
    }
}
