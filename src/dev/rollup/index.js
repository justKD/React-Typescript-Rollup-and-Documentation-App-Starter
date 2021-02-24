import { bundle } from './bundle';

const entry = './src/dev/build/index.js';
const output = 'bundle.js';

const buttonWidth = 150;

const bundleControls = document.createElement('div');
bundleControls.id = 'bundle-controls';
bundleControls.style =
  'display: flex; width: 100%; align-items: center; justify-content: flex-end; margin-top: 20px;';

const copyButton = document.createElement('input');
copyButton.id = 'bundle-log';
copyButton.style = `width: ${buttonWidth}px; margin-right: 10px; margin-left: 60px;`;
copyButton.type = 'button';
copyButton.value = 'Copy Bundle';

const downloadButton = document.createElement('input');
downloadButton.id = 'bundle-dl';
downloadButton.style = `width: ${buttonWidth}px; margin-left: 10px; margin-right: 10px;`;
downloadButton.type = 'button';
downloadButton.value = 'Download Bundle';

bundleControls.appendChild(copyButton);
bundleControls.appendChild(downloadButton);

const app = document.getElementById('app');

document.body.insertBefore(bundleControls, app);

document.getElementById('bundle-log').onclick = () => bundle.log(entry);
document.getElementById('bundle-dl').onclick = () =>
  bundle.download(entry, output);
