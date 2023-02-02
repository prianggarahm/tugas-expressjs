exports.helloWorld = (req, res, next) => {
  res.send('<h1>Display Tested on expressjs</h1>');
};

// fungsi utk about-me
exports.aboutMe = (req, res, next) => {
  res.send({
    Nama: 'Priangga R',
    Alamat: 'Jakarta',
    Pekerjaan: 'IT Officer',
  });
};
