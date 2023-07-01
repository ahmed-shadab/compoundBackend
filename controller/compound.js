const Compound = require("../models/compound");

exports.getCompounds = async (req, res, next) => {
  Compound.findAll()
    .then((compound) => {
      return res.status(200).json(compound);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCompoundById = async (req, res, next) => {
  const id = req.params.id;
  Compound.findAll({ where: { id: id } })
    .then((compound) => {
      return res.status(200).json(compound);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateCompound = async (req, res, next) => {
  const id = req.body.id;
  const compoundName = req.body.CompoundName;
  const compoundDescription = req.body.CompoundDescription;
  const strImageSource = req.body.strImageSource;
  // const strImageAttribution = req.body.strImageAttribution;
  const dateModified = new Date();
  Compound.findAll({
    where: { id: id },
  })
    .then((compounds) => {
      let compound = compounds[0];
      compound.id = id;
      compound.CompoundName = compoundName;
      compound.CompoundDescription = compoundDescription;
      compound.strImageSource = strImageSource;
      // compound.strImageAttribution = strImageAttribution;
      compound.dateModified = dateModified;
      return compound.save();
    })
    .then((result) => {
      res.status(204).send("DATA UPDATED");
    })
    .catch((err) => {
      console.log(err);
    });
};
