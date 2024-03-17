const _0x47d959 = _0x8fa8;
(function (_0x5c2b19, _0x5266fe) {
  const _0x2948a4 = _0x8fa8,
    _0x29e617 = _0x5c2b19();
  while (!![]) {
    try {
      const _0x1cf4ed =
        -parseInt(_0x2948a4(0x19f)) / 0x1 +
        -parseInt(_0x2948a4(0x17f)) / 0x2 +
        parseInt(_0x2948a4(0x180)) / 0x3 +
        (parseInt(_0x2948a4(0x1a4)) / 0x4) *
          (-parseInt(_0x2948a4(0x189)) / 0x5) +
        -parseInt(_0x2948a4(0x16b)) / 0x6 +
        parseInt(_0x2948a4(0x161)) / 0x7 +
        parseInt(_0x2948a4(0x1a2)) / 0x8;
      if (_0x1cf4ed === _0x5266fe) break;
      else _0x29e617["push"](_0x29e617["shift"]());
    } catch (_0x5e191a) {
      _0x29e617["push"](_0x29e617["shift"]());
    }
  }
})(_0x2ca7, 0xbb627);
const gradeValues = {
    "A+": 0x4,
    A: 3.75,
    "A-": 3.5,
    "B+": 3.25,
    B: 0x3,
    "B-": 2.75,
    "C+": 2.5,
    C: 2.25,
    "C-": 0x2,
    "D+": 1.75,
    D: 1.5,
    F: 0x0,
  },
  grades_AR2ENG = {
    "أ+": "A+",
    أ: "A",
    "أ-": "A-",
    "ب+": "B+",
    ب: "B",
    "ب-": "B-",
    "ج+": "C+",
    ج: "C",
    "ج-": "C-",
    "د+": "D+",
    د: "D",
    "د-": "F",
    ه: "F",
    هـ: "F",
  };
function add_entry(
  _0x185482 = "",
  _0x4d3a58 = "",
  _0x5d14e2 = "",
  _0x381257 = ""
) {
  const _0x5b753d = _0x8fa8,
    _0x451e29 = $(_0x5b753d(0x19e), { class: _0x5b753d(0x1a8) })
      [_0x5b753d(0x169)]($(".mark-entries-body"))
      [_0x5b753d(0x188)]()
      [_0x5b753d(0x164)](0xc8);
  $(_0x5b753d(0x177), {
    type: _0x5b753d(0x163),
    class: _0x5b753d(0x195),
    placeholder: "اسم\x20المادة",
    value: _0x185482,
  })[_0x5b753d(0x169)](_0x451e29),
    $(_0x5b753d(0x177), {
      type: "number",
      class: _0x5b753d(0x171),
      min: "0",
      max: "10",
      placeholder: "الساعات",
      value: _0x4d3a58,
    })
      ["appendTo"](_0x451e29)
      ["on"](_0x5b753d(0x17c), function () {
        const _0x352391 = _0x5b753d;
        this[_0x352391(0x18c)] &&
          (this[_0x352391(0x18c)] = Math[_0x352391(0x19a)](
            0x9,
            Math[_0x352391(0x162)](0x0, this[_0x352391(0x18c)])
          )),
          calc_gpa();
      });
  const _0x489f14 = [
      "A+",
      "A",
      "A-",
      "B+",
      "B",
      "B-",
      "C+",
      "C",
      "C-",
      "D+",
      "D",
      "F",
    ],
    _0x56b0a2 = $(_0x5b753d(0x1a5), {
      class: "grade",
      required: _0x5b753d(0x167),
    })
      [_0x5b753d(0x169)](_0x451e29)
      ["on"](_0x5b753d(0x17c), calc_gpa);
  $(_0x5b753d(0x1a1), {
    value: "",
    selected: !![],
    disabled: !![],
    hidden: !![],
  })
    ["text"](_0x5b753d(0x18b))
    [_0x5b753d(0x169)](_0x56b0a2),
    _0x489f14[_0x5b753d(0x17b)]((_0xe43cf5) => {
      const _0x45cd9c = _0x5b753d;
      $(_0x45cd9c(0x1a1), { value: _0xe43cf5 })
        [_0x45cd9c(0x163)](_0xe43cf5)
        [_0x45cd9c(0x169)](_0x56b0a2);
    }),
    _0x56b0a2[_0x5b753d(0x178)](_0x5d14e2);
  let _0xed0943 = !(
    $prev_gpa[_0x5b753d(0x178)]() && $prev_hours[_0x5b753d(0x178)]()
  );
  const _0x4c0c88 = $(_0x5b753d(0x1a5), {
    class: "old-grade",
    required: _0x5b753d(0x167),
  })
    [_0x5b753d(0x169)](_0x451e29)
    ["on"]("change", calc_gpa);
  $(_0x5b753d(0x1a1), {
    value: "",
    selected: !![],
    disabled: !![],
    hidden: !![],
  })
    [_0x5b753d(0x163)]("الرمز\x20السابق")
    [_0x5b753d(0x169)](_0x4c0c88);
  for (
    let _0x9e1fdc = 0x6;
    _0x9e1fdc < _0x489f14[_0x5b753d(0x183)];
    _0x9e1fdc++
  ) {
    const _0x156bf5 = _0x489f14[_0x9e1fdc];
    $(_0x5b753d(0x1a1), { value: _0x156bf5 })
      ["text"](_0x156bf5)
      [_0x5b753d(0x169)](_0x4c0c88);
  }
  $(_0x5b753d(0x181), { class: _0x5b753d(0x18d) })
    [_0x5b753d(0x163)]("×")
    ["appendTo"](_0x451e29)
    ["on"](_0x5b753d(0x160), () => {
      const _0x43565e = _0x5b753d;
      _0x451e29[_0x43565e(0x182)](0xc8, () => {
        _0x451e29["remove"](), calc_gpa();
      });
    }),
    _0x4c0c88[_0x5b753d(0x178)](_0x381257);
}
function removeAllEntries() {
  const _0xe7f6cf = _0x8fa8;
  $(_0xe7f6cf(0x197))["slideUp"](0xc8, function () {
    const _0x486424 = _0xe7f6cf;
    this[_0x486424(0x165)]();
  }),
    calc_gpa();
}
function calc_sem_gpa() {
  const _0x18ea45 = _0x8fa8;
  let _0x4cc919 = 0x0,
    _0x44ea65 = 0x0,
    _0x4cbae1 = 0x0,
    _0x155ed0 = 0x0;
  return (
    $(".mark-entry")[_0x18ea45(0x191)]((_0x406863, _0x118f28) => {
      const _0xf6fe13 = _0x18ea45;
      let _0x5ddda4 = $(_0x118f28)
        [_0xf6fe13(0x174)](_0xf6fe13(0x172))
        [_0xf6fe13(0x178)]();
      if (!_0x5ddda4) return;
      let _0x2f9a89 = parseFloat(_0x5ddda4),
        _0x144b97 = $(_0x118f28)[_0xf6fe13(0x174)](_0xf6fe13(0x19b))["val"]();
      if (!_0x144b97) return;
      let _0x581bcf = gradeValues[_0x144b97],
        _0x28a7d6 =
          gradeValues[
            $(_0x118f28)[_0xf6fe13(0x174)](_0xf6fe13(0x193))[_0xf6fe13(0x178)]()
          ];
      _0x28a7d6 !== undefined &&
        $prev_gpa["val"]() &&
        $prev_hours[_0xf6fe13(0x178)]() &&
        ((_0x4cbae1 += _0x2f9a89),
        (_0x155ed0 +=
          Math[_0xf6fe13(0x19a)](_0x28a7d6, _0x581bcf) * _0x2f9a89)),
        (_0x4cc919 += _0x2f9a89 * _0x581bcf),
        (_0x44ea65 += _0x2f9a89);
    }),
    _0x44ea65 > 0x0
      ? {
          gpa: _0x4cc919 / _0x44ea65,
          hours: _0x44ea65,
          rep_hour_sum: _0x4cbae1,
          rep_grade_sum: _0x155ed0,
        }
      : { gpa: 0x0, hours: 0x0, rep_hour_sum: 0x0, rep_grade_sum: 0x0 }
  );
}
function calc_cum_gpa(_0xe33951) {
  const _0x4cd2a1 = _0x8fa8;
  let _0x332932 = parseFloat($prev_gpa[_0x4cd2a1(0x178)]() || 0x0),
    _0x5427a6 = parseFloat($prev_hours[_0x4cd2a1(0x178)]() || 0x0);
  if (_0xe33951[_0x4cd2a1(0x171)] === 0x0 && _0x5427a6 === 0x0)
    return { gpa: 0x0, hours: 0x0 };
  else {
    let _0x554d47 =
        _0xe33951[_0x4cd2a1(0x171)] + _0x5427a6 - _0xe33951[_0x4cd2a1(0x176)],
      _0x2f8be9 =
        (_0xe33951[_0x4cd2a1(0x186)] * _0xe33951[_0x4cd2a1(0x171)] +
          _0x332932 * _0x5427a6 -
          _0xe33951[_0x4cd2a1(0x1a7)]) /
        _0x554d47;
    return { gpa: _0x2f8be9, hours: _0x554d47 };
  }
}
function calc_gpa() {
  const _0x49e684 = _0x8fa8;
  let _0xdc6283 = calc_sem_gpa(),
    _0xefa210 = calc_cum_gpa(_0xdc6283);
  if (_0xefa210 && _0xdc6283) {
    $(_0x49e684(0x184))["text"](getRating(_0xdc6283)),
      $(_0x49e684(0x16e))[_0x49e684(0x163)](getRating(_0xefa210)),
      $("#sem-gpa-hours")[_0x49e684(0x163)](_0xdc6283[_0x49e684(0x171)]),
      $("#cum-gpa-hours")["text"](_0xefa210[_0x49e684(0x171)]);
    let _0x11b2b8 =
        Math[_0x49e684(0x18e)](
          (_0xdc6283[_0x49e684(0x186)] + Number[_0x49e684(0x17d)]) * 0x64
        ) / 0x64,
      _0x731477 =
        Math[_0x49e684(0x18e)](
          (_0xefa210[_0x49e684(0x186)] + Number[_0x49e684(0x17d)]) * 0x64
        ) / 0x64;
    animate_graph($sem_gpa_prog_container, minmax(_0x11b2b8, 0x0, 0x4)),
      animate_graph($cum_gpa_prog_container, minmax(_0x731477, 0x0, 0x4));
  }
}
function minmax(_0x206ed0, _0x50b8f5, _0x1307e8) {
  const _0x2eee8b = _0x8fa8;
  return Math[_0x2eee8b(0x19a)](
    Math[_0x2eee8b(0x162)](_0x206ed0, _0x50b8f5),
    _0x1307e8
  );
}
function getRating(_0x131ad8) {
  const _0x5ca40f = _0x8fa8;
  if (_0x131ad8[_0x5ca40f(0x171)] <= 0x0) return _0x5ca40f(0x18f);
  if (_0x131ad8[_0x5ca40f(0x186)] >= 3.5) return _0x5ca40f(0x16a);
  else {
    if (_0x131ad8["gpa"] >= 0x3) return _0x5ca40f(0x179);
    else {
      if (_0x131ad8[_0x5ca40f(0x186)] >= 2.5) return _0x5ca40f(0x170);
      else
        return _0x131ad8[_0x5ca40f(0x186)] >= 0x2
          ? _0x5ca40f(0x16d)
          : _0x5ca40f(0x199);
    }
  }
}
function animate_graph(_0x432717, _0x32cdfb) {
  const _0x4e55a3 = _0x8fa8;
  let _0x1cd6c9 =
    _0x432717[_0x4e55a3(0x174)](".gpa-output")[_0x4e55a3(0x163)]();
  _0x432717[_0x4e55a3(0x174)](_0x4e55a3(0x15f))[_0x4e55a3(0x18a)](
    _0x4e55a3(0x194)
  ),
    _0x432717[_0x4e55a3(0x174)](_0x4e55a3(0x15f))[_0x4e55a3(0x18a)](
      _0x4e55a3(0x185)
    );
  if (_0x32cdfb > _0x1cd6c9)
    _0x432717[_0x4e55a3(0x174)](_0x4e55a3(0x15f))[_0x4e55a3(0x196)](
      _0x4e55a3(0x185)
    );
  else
    _0x32cdfb < _0x1cd6c9 &&
      _0x432717[_0x4e55a3(0x174)](_0x4e55a3(0x15f))[_0x4e55a3(0x196)](
        _0x4e55a3(0x194)
      );
  if (_0x32cdfb > 0x3)
    _0x432717[_0x4e55a3(0x174)](_0x4e55a3(0x16f))[_0x4e55a3(0x175)]({
      "border-color": "#30CFB3",
    });
  else
    _0x32cdfb > 0x2
      ? _0x432717[_0x4e55a3(0x174)](_0x4e55a3(0x16f))[_0x4e55a3(0x175)]({
          "border-color": _0x4e55a3(0x1a0),
        })
      : _0x432717[_0x4e55a3(0x174)](_0x4e55a3(0x16f))[_0x4e55a3(0x175)]({
          "border-color": "#EA5959",
        });
  let _0x4f5426 = 0x64,
    _0x4e091b = parseFloat(_0x1cd6c9),
    _0x1e3ed4 = (_0x32cdfb - _0x4e091b) / _0x4f5426,
    _0x8c34fb = setInterval(function () {
      const _0x2c625f = _0x4e55a3;
      if (
        (_0x4e091b > _0x32cdfb && _0x32cdfb < _0x1cd6c9) ||
        (_0x4e091b < _0x32cdfb && _0x32cdfb > _0x1cd6c9)
      ) {
        _0x4e091b += _0x1e3ed4;
        let _0x41fb75 = minmax(
          _0x4e091b[_0x2c625f(0x168)](0x2),
          _0x2c625f(0x192),
          "4.00"
        );
        set_graph_value(_0x432717, _0x41fb75);
      } else clearInterval(_0x8c34fb), (_0x8c34fb = undefined), set_graph_value(_0x432717, _0x32cdfb);
    }, 0x1);
}
function _0x8fa8(_0x5b5ce0, _0x16bec2) {
  const _0x2ca7a3 = _0x2ca7();
  return (
    (_0x8fa8 = function (_0x8fa84d, _0xe2230) {
      _0x8fa84d = _0x8fa84d - 0x15f;
      let _0x2e9caf = _0x2ca7a3[_0x8fa84d];
      return _0x2e9caf;
    }),
    _0x8fa8(_0x5b5ce0, _0x16bec2)
  );
}
function set_graph_value(_0x4c4bb5, _0x19c438) {
  const _0x4e50df = _0x8fa8;
  let _0x3e2f7f = (_0x19c438 / 0x4) * 0x64;
  _0x4c4bb5["find"](_0x4e50df(0x15f))[_0x4e50df(0x163)](_0x19c438);
  if (_0x3e2f7f >= 0x42)
    _0x4c4bb5["find"](_0x4e50df(0x16f))[_0x4e50df(0x175)](
      _0x4e50df(0x17a),
      "polygon(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x200%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x200%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20" +
        (0x64 - ((0x64 - _0x3e2f7f) / 0x22) * 0x64) +
        _0x4e50df(0x190)
    );
  else
    _0x3e2f7f >= 0x21
      ? _0x4c4bb5["find"](_0x4e50df(0x16f))[_0x4e50df(0x175)](
          _0x4e50df(0x17a),
          _0x4e50df(0x187) +
            (0x64 - ((0x42 - _0x3e2f7f) / 0x21) * 0x64) +
            _0x4e50df(0x173)
        )
      : _0x4c4bb5[_0x4e50df(0x174)](_0x4e50df(0x16f))[_0x4e50df(0x175)](
          _0x4e50df(0x17a),
          _0x4e50df(0x16c) +
            ((0x21 - _0x3e2f7f) / 0x21) * 0x64 +
            _0x4e50df(0x19c)
        );
}
function init_DOMListeners() {
  const _0x304410 = _0x8fa8;
  $("#add-entry")["on"]("click", () => {
    add_entry();
  }),
    $(_0x304410(0x198))["on"](_0x304410(0x160), calc_gpa),
    $prev_gpa["on"](_0x304410(0x17c), function () {
      const _0x118156 = _0x304410;
      calc_gpa(),
        this["value"]
          ? ($prev_hours[_0x118156(0x178)]() &&
              $(_0x118156(0x193))["prop"](_0x118156(0x166), ![]),
            (this[_0x118156(0x18c)] = parseFloat(
              minmax(this[_0x118156(0x18c)], 0x0, 0x4)
            )[_0x118156(0x168)](0x2)))
          : $(_0x118156(0x193))[_0x118156(0x1a3)]("disabled", !![]);
    }),
    $prev_hours["on"](_0x304410(0x17c), function () {
      const _0x21b2fd = _0x304410;
      calc_gpa(),
        this["value"]
          ? ($prev_gpa[_0x21b2fd(0x178)]() &&
              $(_0x21b2fd(0x193))["prop"](_0x21b2fd(0x166), ![]),
            (this[_0x21b2fd(0x18c)] = minmax(
              this[_0x21b2fd(0x18c)],
              0x0,
              0x7d0
            )))
          : $(_0x21b2fd(0x193))["prop"]("disabled", !![]);
    }),
    $gpa_output["on"](_0x304410(0x1a6), function () {
      const _0x139686 = _0x304410;
      $(this)["removeClass"]("decrement-animation"),
        $(this)["removeClass"](_0x139686(0x185));
    });
}
const $gpa_output = $(_0x47d959(0x15f)),
  $prev_gpa = $(_0x47d959(0x17e)),
  $prev_hours = $("#prev-hours"),
  $cum_gpa_prog_container = $("#cum-gpa-prog-container"),
  $sem_gpa_prog_container = $(_0x47d959(0x19d));
function init() {
  init_DOMListeners(),
    set_graph_value($sem_gpa_prog_container, 0x0),
    set_graph_value($cum_gpa_prog_container, 0x0);
  const _0x47d30e = 0x4;
  for (let _0x5cc88f = 0x1; _0x5cc88f <= _0x47d30e; _0x5cc88f++) {
    add_entry();
  }
}
function _0x2ca7() {
  const _0x5314ab = [
    "val",
    "جيد\x20جدا",
    "clip-path",
    "forEach",
    "change",
    "EPSILON",
    "#prev-gpa",
    "2183624bjcjXd",
    "507711NwiUGx",
    "<div>",
    "slideUp",
    "length",
    "#sem-rating",
    "increment-animation",
    "gpa",
    "polygon(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x200%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x200%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "hide",
    "119635pqyQnI",
    "removeClass",
    "الرمز",
    "value",
    "del2",
    "round",
    "غير\x20محدد",
    "%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x2050%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20100%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x200%\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)",
    "each",
    "0.00",
    ".old-grade",
    "decrement-animation",
    "course-name",
    "addClass",
    ".mark-entry",
    "#submit",
    "ضعيف",
    "min",
    ".grade",
    "%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x2050%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20100%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x200%\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "#sem-gpa-prog-container",
    "<li>",
    "1527349QDEGvS",
    "#FFC871",
    "<option>",
    "23654192TRtPeT",
    "prop",
    "8cbYNtB",
    "<select>",
    "animationend\x20webkitAnimationEnd\x20oAnimationEnd\x20MSAnimationEnd",
    "rep_grade_sum",
    "mark-entry",
    ".gpa-output",
    "click",
    "4832289iBcLUo",
    "max",
    "text",
    "slideDown",
    "remove",
    "disabled",
    "required",
    "toFixed",
    "appendTo",
    "ممتاز",
    "2290776NTojIv",
    "polygon(\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200\x20",
    "مقبول",
    "#cum-rating",
    ".circle-prog",
    "جيد",
    "hours",
    ".hours",
    "%\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x2050%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20100%,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x200%\x0a\x20\x20\x20\x20\x20\x20\x20\x20)",
    "find",
    "css",
    "rep_hour_sum",
    "<input>",
  ];
  _0x2ca7 = function () {
    return _0x5314ab;
  };
  return _0x2ca7();
}
init();


let delBtn = document.querySelector('.button2');

delBtn.addEventListener('click',()=>{
  let inputs = document.querySelectorAll('input')
  let selects = document.querySelectorAll('select');

  inputs.forEach((e)=>{
    e.value='';
  })
  selects.forEach((e)=>{
    e.value='';
  })
})