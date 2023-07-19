import React, {Component} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Book from "../src/Page/Book/Book";
import Home from "../src/Page/Home/Home";
import Schedule from "../src/Page/schedule/schedule";
import Order from "./Page/OrderClass/OrderClass";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Switch> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/book" exact element={<Book />} />
          <Route path="/schedule" exact element={<Schedule />} />
          <Route path="/order" exact element={<Order />} />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
