import ContactMe from '../../components/molecules/About/ContactMe/index.vue'
import SectionHeader from '../../components/molecules/Global/SectionHeader/index.vue'
import SocialMedia from '../../components/molecules/About/SocialMedia/index.vue'

import emojiThikingIcon from '../../assets/icons/sectionsTitle/EmojiThinking.svg'
import githubIcon from '../../assets/icons/socialMedias/GitHub.svg'
import instagramIcon from '../../assets/icons/socialMedias/Instagram.svg'
import linkedinIcon from '../../assets/icons/socialMedias/LinkedIn.svg'
import twitterIcon from '../../assets/icons/socialMedias/Twitter.svg'

export default {
  name: 'About',
  components: {
    ContactMe,
    SectionHeader,
    SocialMedia,
  },
  data() {
    return {
      emojiThikingIcon,
      githubIcon,
      instagramIcon,
      linkedinIcon,
      twitterIcon,
    }
  },
}
