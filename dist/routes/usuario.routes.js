"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuario = require("../controllers/usuario.cotroller");

var router = (0, _express.Router)();
router.get('/usuario', _usuario.getUsuario);
router.post('/usuario', _usuario.createNewUsuario);
router["delete"]('/usuario/:id_usuario', _usuario.deleteUsuario);
router.get('/usuario/count', _usuario.getTotalUsuarios);
router.put('/usuario/:id_usuario', _usuario.updateUsuarioByID);
router.get('/usuario/:id_usuario', _usuario.getUsuarioByID);
var _default = router;
exports["default"] = _default;