const sql = require("./db");

exports.getAll = (result) => {
  const qry = "select * from userdata;";

  sql.query(qry, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};
exports.getByYear = (year, result) => {
  const qry = "select * from userdata where yea = " + year;
  sql.query(qry, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};
exports.getFiltered = (req, result) => {
  const qry =
    "select * from userdata where yea = " +
    req.params.yea +
    " and mon= " +
    req.params.mon;
  sql.query(qry, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};
