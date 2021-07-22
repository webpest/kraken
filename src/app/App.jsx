import React from "react";
import { FeedBacks } from "../components/FeedBack";
import { Sidebar } from "../components/Sidebar";
import "./app.scss";
import { feedbacks } from "../mock/feedbacks";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <FeedBacks feedbacks={feedbacks} />
      </main>
    </div>
  );
}

export default App;
