import SocialMediaIconButton from "../SocialMediaIconButton/index.vue";

import githubIcon from "../../assets/icons/GitHub.svg";
import instagramIcon from "../../assets/icons/Instagram.svg";
import linkedinIcon from "../../assets/icons/LinkedIn.svg";
import twitterIcon from "../../assets/icons/Twitter.svg";

export default {
  name: "About",
  components: {
    SocialMediaIconButton,
  },
  data() {
    return {
      githubIcon,
      instagramIcon,
      linkedinIcon,
      twitterIcon,
    };
  },
};
