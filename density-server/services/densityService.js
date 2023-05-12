export function getDensitys(req, res) {
    res.send([{
        year: 2030,
        province: "Huelva"
    }]);
}

export function findByyear(req, res) {
    res.send({
        year: 2030,
        province: "Huelva"
    });
}

