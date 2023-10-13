import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./components/common/Header";
import StoryList from "./components/stories/StoryList";
import CommentForm from "./components/comments/CommentForm";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <main>
        <Container>
          <Header />
          <StoryList />
          <hr className="my-5" />
          <CommentForm />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
