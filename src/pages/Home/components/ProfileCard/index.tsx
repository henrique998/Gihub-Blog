import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'

import { ProfileCardContainer, ProfileCardDetails, ProfileInfo } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../libs/axios'

type User = {
  login: string
  name: string
  avatar_url: string
  bio: string
  html_url: string
  company: string
  followers: number
}

export function ProfileCard() {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    api.get('/users/henrique998').then((response) => setUser(response.data))
  }, [])

  return (
    <ProfileCardContainer>
      <img src={user?.avatar_url} alt="avatar" />

      <ProfileCardDetails>
        <header>
          <h1>{user?.name}</h1>
          <ExternalLink text="GITHUB" href={user?.html_url} target={'_blank'} />
        </header>

        <p>{user?.bio}</p>

        <ProfileInfo>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {user?.login}
          </li>

          <li>
            <FontAwesomeIcon icon={faBuilding} />
            {user?.company}
          </li>

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            {user?.followers} seguidores
          </li>
        </ProfileInfo>
      </ProfileCardDetails>
    </ProfileCardContainer>
  )
}
