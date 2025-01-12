//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
  const text = document.getElementById('text').value;
  const delay = document.getElementById('delay').value;

  await new Promise(resolve => setTimeout(resolve, delay));

  document.getElementById('output').innerHTML = text;
});