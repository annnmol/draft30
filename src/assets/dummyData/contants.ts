export const DAYS_LISTING_DATA = Array.from({ length: 30 }, (_, index) => ({
  label: `Day ${index + 1}`,
  value: index + 1,
}));

export const CAROUSEL_DATA = [
  {
    title: "anmol",
    image: "https://source.unsplash.com/random/?city,night",
  },
  {
    title: "singh",
    image: "https://source.unsplash.com/random/?jaipur",
  },
  {
    title: "Pinal",
    image: "https://source.unsplash.com/random/?girls,india",
  },
  {
    title: "Pinal",
    image: "https://source.unsplash.com/random/?india,village",
  },
  {
    title: "Pinal",
    image: "https://source.unsplash.com/random/?hills",
  },
];

export const awsS3Image = "https://anmol-apps.s3.ap-south-1.amazonaws.com/rn-draft30/strangerThings.webp";
