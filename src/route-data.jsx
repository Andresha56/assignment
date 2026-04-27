import { HomePage } from "./pages/home";
import { DetailPage } from "./pages/detail";
import { NotFoundPage } from "./pages/not-found";
import { Route, Routes } from "react-router-dom";

export default function RoutesData() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
