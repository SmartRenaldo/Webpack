const worker = new Worker(new URL('./work.js', import.meta.url))

worker.postMessage({
  question: 'hi, what is the luck number today?'
})

worker.onmessage = (message) => {
  console.log(message.data.answer);
}
