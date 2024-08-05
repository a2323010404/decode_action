//Mon Aug 05 2024 14:42:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  validateCarmeWithType: _0x19c84c,
  commonRequest: _0x48d761,
  getCookies: _0x51055d,
  getUserInfoWithX: _0xa8ea8,
  wait: _0x32ef3e,
  tryCatchPromise: _0x402926,
  checkCk: _0x3470ae
} = require("./common.js");
(function () {
  const _0x2a65fb = function () {
      let _0x424f5e;
      try {
        _0x424f5e = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x11594b) {
        _0x424f5e = window;
      }
      return _0x424f5e;
    },
    _0x4733a8 = _0x2a65fb();
  _0x4733a8.setInterval(_0x2ef160, 2000);
})();
const _0x3719fa = require("request"),
  _0x4cace1 = process.env.ELE_CARME,
  _0x17063c = 23,
  _0x321504 = require("crypto");
async function _0x4f6b37(_0x4b9431) {
  let _0x2d043c = {
      "missionCollectionId": "894",
      "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
      "bizScene": "SSKZ",
      "instance": "INNER"
    },
    _0x2be2e4 = "mtop.ele.biz.growth.task.core.querytask";
  try {
    const _0x6f3ed9 = await _0x48d761(_0x4b9431, JSON.stringify(_0x2d043c), _0x2be2e4, _0x17063c);
    if (_0x6f3ed9.data) return _0x6f3ed9.data.mlist;
  } catch (_0x472795) {
    return null;
  }
}
async function _0x391263(_0x46420d, _0x102dd3, _0x1be316, _0x2c6451) {
  const _0x1118dd = {
    "collectionId": _0x1be316,
    "missionId": _0x102dd3,
    "actionCode": "PAGEVIEW",
    "pageFrom": _0x2c6451,
    "viewTime": "15",
    "bizScene": "SSKZ",
    "accountPlan": "KB_ORCHARD",
    "sync": "false"
  };
  return await _0x48d761(_0x46420d, JSON.stringify(_0x1118dd), "mtop.ele.biz.growth.task.event.pageview", _0x17063c);
}
async function _0x2da9f4(_0x71d861, _0x4dfb31, _0x5cc64f, _0x1e5262) {
  const _0x9b7900 = {
    "missionCollectionId": _0x5cc64f,
    "missionId": _0x4dfb31,
    "bizScene": "SSKZ",
    "extInfo": "{\"uid\":\"1899178\"}",
    "instance": "INNER",
    "instanceId": _0x1e5262,
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.220926\\\",\\\"lat\\\":\\\"30.178582\\\"}\"]",
    "count": "1",
    "asac": "169932820075525472118"
  };
  let _0x56a589 = await _0x48d761(_0x71d861, JSON.stringify(_0x9b7900), "mtop.ele.biz.growth.task.core.receiveprize", _0x17063c);
  _0x56a589 && _0x56a589.data.rlist && console.log("完成任务");
}
async function _0x44d2ae(_0x2418ca, _0x5f1383, _0xa785f6) {
  const _0x30165e = {
    "missionCollectionId": _0xa785f6,
    "missionId": _0x5f1383,
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    "bizScene": "duobao_external",
    "accountPlan": "HAVANA_COMMON",
    "count": "1",
    "asac": "2A233157IJYIGQ95WFIIFJ",
    "umiToken": "1",
    "ua": "1"
  };
  let _0x48b573 = await _0x48d761(_0x2418ca, JSON.stringify(_0x30165e), "mtop.ele.biz.growth.task.core.receiveprize", _0x17063c);
  if (_0x48b573 && _0x48b573.rlist) {
    console.log("完成任务");
  }
}
async function _0x30f97a(_0x374070, _0x54ade1, _0x2ce36e) {
  const _0x32a665 = {
    "missionCollectionId": _0x54ade1,
    "missionId": _0x2ce36e,
    "bizScene": "SSKZ",
    "instance": "INNER"
  };
  let _0x29a9fe = await _0x48d761(_0x374070, JSON.stringify(_0x32a665), "mtop.ele.biz.growth.task.core.receivetask", _0x17063c);
  if (_0x29a9fe.data) {
    return _0x29a9fe.data;
  }
}
async function _0x425c2d(_0x58973c, _0x5d5560) {
  const _0x1182c3 = {
    "missionCollectionId": _0x5d5560,
    "locationInfos": "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    "bizScene": "SSKZ",
    "instance": "INNER"
  };
  let _0x532018 = await _0x48d761(_0x58973c, JSON.stringify(_0x1182c3), "mtop.ele.biz.growth.task.core.querytask", _0x17063c);
  if (_0x532018.data) {
    return _0x532018.data.mlist;
  }
}
async function _0x1b87be(_0x326b93, _0x12cb31, _0x55c07a) {
  const _0x46e8d2 = {
    "missionCollectionId": _0x12cb31,
    "missionId": _0x55c07a,
    "bizScene": "SSKZ",
    "accountPlan": "KB_ORCHARD",
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]"
  };
  let _0x85c09b = await _0x48d761(_0x326b93, JSON.stringify(_0x46e8d2), "mtop.ele.biz.growth.task.core.querytask", _0x17063c);
  if (_0x85c09b.data) return _0x85c09b.data.mlist[0];
}
async function _0x1381d5(_0x96c492) {
  const _0x615163 = await _0x4f6b37(_0x96c492);
  for (const _0x4b5891 of _0x615163) {
    let _0x375850 = _0x4b5891.missionCollectionId,
      _0x3e93f5 = _0x4b5891.missionDefId;
    if (_0x4b5891.status === "FINISH") await _0x2da9f4(_0x96c492, _0x3e93f5, _0x375850, _0x4b5891.id);else {
      if (_0x4b5891.actionConfig.actionType === "PAGEVIEW" && _0x4b5891.status === "RUNNING") {
        await _0x30f97a(_0x96c492, _0x375850, _0x3e93f5);
        let _0xd41cb6 = await _0x1b87be(_0x96c492, _0x375850, _0x3e93f5);
        if (_0xd41cb6.status === "RUNNING") {
          await _0x391263(_0x96c492, _0x3e93f5, _0x375850, _0x4b5891.actionConfig.actionValue.pageSpm);
          await _0x32ef3e(3);
          let _0x31cb3f = await _0x425c2d(_0x96c492, _0x375850);
          for (let _0x13361e = 0; _0x13361e < _0x31cb3f.length; _0x13361e++) {
            let _0x3e51b2 = _0x31cb3f[_0x13361e];
            _0x3e51b2.status === "FINISH" && (await _0x2da9f4(_0x96c492, _0x3e93f5, _0x375850, _0x3e51b2.id));
          }
        } else {
          await _0x2da9f4(_0x96c492, _0x3e93f5, _0x375850, _0xd41cb6.id);
        }
      }
    }
  }
}
const _0x506f13 = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x294567(_0x55be3a) {
  const _0x4c52c5 = Buffer.from(_0x55be3a, "utf8"),
    _0x18693d = _0x321504.publicEncrypt(_0x506f13, _0x4c52c5);
  return _0x18693d.toString("base64");
}
function _0x3a8768(_0x4f906a) {
  if (!_0x4f906a) return "-1";
  for (var _0x57d27e = _0x4f906a.split(";"), _0x3c9ac3 = 0; _0x3c9ac3 < _0x57d27e.length; _0x3c9ac3++) {
    var _0x541d96 = _0x57d27e[_0x3c9ac3].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x541d96[0])) return _0x541d96[1];
  }
  return "-1";
}
const _0x34f5ee = async (_0x1c52f2, _0x234ae2, _0xf2bb61 = 5) => {
  if (_0xf2bb61 === 0) return console.log("网络异常，请检查网络状况"), "";
  const _0x382dd1 = _0x3a8768(_0x1c52f2),
    _0x47bdd5 = _0x382dd1.split("_")[0],
    _0x59972c = {
      "carmi": _0x4cace1,
      "content": _0x294567(_0x47bdd5) + _0x234ae2,
      "type": 1
    };
  var _0x5f0adc = {
      "content-type": "application/json"
    },
    _0x58acec = {
      "url": "http://api.94wan.fun/new/sign",
      "method": "POST",
      "headers": _0x5f0adc,
      "body": JSON.stringify(_0x59972c)
    };
  return _0x402926(_0x4553a2 => {
    _0x3719fa(_0x58acec, async (_0x5ca9ba, _0x58ec55, _0x4b3609) => {
      if (!_0x5ca9ba && _0x58ec55.statusCode === 200) {
        const _0x2a6a1a = JSON.parse(_0x4b3609);
        if (_0x2a6a1a.code !== 20000) console.error(_0x2a6a1a.message), process.exit(0);else {
          _0x4553a2(_0x2a6a1a.data.msg);
        }
      } else {
        if (_0x5ca9ba && (_0x5ca9ba.message.indexOf("socket hang up") !== -1 || _0x5ca9ba.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x32ef3e(2);
          _0x4553a2(await _0x34f5ee(_0x1c52f2, _0x234ae2, _0xf2bb61 - 1));
        } else console.log("网络异常，请检查网络状况"), _0x4553a2("");
      }
    });
  });
};
async function _0x3ee362(_0x3f81d8, _0x371145) {
  var _0x3dc740 = {
    "authority": "shopping.ele.me",
    "accept": "application/json",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": _0x3f81d8,
    "x-miniapp-id-taobao": "3000000091262411",
    "x-miniapp-version": "0.0.116",
    "x-mini-appkey": "34416858",
    "x-req-appkey": "34416858",
    "appid": "3000000091262411"
  };
  const _0x36a587 = new Date().getTime(),
    _0xdc89e5 = 34190632,
    _0x2c4f30 = "data=" + encodeURIComponent(JSON.stringify(_0x371145)),
    _0x333ea6 = await _0x34f5ee(_0x3f81d8, "&" + _0x36a587 + "&" + _0xdc89e5 + "&" + JSON.stringify(_0x371145), _0x4cace1),
    _0x5a09d5 = {
      "url": "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0x36a587 + "&sign=" + _0x333ea6 + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
      "method": "POST",
      "headers": _0x3dc740,
      "body": _0x2c4f30
    };
  return _0x402926(_0x297b0d => {
    _0x3719fa(_0x5a09d5, async (_0x12a74b, _0x16617d, _0x4134f7) => {
      if (!_0x12a74b && _0x16617d.statusCode === 200) try {
        const _0x442c43 = JSON.parse(_0x4134f7);
        _0x297b0d(_0x442c43.data.data);
      } catch (_0x1fc3c8) {
        console.log(_0x4134f7);
        _0x297b0d(null);
      } else {
        _0x297b0d(null);
      }
    });
  });
}
async function _0x66cccb(_0x5a7d32, _0x1ec5f4, _0x53c454) {
  var _0x205f01 = {
    "accept": "application/json",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "cookie": _0x5a7d32,
    "User-Agent": "okhttp/3.14.9",
    "Host": "sskz.gzppxia.com",
    "startToken": "150483272097295"
  };
  const _0x5d6dff = {
    "url": "https://sskz.gzppxia.com/" + _0x53c454,
    "method": "POST",
    "headers": _0x205f01,
    "body": JSON.stringify(_0x1ec5f4)
  };
  return _0x402926(_0xc810d8 => {
    _0x3719fa(_0x5d6dff, async (_0x57584f, _0x31b546, _0x54f4c4) => {
      if (!_0x57584f && _0x31b546.statusCode === 200) try {
        const _0x129017 = JSON.parse(_0x54f4c4);
        _0xc810d8(_0x129017);
      } catch (_0x5d9ef1) {
        console.log(_0x54f4c4);
        _0xc810d8(null);
      } else _0xc810d8(null);
    });
  });
}
async function _0x4f62e8(_0x1a542d) {
  const _0x77bc01 = new Date().getTime(),
    _0x3e007f = {
      "body": "{}",
      "headers": "{}",
      "instance": "INNER",
      "method": "GET",
      "options": "{\"cloudAppId\":\"47729\",\"domain\":\"https://sskz.gzppxia.com/tt_action/\",\"timeout\":3000,\"env\":\"online\",\"options\":{\"path\":\"pages/index/index\"}}",
      "path": "elmeisv.php?method=getOpenid",
      "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x77bc01 + "\",\"mc-env\":\"online\"}",
      "queryString": "{}",
      "sdkVersion": "1.5.5"
    },
    _0x4e23fb = await _0x3ee362(_0x1a542d, _0x3e007f);
  if (_0x4e23fb) return JSON.parse(_0x4e23fb).openid;
}
async function _0x2f5ac0(_0x52b327, _0x8222c3) {
  const _0x47610f = new Date().getTime(),
    _0x20503 = {
      "handler": "login",
      "auth_code": _0x8222c3,
      "attach": null,
      "platform_id": "taoteGame2",
      "channel_id": 1002,
      "cver": "1.0.1",
      "wx_data": {
        "nickName": "曾天曼",
        "gender": 2,
        "avatarUrl": "elm_head_2_jpg",
        "sk": "",
        "platform_data": {
          "h5openid": _0x8222c3
        }
      },
      "imei": "",
      "userId": "",
      "token": "",
      "ver": 1,
      "send_time": _0x47610f
    },
    _0x3bc544 = {},
    _0x5ac1b4 = await _0x66cccb(_0x52b327, _0x20503, "tt_action/20220926/action/login.php?XDEBUG_SESSION_START=PHPSTORM");
  return _0x5ac1b4 && (_0x3bc544.token = _0x5ac1b4.token, _0x3bc544.openId = _0x8222c3, _0x3bc544.userId = _0x5ac1b4.userId), _0x3bc544;
}
async function _0x56467d(_0x14b45b, _0x226fa2) {
  const _0x10ba32 = new Date().getTime(),
    _0x32f8e0 = {
      "handler": "sendElmeCoin",
      "elmeopenid": _0x226fa2.openId,
      "num": 10,
      "userId": _0x226fa2.userId,
      "token": _0x226fa2.token,
      "ver": 1,
      "send_time": _0x10ba32
    };
  return await _0x66cccb(_0x14b45b, _0x32f8e0, "tt_action/20220926/action/sendElmeCoin.php?XDEBUG_SESSION_START=PHPSTORM");
}
async function _0x3d5e03() {
  const _0x187d02 = function () {
    let _0x59f8c7 = true;
    return function (_0x150983, _0x4e6b8e) {
      const _0x265cfe = _0x59f8c7 ? function () {
        if (_0x4e6b8e) {
          const _0x39bb32 = _0x4e6b8e.apply(_0x150983, arguments);
          return _0x4e6b8e = null, _0x39bb32;
        }
      } : function () {};
      return _0x59f8c7 = false, _0x265cfe;
    };
  }();
  (function () {
    _0x187d02(this, function () {
      const _0x28ea02 = new RegExp("function *\\( *\\)"),
        _0x11904c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
        _0x5e026e = _0x2ef160("init");
      !_0x28ea02.test(_0x5e026e + "chain") || !_0x11904c.test(_0x5e026e + "input") ? _0x5e026e("0") : _0x2ef160();
    })();
  })();
  await _0x19c84c(_0x4cace1, 1);
  const _0x3f8d66 = _0x51055d("elmck");
  for (let _0x1ed502 = 0; _0x1ed502 < _0x3f8d66.length; _0x1ed502++) {
    let _0x26f844 = _0x3f8d66[_0x1ed502];
    _0x26f844 = await _0x3470ae(_0x26f844, _0x1ed502, _0x4cace1, 1);
    if (!_0x26f844) continue;
    let _0x362ae8 = await _0xa8ea8(_0x26f844, _0x17063c);
    if (_0x362ae8 && _0x362ae8[0]) {
      console.log("第", _0x1ed502 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    if (!_0x362ae8 || !_0x362ae8.userName) continue;
    const _0x18ab6e = _0x362ae8.localId;
    let _0x547f59 = _0x362ae8.encryptMobile;
    console.log("\n****** #" + (_0x1ed502 + 1), _0x547f59, "*********");
    console.log("账号的 id 为", _0x18ab6e);
    const _0x49517b = await _0x4f62e8(_0x26f844),
      _0x13aefb = await _0x2f5ac0(_0x26f844, _0x49517b);
    let _0x16d6f = await _0x56467d(_0x26f844, _0x13aefb);
    _0x16d6f.msg ? console.log(_0x16d6f.msg) : console.log("领取金币成功，当前金币：" + _0x16d6f.value);
    while (!_0x16d6f.msg) {
      await _0x32ef3e(1);
      _0x16d6f = await _0x56467d(_0x26f844, _0x13aefb);
      _0x16d6f.msg ? console.log(_0x16d6f.msg) : console.log("领取金币成功，当前金币：" + _0x16d6f.value);
    }
    console.log("防止挤爆了，延时 1 秒");
    await _0x32ef3e(1);
  }
  process.exit(0);
}
_0x3d5e03();
function _0x2ef160(_0x1d627b) {
  function _0x48164c(_0x1f4aa5) {
    if (typeof _0x1f4aa5 === "string") return function (_0x111593) {}.constructor("while (true) {}").apply("counter");else {
      if (("" + _0x1f4aa5 / _0x1f4aa5).length !== 1 || _0x1f4aa5 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x48164c(++_0x1f4aa5);
  }
  try {
    if (_0x1d627b) return _0x48164c;else _0x48164c(0);
  } catch (_0x28f08c) {}
}