import * as service from '../services/densityService.js';

export function getDensitys(req, res) {
    service.getDensitys(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}

