/* eslint-disable import/prefer-default-export */
module.exports = {
  process: () => {
    const proxy = 'new Proxy({}, { get: (_, property) => (property === "get" ? prop => prop : property) })';

    return `module.exports = { __esModule: true, default: ${proxy} };`;
  },
};
