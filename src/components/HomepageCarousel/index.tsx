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
              description="Use Telescope for searching, buffer management, and advanced LSP options."
              image="/img/screenshots/screenshot-telescope.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Symbols panel"
              description="Quickly navigate through symbols, functions, and variables."
              image="/img/screenshots/screenshot-symbols-navigate.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Manage your sessions"
              description="Save your sessions and restore them anytime with a single action."
              image="/img/screenshots/screenshot-sessions.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Built-in notes"
              description="Take and persist notes directly inside the editor."
              image="/img/screenshots/screenshot-notes.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="View all diagnostics"
              description="See all diagnostics in one place for faster issue tracking."
              image="/img/screenshots/screenshot-lsp-diagnostics.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Keymap helper"
              description="See available key bindings in real time as you type."
              image="/img/screenshots/screenshot-keymaps-help.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomepagePlugin
              title="Navigate your documents"
              description="Move quickly through files and jump between matches."
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
              description="Inspect diffs to understand exactly what has changed."
              image="/img/screenshots/screenshot-git2.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
