import SectionTitle from "../../components/SectionTitle/index.vue";
import SkillCard from "../../components/SkillCard/index.vue";

import emojiJugglingIcon from "../../assets/icons/sectionsTitle/EmojiJuggling.svg";
import vueIcon from "../../assets/icons/technologies/vue.svg";

export default {
  name: "Skills",
  components: {
    SectionTitle,
    SkillCard,
  },
  data() {
    return {
      emojiJugglingIcon,
      vueIcon,
    };
  },
};
