import type { RequestHandler } from "express";

//import access to data
import categoryRepository from "./categoryRepository";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);
  const category = categories.find((cat) => cat.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
