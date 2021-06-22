// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addFunnyQuote() {
  const quotes =
      ['Friends: Joey-"How you Doin?" ', 'The Office: Michael-"I am Beyonce always" ', 'Clueless: Cher-"Ugh, as if" '];

  // Pick a random greeting.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log("Selected quote: ", quote)

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}

async function showTime() {
  const responseFromServer = await fetch('/time');
  const textFromResponse = await responseFromServer.text();

  const timeContainer = document.getElementById('time-container');
  timeContainer.innerText = textFromResponse;
}

async function showFact() {
 const responseFromServer = await fetch('/funFact');
  const textFromResponse = await responseFromServer.text();

  const factContainer = document.getElementById('time-container');
  factContainer.innerText = textFromResponse;

}

async function getMessages() {
  const responseFromServer = await fetch('/message-list');
  // The json() function returns an object that contains fields that we can
  // reference to create HTML.
  const message = await responseFromServer.json();

  const messageListElement = document.getElementById('message-list-container');
  messageListElement.innerHTML = '';

  messageListElement.appendChild(
      createListElement('Message One: ' + message.messageOne));
  messageListElement.appendChild(
      createListElement('Message Two: ' + message.messageTwo));
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

