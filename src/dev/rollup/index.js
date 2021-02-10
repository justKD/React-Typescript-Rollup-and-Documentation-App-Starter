import { bundle } from './bundle';

const entry = './src/dev/build/index.js';
const output = 'bundle.js';

const bundleControls = document.createElement('div');
bundleControls.id = 'bundle-controls';
bundleControls.style = 'margin-top: 60px; margin-left: 100px;';

const copyButton = document.createElement('input');
copyButton.id = 'bundle-log';
copyButton.style = 'margin-right: 10px;';
copyButton.type = 'button';
copyButton.value = 'Copy Bundle';

const downloadButton = document.createElement('input');
downloadButton.id = 'bundle-dl';
downloadButton.type = 'button';
downloadButton.value = 'Download Bundle';

bundleControls.appendChild(copyButton);
bundleControls.appendChild(downloadButton);

const app = document.getElementById('app');

document.body.insertBefore(bundleControls, app);

document.getElementById('bundle-log').onclick = () => bundle.log(entry);
document.getElementById('bundle-dl').onclick = () =>
  bundle.download(entry, output);
