import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer, InputContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { usePosts } from '../../../../contexts/SearchContext'
import { api } from '../../../../libs/axios'

const searchFormValidationSchema = zod.object({
  search: zod.string().min(1, 'Digite algo para pesquisar'),
})

type SearchFormData = zod.infer<typeof searchFormValidationSchema>

export function SearchForm() {
  const { getPosts } = usePosts()

  const { register, handleSubmit, formState, reset } = useForm<SearchFormData>({
    resolver: zodResolver(searchFormValidationSchema),
  })

  function handleSearch({ search }: SearchFormData) {
    const url = `/search/issues?q=${search} repo:henrique998/henrique-client-axi`

    api.get(url).then((res) => getPosts(res.data.items))

    reset()
  }

  const { errors } = formState

  const searchError = errors.search?.message

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>

      <InputContainer isError={!!searchError}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />

        {!!searchError && (
          <span>
            <FontAwesomeIcon icon={faCircleExclamation} />
            {searchError}
          </span>
        )}
      </InputContainer>
    </SearchFormContainer>
  )
}
