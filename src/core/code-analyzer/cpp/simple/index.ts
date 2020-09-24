import { Module } from './simple';

const globalPromise = new Promise((resolve) => {
  Module.onRuntimeInitialized = resolve;
});
globalPromise.then(() => {
  console.log('WSAM Module(Simple C++) loaded');
});

const rate = 0.9;

export default async function (a: string, b: string) {
  await globalPromise;
  const f = Module.cwrap('taskImproved', 'number', ['string', 'string', 'number', 'boolean']);
  return f(a, b, rate, false);
}