import ContactMeButton from "../../components/ContactMeButton/index.vue";
import SectionTitle from "../../components/SectionTitle/index.vue";
import SocialMediaIconButton from "../../components/SocialMediaIconButton/index.vue";

import emojiThikingIcon from "../../assets/icons/sectionsTitle/EmojiThinking.svg";
import githubIcon from "../../assets/icons/socialMedias/GitHub.svg";
import instagramIcon from "../../assets/icons/socialMedias/Instagram.svg";
import linkedinIcon from "../../assets/icons/socialMedias/LinkedIn.svg";
import twitterIcon from "../../assets/icons/socialMedias/Twitter.svg";

export default {
  name: "About",
  components: {
    ContactMeButton,
    SectionTitle,
    SocialMediaIconButton,
  },
  data() {
    return {
      emojiThikingIcon,
      githubIcon,
      instagramIcon,
      linkedinIcon,
      twitterIcon,
    };
  },
};
