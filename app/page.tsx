import Navbar from "./components/Navbar";
import SendStreams from "./components/SendStreams";
export default function Home() {
  return (
    <main className="bg-black h-screen overflow-auto">
      <Navbar />
      <div className="h-5/6">
        <SendStreams />
      </div>
    </main>
  );
}
