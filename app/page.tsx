import dynamic from "next/dynamic";
const Wrapper = dynamic(() => import("@/components/pages/Wrapper"));
import ClickSpark from "@/components/ClickSpark";
import { ScrollProgress, ScrollProgressProvider } from "@/components/animate-ui/primitives/animate/scroll-progress";

const Home = () => {
  return (
    <main className="relative overflow-x-hidden">
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Wrapper />
        <ScrollProgressProvider global>
          <ScrollProgress className="fixed top-0 left-0 bg-yellow-500/90 dark:bg-white h-1" />
        </ScrollProgressProvider>
      </ClickSpark>
    </main>
  )
}

export default Home;