import ThemeType from "../../../enums/ThemeType";
import { Theme } from "../../../types/Theme";

export const light: Theme = {
  type: ThemeType.LIGHT,
  colors: {
    background: {
      color: "#F5F5F5",
    },
    text: {
      primary: {
        color: "#616161",
      },
      secondary: {
        color: "#888888",
      },
    },
    buttons: {
      primary: {
        color: "#F5F5F5",
        backgroundColor: "#4D4D4D",
        borderColor: "#00000000",
      },
      secondary: {
        color: "#616161",
        backgroundColor: "#E1E1E1",
        borderColor: "#00000000",
      },
      neumorphic: {
        color: "#888888",
        backgroundColor: "#F5F5F5",
        borderColor: "#00000000",
        shadowOne: {
          color: "#FFFFFF",
        },
        shadowTwo: {
          color: "#E3E3E3",
        },
      },
    },
    input: {
      color: "#616161",
      backgroundColor: "#EAEAEA",
    },
    socialMedias: {
      github: {
        color: "#F5F5F5",
        backgroundColor: "#000000",
      },
      instagram: {
        color: "#F5F5F5",
        backgroundColor: "#FF3E4A",
      },
      linkedin: {
        color: "#F5F5F5",
        backgroundColor: "#0077B5",
      },
      twitter: {
        color: "#F5F5F5",
        backgroundColor: "#1D9BF0",
      },
      whatsapp: {
        color: "#F5F5F5",
        backgroundColor: "#1DF058",
      },
    },
  },
};
