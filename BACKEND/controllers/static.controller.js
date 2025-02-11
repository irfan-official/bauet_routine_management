export function staticDefault(req, res) {
  return res.status(200).render("index");
}

export function server(req, res) {
  return res.status(200).render("server");
}
export function notFound(req, res) {
  return res.status(200).render("notfound");
}
