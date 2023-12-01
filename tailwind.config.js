/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FF7628",
        secondaryColor: "#192239",
        bnrTClr: "#6C7D93",
        SocialClr: "#202427",
        latClr: "#413F45",
        cdHClr: "#D8EAFF",
        cdOne: "#EBF7E9",
        cdTwo: "#FBF1EC",
        bnrClr: "#e6e6e6",
        serCdBr: "rgba(255, 120, 41, 0.5)"
      },
      fontFamily: {
        Open: ["Open Sans"],
        Papri: ["Paprika"],
        Rob: ["Roboto"],
        Work: ["Work Sans"],
        Nunito: ["Nunito"],
      },
      maxWidth: {
        container: '1170px',
        containerX: '1113px',
      },
      borderRadius: {
        navBtn: '100px',
        serCdR: '20px',
      },
      width: {
        BnrW: '686px',
        BnrP: '571px',
        bnrCdW: '460px',
        serTxt: '332px',
        serCdW: '370px',
        abtLW: '542px',
        abtRW: '469px',
      },
      letterSpacing: {
        tighterP: '0.5px',
      },
      boxShadow: {
        'serCdShd': '0px 30px 60px 0px rgba(162, 169, 192, 0.10)',
      },
      padding: {
        serCdP: '52px',
      },
      lineHeight: {
        serCdLh: "30px"
      },
    },
  },
  plugins: [],
};
