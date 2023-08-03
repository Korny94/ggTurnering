/* HÅKON */

const bGHåkon = document.querySelector("#bGHåkon");
const håkonScore = document.querySelector("#håkonScore");
const closeHåkon = document.querySelector("#closeHåkon");
const round1Håkon = document.querySelector("#round1Håkon");
const round2Håkon = document.querySelector("#round2Håkon");
const round3Håkon = document.querySelector("#round3Håkon");
const round4Håkon = document.querySelector("#round4Håkon");
const button1Håkon = document.querySelector("#button1Håkon");
const button2Håkon = document.querySelector("#button2Håkon");
const button3Håkon = document.querySelector("#button3Håkon");
const button4Håkon = document.querySelector("#button4Håkon");

håkonScore.onclick = function () {
  round1Karl.style.display = "none";
  round2Karl.style.display = "none";
  round3Karl.style.display = "none";
  round4Karl.style.display = "none";
  round1Tim.style.display = "none";
  round2Tim.style.display = "none";
  round3Tim.style.display = "none";
  round4Tim.style.display = "none";
  round1Magne.style.display = "none";
  round2Magne.style.display = "none";
  round3Magne.style.display = "none";
  round4Magne.style.display = "none";
  round1Simen.style.display = "none";
  round2Simen.style.display = "none";
  round3Simen.style.display = "none";
  round4Simen.style.display = "none";
  round1Jone.style.display = "none";
  round2Jone.style.display = "none";
  round3Jone.style.display = "none";
  round4Jone.style.display = "none";
  round1Adrian.style.display = "none";
  round2Adrian.style.display = "none";
  round3Adrian.style.display = "none";
  round4Adrian.style.display = "none";
  round1Marius.style.display = "none";
  round2Marius.style.display = "none";
  round3Marius.style.display = "none";
  round4Marius.style.display = "none";
  round1Håkon.style.display = "none";
  round2Håkon.style.display = "none";
  round3Håkon.style.display = "none";
  round4Håkon.style.display = "none";
  bGHåkon.style.display = "block";
};

closeHåkon.onclick = function () {
  bGHåkon.style.display = "none";
};

function showRound(roundElement) {
  roundElement.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button1Håkon.addEventListener("click", function () {
  bGHåkon.style.display = "none";
  const round1Håkon = document.getElementById("round1Håkon");
  showRound(round1Håkon);
});

button2Håkon.addEventListener("click", function () {
  bGHåkon.style.display = "none";

  const round2Håkon = document.getElementById("round2Håkon");
  showRound(round2Håkon);
});

button3Håkon.addEventListener("click", function () {
  bGHåkon.style.display = "none";

  const round3Håkon = document.getElementById("round3Håkon");
  showRound(round3Håkon);
});

button4Håkon.addEventListener("click", function () {
  bGHåkon.style.display = "none";

  const round4Håkon = document.getElementById("round4Håkon");
  showRound(round4Håkon);
});

// /* Marius */

const bGMarius = document.querySelector("#bGMarius");
const mariusScore = document.querySelector("#mariusScore");
const closeMarius = document.querySelector("#closeMarius");
const round1Marius = document.querySelector("#round1Marius");
const round2Marius = document.querySelector("#round2Marius");
const round3Marius = document.querySelector("#round3Marius");
const round4Marius = document.querySelector("#round4Marius");
const button1Marius = document.querySelector("#button1Marius");
const button2Marius = document.querySelector("#button2Marius");
const button3Marius = document.querySelector("#button3Marius");
const button4Marius = document.querySelector("#button4Marius");

mariusScore.onclick = function () {
  bGMarius.style.display = "block";
  round1Karl.style.display = "none";
  round2Karl.style.display = "none";
  round3Karl.style.display = "none";
  round4Karl.style.display = "none";
  round1Tim.style.display = "none";
  round2Tim.style.display = "none";
  round3Tim.style.display = "none";
  round4Tim.style.display = "none";
  round1Magne.style.display = "none";
  round2Magne.style.display = "none";
  round3Magne.style.display = "none";
  round4Magne.style.display = "none";
  round1Simen.style.display = "none";
  round2Simen.style.display = "none";
  round3Simen.style.display = "none";
  round4Simen.style.display = "none";
  round1Jone.style.display = "none";
  round2Jone.style.display = "none";
  round3Jone.style.display = "none";
  round4Jone.style.display = "none";
  round1Adrian.style.display = "none";
  round2Adrian.style.display = "none";
  round3Adrian.style.display = "none";
  round4Adrian.style.display = "none";
  round1Marius.style.display = "none";
  round2Marius.style.display = "none";
  round3Marius.style.display = "none";
  round4Marius.style.display = "none";
  round1Håkon.style.display = "none";
  round2Håkon.style.display = "none";
  round3Håkon.style.display = "none";
  round4Håkon.style.display = "none";
};

closeMarius.onclick = function () {
  bGMarius.style.display = "none";
};

function showRound(roundElement) {
  roundElement.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button1Marius.addEventListener("click", function () {
  bGMarius.style.display = "none";

  const round1Marius = document.getElementById("round1Marius");
  showRound(round1Marius);
});

button2Marius.addEventListener("click", function () {
  bGMarius.style.display = "none";

  const round2Marius = document.getElementById("round2Marius");
  showRound(round2Marius);
});

button3Marius.addEventListener("click", function () {
  bGMarius.style.display = "none";

  const round3Marius = document.getElementById("round3Marius");
  showRound(round3Marius);
});

button4Marius.addEventListener("click", function () {
  bGMarius.style.display = "none";

  const round4Marius = document.getElementById("round4Marius");
  showRound(round4Marius);
});

// /* Adrian */

const bGAdrian = document.querySelector("#bGAdrian");
const adrianScore = document.querySelector("#adrianScore");
const closeAdrian = document.querySelector("#closeAdrian");
const round1Adrian = document.querySelector("#round1Adrian");
const round2Adrian = document.querySelector("#round2Adrian");
const round3Adrian = document.querySelector("#round3Adrian");
const round4Adrian = document.querySelector("#round4Adrian");
const button1Adrian = document.querySelector("#button1Adrian");
const button2Adrian = document.querySelector("#button2Adrian");
const button3Adrian = document.querySelector("#button3Adrian");
const button4Adrian = document.querySelector("#button4Adrian");

adrianScore.onclick = function () {
  bGAdrian.style.display = "block";
  round1Karl.style.display = "none";
  round2Karl.style.display = "none";
  round3Karl.style.display = "none";
  round4Karl.style.display = "none";
  round1Tim.style.display = "none";
  round2Tim.style.display = "none";
  round3Tim.style.display = "none";
  round4Tim.style.display = "none";
  round1Magne.style.display = "none";
  round2Magne.style.display = "none";
  round3Magne.style.display = "none";
  round4Magne.style.display = "none";
  round1Simen.style.display = "none";
  round2Simen.style.display = "none";
  round3Simen.style.display = "none";
  round4Simen.style.display = "none";
  round1Jone.style.display = "none";
  round2Jone.style.display = "none";
  round3Jone.style.display = "none";
  round4Jone.style.display = "none";
  round1Adrian.style.display = "none";
  round2Adrian.style.display = "none";
  round3Adrian.style.display = "none";
  round4Adrian.style.display = "none";
  round1Marius.style.display = "none";
  round2Marius.style.display = "none";
  round3Marius.style.display = "none";
  round4Marius.style.display = "none";
  round1Håkon.style.display = "none";
  round2Håkon.style.display = "none";
  round3Håkon.style.display = "none";
  round4Håkon.style.display = "none";
};

closeAdrian.onclick = function () {
  bGAdrian.style.display = "none";
};

function showRound(roundElement) {
  roundElement.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button1Adrian.addEventListener("click", function () {
  bGAdrian.style.display = "none";

  const round1Adrian = document.getElementById("round1Adrian");
  showRound(round1Adrian);
});

button2Adrian.addEventListener("click", function () {
  bGAdrian.style.display = "none";

  const round2Adrian = document.getElementById("round2Adrian");
  showRound(round2Adrian);
});

button3Adrian.addEventListener("click", function () {
  bGAdrian.style.display = "none";

  const round3Adrian = document.getElementById("round3Adrian");
  showRound(round3Adrian);
});

button4Adrian.addEventListener("click", function () {
  bGAdrian.style.display = "none";

  const round4Adrian = document.getElementById("round4Adrian");
  showRound(round4Adrian);
});

/* JONE */

const bGJone = document.querySelector("#bGJone");
const joneScore = document.querySelector("#joneScore");
const closeJone = document.querySelector("#closeJone");
const round1Jone = document.querySelector("#round1Jone");
const round2Jone = document.querySelector("#round2Jone");
const round3Jone = document.querySelector("#round3Jone");
const round4Jone = document.querySelector("#round4Jone");
const button1Jone = document.querySelector("#button1Jone");
const button2Jone = document.querySelector("#button2Jone");
const button3Jone = document.querySelector("#button3Jone");
const button4Jone = document.querySelector("#button4Jone");

joneScore.onclick = function () {
  bGJone.style.display = "block";
  round1Karl.style.display = "none";
  round2Karl.style.display = "none";
  round3Karl.style.display = "none";
  round4Karl.style.display = "none";
  round1Tim.style.display = "none";
  round2Tim.style.display = "none";
  round3Tim.style.display = "none";
  round4Tim.style.display = "none";
  round1Magne.style.display = "none";
  round2Magne.style.display = "none";
  round3Magne.style.display = "none";
  round4Magne.style.display = "none";
  round1Simen.style.display = "none";
  round2Simen.style.display = "none";
  round3Simen.style.display = "none";
  round4Simen.style.display = "none";
  round1Jone.style.display = "none";
  round2Jone.style.display = "none";
  round3Jone.style.display = "none";
  round4Jone.style.display = "none";
  round1Adrian.style.display = "none";
  round2Adrian.style.display = "none";
  round3Adrian.style.display = "none";
  round4Adrian.style.display = "none";
  round1Marius.style.display = "none";
  round2Marius.style.display = "none";
  round3Marius.style.display = "none";
  round4Marius.style.display = "none";
  round1Håkon.style.display = "none";
  round2Håkon.style.display = "none";
  round3Håkon.style.display = "none";
  round4Håkon.style.display = "none";
};

closeJone.onclick = function () {
  bGJone.style.display = "none";
};

function showRound(roundElement) {
  roundElement.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button1Jone.addEventListener("click", function () {
  bGJone.style.display = "none";

  const round1Jone = document.getElementById("round1Jone");
  showRound(round1Jone);
});

button2Jone.addEventListener("click", function () {
  bGJone.style.display = "none";

  const round2Jone = document.getElementById("round2Jone");
  showRound(round2Jone);
});

button3Jone.addEventListener("click", function () {
  bGJone.style.display = "none";

  const round3Jone = document.getElementById("round3Jone");
  showRound(round3Jone);
});

button4Jone.addEventListener("click", function () {
  bGJone.style.display = "none";

  const round4Jone = document.getElementById("round4Jone");
  showRound(round4Jone);
});

/* SIMEN */

const bGSimen = document.querySelector("#bGSimen");
const simenScore = document.querySelector("#simenScore");
const closeSimen = document.querySelector("#closeSimen");
const round1Simen = document.querySelector("#round1Simen");
const round2Simen = document.querySelector("#round2Simen");
const round3Simen = document.querySelector("#round3Simen");
const round4Simen = document.querySelector("#round4Simen");
const button1Simen = document.querySelector("#button1Simen");
const button2Simen = document.querySelector("#button2Simen");
const button3Simen = document.querySelector("#button3Simen");
const button4Simen = document.querySelector("#button4Simen");

simenScore.onclick = function () {
  bGSimen.style.display = "block";
  round1Karl.style.display = "none";
  round2Karl.style.display = "none";
  round3Karl.style.display = "none";
  round4Karl.style.display = "none";
  round1Tim.style.display = "none";
  round2Tim.style.display = "none";
  round3Tim.style.display = "none";
  round4Tim.style.display = "none";
  round1Magne.style.display = "none";
  round2Magne.style.display = "none";
  round3Magne.style.display = "none";
  round4Magne.style.display = "none";
  round1Simen.style.display = "none";
  round2Simen.style.display = "none";
  round3Simen.style.display = "none";
  round4Simen.style.display = "none";
  round1Jone.style.display = "none";
  round2Jone.style.display = "none";
  round3Jone.style.display = "none";
  round4Jone.style.display = "none";
  round1Adrian.style.display = "none";
  round2Adrian.style.display = "none";
  round3Adrian.style.display = "none";
  round4Adrian.style.display = "none";
  round1Marius.style.display = "none";
  round2Marius.style.display = "none";
  round3Marius.style.display = "none";
  round4Marius.style.display = "none";
  round1Håkon.style.display = "none";
  round2Håkon.style.display = "none";
  round3Håkon.style.display = "none";
  round4Håkon.style.display = "none";
};

closeSimen.onclick = function () {
  bGSimen.style.display = "none";
};

function showRound(roundElement) {
  roundElement.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button1Simen.addEventListener("click", function () {
  bGSimen.style.display = "none";

  const round1Simen = document.getElementById("round1Simen");
  showRound(round1Simen);
});

button2Simen.addEventListener("click", function () {
  bGSimen.style.display = "none";

  const round2Simen = document.getElementById("round2Simen");
  showRound(round2Simen);
});

button3Simen.addEventListener("click", function () {
  bGSimen.style.display = "none";

  const round3Simen = document.getElementById("round3Simen");
  showRound(round3Simen);
});

button4Simen.addEventListener("click", function () {
  bGSimen.style.display = "none";

  const round4Simen = document.getElementById("round4Simen");
  showRound(round4Simen);
});

/* MAGNE */

const bGMagne = document.querySelector("#bGMagne");
const magneScore = document.querySelector("#magneScore");
const closeMagne = document.querySelector("#closeMagne");
const round1Magne = document.querySelector("#round1Magne");
const round2Magne = document.querySelector("#round2Magne");
const round3Magne = document.querySelector("#round3Magne");
const round4Magne = document.querySelector("#round4Magne");
const button1Magne = document.querySelector("#button1Magne");
const button2Magne = document.querySelector("#button2Magne");
const button3Magne = document.querySelector("#button3Magne");
const button4Magne = document.querySelector("#button4Magne");

magneScore.onclick = function () {
  bGMagne.style.display = "block";
  round1Karl.style.display = "none";
  round2Karl.style.display = "none";
  round3Karl.style.display = "none";
  round4Karl.style.display = "none";
  round1Tim.style.display = "none";
  round2Tim.style.display = "none";
  round3Tim.style.display = "none";
  round4Tim.style.display = "none";
  round1Magne.style.display = "none";
  round2Magne.style.display = "none";
  round3Magne.style.display = "none";
  round4Magne.style.display = "none";
  round1Simen.style.display = "none";
  round2Simen.style.display = "none";
  round3Simen.style.display = "none";
  round4Simen.style.display = "none";
  round1Jone.style.display = "none";
  round2Jone.style.display = "none";
  round3Jone.style.display = "none";
  round4Jone.style.display = "none";
  round1Adrian.style.display = "none";
  round2Adrian.style.display = "none";
  round3Adrian.style.display = "none";
  round4Adrian.style.display = "none";
  round1Marius.style.display = "none";
  round2Marius.style.display = "none";
  round3Marius.style.display = "none";
  round4Marius.style.display = "none";
  round1Håkon.style.display = "none";
  round2Håkon.style.display = "none";
  round3Håkon.style.display = "none";
  round4Håkon.style.display = "none";
};

closeMagne.onclick = function () {
  bGMagne.style.display = "none";
};

function showRound(roundElement) {
  roundElement.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button1Magne.addEventListener("click", function () {
  bGMagne.style.display = "none";

  const round1Magne = document.getElementById("round1Magne");
  showRound(round1Magne);
});

button2Magne.addEventListener("click", function () {
  bGMagne.style.display = "none";

  const round2Magne = document.getElementById("round2Magne");
  showRound(round2Magne);
});

button3Magne.addEventListener("click", function () {
  bGMagne.style.display = "none";

  const round3Magne = document.getElementById("round3Magne");
  showRound(round3Magne);
});

button4Magne.addEventListener("click", function () {
  bGMagne.style.display = "none";

  const round4Magne = document.getElementById("round4Magne");
  showRound(round4Magne);
});

/* TIM */

const bGTim = document.querySelector("#bGTim");
const timScore = document.querySelector("#timScore");
const closeTim = document.querySelector("#closeTim");
const round1Tim = document.querySelector("#round1Tim");
const round2Tim = document.querySelector("#round2Tim");
const round3Tim = document.querySelector("#round3Tim");
const round4Tim = document.querySelector("#round4Tim");
const button1Tim = document.querySelector("#button1Tim");
const button2Tim = document.querySelector("#button2Tim");
const button3Tim = document.querySelector("#button3Tim");
const button4Tim = document.querySelector("#button4Tim");

timScore.onclick = function () {
  bGTim.style.display = "block";
  round1Karl.style.display = "none";
  round2Karl.style.display = "none";
  round3Karl.style.display = "none";
  round4Karl.style.display = "none";
  round1Tim.style.display = "none";
  round2Tim.style.display = "none";
  round3Tim.style.display = "none";
  round4Tim.style.display = "none";
  round1Magne.style.display = "none";
  round2Magne.style.display = "none";
  round3Magne.style.display = "none";
  round4Magne.style.display = "none";
  round1Simen.style.display = "none";
  round2Simen.style.display = "none";
  round3Simen.style.display = "none";
  round4Simen.style.display = "none";
  round1Jone.style.display = "none";
  round2Jone.style.display = "none";
  round3Jone.style.display = "none";
  round4Jone.style.display = "none";
  round1Adrian.style.display = "none";
  round2Adrian.style.display = "none";
  round3Adrian.style.display = "none";
  round4Adrian.style.display = "none";
  round1Marius.style.display = "none";
  round2Marius.style.display = "none";
  round3Marius.style.display = "none";
  round4Marius.style.display = "none";
  round1Håkon.style.display = "none";
  round2Håkon.style.display = "none";
  round3Håkon.style.display = "none";
  round4Håkon.style.display = "none";
};

closeTim.onclick = function () {
  bGTim.style.display = "none";
};

function showRound(roundElement) {
  roundElement.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button1Tim.addEventListener("click", function () {
  bGTim.style.display = "none";

  const round1Tim = document.getElementById("round1Tim");
  showRound(round1Tim);
});

button2Tim.addEventListener("click", function () {
  bGTim.style.display = "none";

  const round2Tim = document.getElementById("round2Tim");
  showRound(round2Tim);
});

button3Tim.addEventListener("click", function () {
  bGTim.style.display = "none";

  const round3Tim = document.getElementById("round3Tim");
  showRound(round3Tim);
});

button4Tim.addEventListener("click", function () {
  bGTim.style.display = "none";

  const round4Tim = document.getElementById("round4Tim");
  showRound(round4Tim);
});

/* KARL */

const bGKarl = document.querySelector("#bGKarl");
const karlScore = document.querySelector("#karlScore");
const closeKarl = document.querySelector("#closeKarl");
const round1Karl = document.querySelector("#round1Karl");
const round2Karl = document.querySelector("#round2Karl");
const round3Karl = document.querySelector("#round3Karl");
const round4Karl = document.querySelector("#round4Karl");
const button1Karl = document.querySelector("#button1Karl");
const button2Karl = document.querySelector("#button2Karl");
const button3Karl = document.querySelector("#button3Karl");
const button4Karl = document.querySelector("#button4Karl");

karlScore.onclick = function () {
  bGKarl.style.display = "block";
  round1Karl.style.display = "none";
  round2Karl.style.display = "none";
  round3Karl.style.display = "none";
  round4Karl.style.display = "none";
  round1Tim.style.display = "none";
  round2Tim.style.display = "none";
  round3Tim.style.display = "none";
  round4Tim.style.display = "none";
  round1Magne.style.display = "none";
  round2Magne.style.display = "none";
  round3Magne.style.display = "none";
  round4Magne.style.display = "none";
  round1Simen.style.display = "none";
  round2Simen.style.display = "none";
  round3Simen.style.display = "none";
  round4Simen.style.display = "none";
  round1Jone.style.display = "none";
  round2Jone.style.display = "none";
  round3Jone.style.display = "none";
  round4Jone.style.display = "none";
  round1Adrian.style.display = "none";
  round2Adrian.style.display = "none";
  round3Adrian.style.display = "none";
  round4Adrian.style.display = "none";
  round1Marius.style.display = "none";
  round2Marius.style.display = "none";
  round3Marius.style.display = "none";
  round4Marius.style.display = "none";
  round1Håkon.style.display = "none";
  round2Håkon.style.display = "none";
  round3Håkon.style.display = "none";
  round4Håkon.style.display = "none";
};

closeKarl.onclick = function () {
  bGKarl.style.display = "none";
};

function showRound(roundElement) {
  roundElement.style.display = "flex";
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

button1Karl.addEventListener("click", function () {
  bGKarl.style.display = "none";

  const round1Karl = document.getElementById("round1Karl");
  showRound(round1Karl);
});

button2Karl.addEventListener("click", function () {
  bGKarl.style.display = "none";

  const round2Karl = document.getElementById("round2Karl");
  showRound(round2Karl);
});

button3Karl.addEventListener("click", function () {
  bGKarl.style.display = "none";

  const round3Karl = document.getElementById("round3Karl");
  showRound(round3Karl);
});

button4Karl.addEventListener("click", function () {
  bGKarl.style.display = "none";

  const round4Karl = document.getElementById("round4Karl");
  showRound(round4Karl);
});
