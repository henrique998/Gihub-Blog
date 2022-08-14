import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import avatar from '../../../../assets/avatar.png'

import { ProfileCardContainer, ProfileCardDetails, ProfileInfo } from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src={avatar} alt="avatar" />

      <ProfileCardDetails>
        <header>
          <h1>Cameron Williamson</h1>
          <ExternalLink text="GITHUB" href="#" target={'_blank'} />
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ProfileInfo>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </li>

          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>

          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </li>
        </ProfileInfo>
      </ProfileCardDetails>
    </ProfileCardContainer>
  )
}
