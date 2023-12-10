import Navbar from "./components/Navbar";
import SendStreams from "./streams/page";
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
