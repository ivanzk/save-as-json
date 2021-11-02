import formatDate from './format-date';
import formatTime from './format-time';

function adjustFilename(value: number | string = '%timestamp'): string {
  let filename = String(value).trim() || '%timestamp';

  const timestamp = Date.now();

  const filenameTemplates = {
    '%timestamp': timestamp,
    '%title': document.title,
    '%date': formatDate(new Date(timestamp)),
    '%time': formatTime(new Date(timestamp)),
  };

  Object.entries(filenameTemplates).forEach(([key, value]) => {
    filename = filename.replace(new RegExp(key), String(value));
  });

  return filename;
}

export default adjustFilename;
