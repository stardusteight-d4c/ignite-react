import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Index } from "./pages/Index";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}