import Footer from "../footer/Footer";
import Logo from "../navigation/Logo";
import SearchBar from "./SearchBar";

export default function Modal({ children }) {
  return (
    <div className="absolute top-0 left-0 h-auto w-full z-50 bg-[#1D212B]">
      <nav class="py-6 md:py-8">
        <div class="container mx-auto flex items-center justify-between gap-x-6">
          <Logo />

          <SearchBar />
        </div>
      </nav>

      {children}

      <Footer />
    </div>
  );
}
