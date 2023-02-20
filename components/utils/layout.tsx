import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
