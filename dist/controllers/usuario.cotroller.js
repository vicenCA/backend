"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUsuarioByID = exports.getTotalUsuarios = exports.deleteUsuario = exports.getUsuarioByID = exports.createNewUsuario = exports.getUsuario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getUsuario = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getAllUsuarios);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUsuario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsuario = getUsuario;

var createNewUsuario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, nombre_usuario, rut, correo_electronico, _req$body2, direccion, numero_cel, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre_usuario = _req$body.nombre_usuario, rut = _req$body.rut, correo_electronico = _req$body.correo_electronico;
            _req$body2 = req.body, direccion = _req$body2.direccion, numero_cel = _req$body2.numero_cel;

            if (!(nombre_usuario == null || rut == null || correo_electronico == null)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: 'Bad Request. Please fill all fields'
            }));

          case 4:
            if (direccion == null) direccion = "vacío";
            if (numero_cel == null) numero_cel = 0;
            _context2.prev = 6;
            _context2.next = 9;
            return (0, _database.getConnection)();

          case 9:
            pool = _context2.sent;
            _context2.next = 12;
            return pool.request().input("nombre_usuario", _database.sql.VarChar, nombre_usuario).input("rut", _database.sql.VarChar, rut).input("correo_electronico", _database.sql.VarChar, correo_electronico).input("direccion", _database.sql.VarChar, direccion).input("numero_cel", _database.sql.BigInt, numero_cel).query(_database.queries.addNewUsuario);

          case 12:
            res.json({
              nombre_usuario: nombre_usuario,
              rut: rut,
              correo_electronico: correo_electronico,
              direccion: direccion,
              numero_cel: numero_cel
            });
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](6);
            res.status(500);
            res.send(_context2.t0.message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 15]]);
  }));

  return function createNewUsuario(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewUsuario = createNewUsuario;

var getUsuarioByID = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id_usuario, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id_usuario = req.params.id_usuario;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input("id_usuario", id_usuario).query(_database.queries.getUsuarioById);

          case 6:
            result = _context3.sent;
            res.send(result.recordset[0]);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUsuarioByID(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUsuarioByID = getUsuarioByID;

var deleteUsuario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id_usuario, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_usuario = req.params.id_usuario;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input("id_usuario", id_usuario).query(_database.queries.deleteUsuario);

          case 6:
            result = _context4.sent;
            res.sendStatus(204);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteUsuario = deleteUsuario;

var getTotalUsuarios = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.getConnection)();

          case 2:
            pool = _context5.sent;
            _context5.next = 5;
            return pool.request().query(_database.queries.getTotalUsuarios);

          case 5:
            result = _context5.sent;
            console.log(result);
            res.json(result.recordset[0]['']);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getTotalUsuarios(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getTotalUsuarios = getTotalUsuarios;

var updateUsuarioByID = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, nombre_usuario, rut, correo_electronico, direccion, numero_cel, id_usuario, pool;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, nombre_usuario = _req$body3.nombre_usuario, rut = _req$body3.rut, correo_electronico = _req$body3.correo_electronico, direccion = _req$body3.direccion, numero_cel = _req$body3.numero_cel;
            id_usuario = req.params.id_usuario;

            if (!(nombre_usuario == null || rut == null || correo_electronico == null || direccion == null || numero_cel == null)) {
              _context6.next = 4;
              break;
            }

            return _context6.abrupt("return", res.status(400).json({
              msg: 'Bad Request. Please fill all fields'
            }));

          case 4:
            _context6.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context6.sent;
            _context6.next = 9;
            return pool.request().input("nombre_usuario", _database.sql.VarChar, nombre_usuario).input("rut", _database.sql.VarChar, rut).input("correo_electronico", _database.sql.VarChar, correo_electronico).input("direccion", _database.sql.VarChar, direccion).input("numero_cel", _database.sql.BigInt, numero_cel).input("id_usuario", _database.sql.Int, id_usuario).query(_database.queries.updateUsuarioById);

          case 9:
            res.json({
              nombre_usuario: nombre_usuario,
              rut: rut,
              correo_electronico: correo_electronico,
              direccion: direccion,
              numero_cel: numero_cel
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateUsuarioByID(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateUsuarioByID = updateUsuarioByID;