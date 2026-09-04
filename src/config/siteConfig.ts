export const publicUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const siteConfig = {
  songTitle: "Quebranta-me",
  artistName: "Missão Sedentos",
  releaseDate: "2026-09-18T00:00:00-03:00",
  launchDate: "2026-09-18T00:00:00-03:00",
  audioSrc: publicUrl("audio/quebranta-me.mp3"),
  preSaveUrl: "INSERIR_LINK_REAL_AQUI",
  officialSongUrl: "",
  instagramUrl: "https://instagram.com/missaosedentos_",
  images: {
    hero: publicUrl("assets/arte-principal-quero-queimar.png"),
    logo: publicUrl("assets/logo-missao-sedentos.png"),
    audioCover: publicUrl("assets/capa-quebranta-me.png")
  }
};
