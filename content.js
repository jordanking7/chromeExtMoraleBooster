// alert('TEST ALERT');

const showAffirmation = () => {
  const modal = document.createElement('dialog');
  modal.setAttribute(
    //  JS dom manipulation here
    'style', `
    background-color: #d3d3d3;
    margin: auto;
    padding: 20px;
    border: 5px solid #888;
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;`,
  );
  modal.innerHTML = `<iframe id="popup-content"; style="background-color:#fefefe; flex: 1;"></iframe>
  <div style="position:absolute; top:0px; left:5px;">
  <button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">X</button>
  </div>`;
  document.body.appendChild(modal);
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  const iframe = document.getElementById('popup-content');
  iframe.src = chrome.runtime.getURL('index.html');
  iframe.frameBorder = 0;
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
};

showAffirmation();
