exports.getUser = (req, res, next) => {
  res.send({
    Nama: 'Alfa',
    Alamat: 'Depok',
    Pekerjaan: 'Wiraswasta',
    Umur: 24,
  });
};
