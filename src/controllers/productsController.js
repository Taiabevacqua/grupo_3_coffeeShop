const fs = require("fs");
const path = require("path");

const { validationResult } = require("express-validator");

const db = require("../database/models");

module.exports = {
  add: (req, res) => {
    const categories = db.Category.findAll({
      order: ["name"],
    });
    const origins = db.origins.findAll({
      order: ["country"],
    });
    const flavors = db.Flavors.findAll({
      order: ["name"],
    });
    Promise.all([categories, origins, flavors])
      .then(([categories, origins, flavors]) => {
        return res.render("products/product-add", {
          categories,
          origins,
          flavors,
        });
      })
      .catch((error) => console.log(error));
  },

  detail: (req, res) => {
    return res.render("products/productDetail");
  },
  cafeteras: (req, res) => {
    return res.render("products/cafeteras", {
      productos,
    });
  },
  capsulas: (req, res) => {
    return res.render("products/capsulas", {
      productos,
    });
  },
  cafeengrano: (req, res) => {
    return res.render("products/cafeengrano", {
      products,
    });
  },

  edit: (req, res) => {
    const { id } = req.params;

    const product = db.Products.findByPk(id, {
      include: [],
    });

    const categories = db.Category.findAll({
      order: [["name"]],
    });

    const origins = db.origins.findAll({
      order: ["country"],
    });
    const flavors = db.Flavors.findAll({
      order: ["name"],
    });
    Promise.all([product, categories, origins, flavors])
      .then(([product, categories, origins, flavors]) => {
        return res.render("products/products-edit", {
          ...product.dataValues,
          categories,
          origins,
          flavors,
        });
      })
      .catch((error) => console.log(error));
  },

  update: (req, res) => {
    const { name, price, discount, description, category, flavor, origin } = req.body;


    const { id } = req.params;
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Products.findByPk(id, {})
        .then((product) => {
          db.Products.update(
            {
              name: name.trim(),
              price,
              discount,
              image : req.file ? req.file.filename : product.image,
              description,
              categoryId : category,
              flavorId: flavor,
              originId : origin
            },
            {
              where: {
                id,
              },
            }
          );
        })
        .then(() => {
          return res.redirect("/dashboard");
        })
        .catch((error) => console.log(error));
    }

    const product = db.Products.findByPk(id, {});
    const categories = db.Category.findAll({
      order: [["name"]],
    });
    Promise.all([product, categories])
      .then(([product, categories]) => {
        return res.render("products/products-edit", {
          ...product.dataValues,
          categories,
          errors: errors.mapped(),
        });
      })
      .catch((error) => console.log(error));
  },

  create: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { name, description, price, discount, flavor, category, origin } =
        req.body;

      db.Products.create({
        name,
        price,
        discount,
        image : req.file ? req.file.filename : null,
        description,
        flavorId: flavor,
        categoryId: category,
        originId: origin,
      })
        .then(() => res.redirect('/dashboard'))
        .catch(error => console.log(error))


    } else {
      const categories = db.Category.findAll({
        order: [["name"]],
      });

      const origins = db.origins.findAll({
        order: ["country"],
      });
      const flavors = db.Flavors.findAll({
        order: ["name"],
      });
      Promise.all([categories, origins, flavors])
        .then(([categories, origins, flavors]) => {
          return res.render("products/product-add", {
            errors: errors.mapped(),
            old: req.body,
            categories,
            origins,
            flavors,
          });
        })
        .catch((error) => console.log(error));
    }
  },
  search: (req, res) => {
    const { keywords } = req.query;

    return res.render("", {
      productos: productos.filter(
        (producto) =>
          producto.nombre.toLowerCase().includes(keywords.toLowerCase()) ||
          producto.descripcion.toLowerCase().includes(keywords.toLowerCase())
      ),
      keywords,
    });
  },

  remove: (req, res) => {
    const { id } = req.params;
    db.Product.findByPk(id, {
      include: ["images"],
    })
      .then(({ mainImage, images }) => {
        existsSync(`public/images/products/${mainImage}`) &&
          unlinkSync(`public/images/products/${mainImage}`);
        images.forEach((image) => {
          existsSync(`public/images/products/${image.file}`) &&
            unlinkSync(`public/images/products/${image.file}`);
        });
        db.Image.destroy({
          where: {
            id_product: id,
          },
        }).then(() => {
          db.Product.destroy({
            where: {
              id,
            },
          }).then(() => {
            return res.redirect("/admin");
          });
        });
      })
      .catch((error) => console.log(error));
  },
};
