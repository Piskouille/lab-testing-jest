function helloIronhack(ironhacker) {
  return 'Hello ' + ironhacker + ' !';
}

// The following is required to make automated tests run. Please ignore it.
if (typeof module !== 'undefined') module.exports = { helloIronhack };
