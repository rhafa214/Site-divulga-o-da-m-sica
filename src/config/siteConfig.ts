export const publicUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const siteConfig = {
  songTitle: "Quebranta-me",
  artistName: "Missão Sedentos",
  launchDate: null as string | null,
  audioSrc: publicUrl("audio/quebranta-me.mp3"),
  preSaveUrl: "INSERIR_LINK_REAL_AQUI",
  officialSongUrl: "",
  instagramUrl: "https://instagram.com/missaosedentos_",
  images: {
    hero: publicUrl("assets/arte-principal-quero-queimar.png"),
    typographic: publicUrl("assets/arte-quebranta-me.png"),
    poster: publicUrl("assets/arte-clara-coracao.png"),
    logo: publicUrl("assets/logo-missao-sedentos.png"),
    audioCover: publicUrl("assets/capa-oficial-quebranta-me.png")
  }
};
