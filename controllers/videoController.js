import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
  // const searchingBy = req.query.term; // the old way before ES6
  const {
    query: { term: searchingBy },
  } = req;
  console.log(searchingBy);
  //res.render("search", { pageTitle: "Search", searchingBy: searchingBy }); // old way
  res.render("search", { pageTitle: "Search", searchingBy, videos }); // ES6 way
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
