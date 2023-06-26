import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import VerticalAlignBottomOutlinedIcon from "@mui/icons-material/VerticalAlignBottomOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import CreateSvgIcon from "@/components/CreateSvgIcon";

export const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
];

export const navDrawerItems = [
  {
    text: "Home Icon",
    icon: <CreateSvgIcon icon={<HomeOutlinedIcon />} />,
    route: "/",
  },
  {
    text: "Search Icon",
    icon: <CreateSvgIcon icon={<SearchOutlinedIcon />} />,
    route: "/search",
  },
  {
    text: "Favorites Icon",
    icon: <CreateSvgIcon icon={<FavoriteBorderOutlinedIcon />} />,
    route: "/favorites",
  },
  {
    text: "Voice Icon",
    icon: <CreateSvgIcon icon={<KeyboardVoiceOutlinedIcon />} />,
    route: "/voice",
  },
  {
    text: "Moving Icon",
    icon: <CreateSvgIcon icon={<MovingOutlinedIcon />} />,
    route: "/moving",
  },
  {
    text: "Download Icon",
    icon: <CreateSvgIcon icon={<VerticalAlignBottomOutlinedIcon />} />,
    route: "/download",
  },
  {
    text: "Toc Icon",
    icon: <CreateSvgIcon icon={<TocOutlinedIcon />} />,
    route: "/toc",
  },
  {
    text: "Add Icon",
    icon: <CreateSvgIcon icon={<AddOutlinedIcon />} />,
    route: "/add",
  },
];
