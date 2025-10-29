import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import MovieCollectionPlayer from "../components/MovieCollectionPlayer";
import MovieSections from "../components/MovieSections";
import GenreSelectSection from "../components/GenreSelectSection";
import UserReviewsSection from "../components/UserReviewsSection";
import Footer from "../components/Footer";
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="bg-[#0b021f] text-white min-h-screen scrollbar-hide ">
      <Navbar />
      <Showcase />
      <MovieCollectionPlayer />
      <MovieSections />
      <GenreSelectSection/>
      <UserReviewsSection/>
      <Footer/>
    </div>
  );
}
