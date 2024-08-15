import {Route, Routes} from "react-router-dom";
import {CreatePage} from "../../domain/createPage";
import {ListPage} from "../../domain/listPage";
import React from "react";
import {LIST_PAGE_PATH, CREATE_PAGE_PATH} from "./constant";

export const Shell = () => {
    return(
        <Routes>
            <Route path={CREATE_PAGE_PATH} element={<CreatePage />} />
            <Route path={LIST_PAGE_PATH} element={<ListPage />} />
            <Route path="*" element={<ListPage />} />
    </Routes>
    )
}