import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import HomepagePlugin from "@site/src/components/HomepagePlugin";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.css";

export default function App() {
  return (
    <section className={styles.carouselWrapper}>
      <div className={styles.carouselContent}>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={0}
          className="mySwiper"
        >
          <SwiperSlide>
            <HomepagePlugin
              title="Make the most of Telescope"
              description="Search files, manage buffers, and access advanced LSP features using Telescope."
              image="/img/screenshots/screenshot-telescope.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Symbols panel"
              description="Navigate through symbols, functions, and variables with a dedicated symbols panel."
              image="/img/screenshots/screenshot-symbols-navigate.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Manage your sessions"
              description="Save, restore, and manage editor sessions to continue your work instantly."
              image="/img/screenshots/screenshot-sessions.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Built-in notes"
              description="Create, edit, and persist notes directly inside Neovim without external tools."
              image="/img/screenshots/screenshot-notes.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="View all diagnostics"
              description="Inspect all diagnostics in a single view to track and fix issues faster."
              image="/img/screenshots/screenshot-lsp-diagnostics.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Keymap helper"
              description="Discover available key bindings in real time as you type commands."
              image="/img/screenshots/screenshot-keymaps-help.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Navigate your documents"
              description="Move efficiently through files and jump between search results and locations."
              image="/img/screenshots/screenshot-document-navigation.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Perform Git actions"
              description="A fast and intuitive terminal UI for Git. Stage, commit, rebase, and manage branches with ease."
              image="/img/screenshots/screenshot-lazygit.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Review file changes"
              description="Review and compare file changes to understand differences between commits or branches."
              image="/img/screenshots/screenshot-git2.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
